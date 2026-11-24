import { useState } from "react";
import { projectFunnel, costPerAcquisition } from "../utils/funnel";
import { sampleSpend } from "../data/sampleData";

const money = (v) => `$${v.toFixed(2)}`;
const signed = (v) => (v > 0 ? `+${v.toLocaleString()}` : v.toLocaleString());

// What-if panel: pick a stage, improve its conversion by X points,
// and see projected registrations, matches and cost per acquisition.
export default function WhatIfPanel({ stages }) {
  const [stage, setStage] = useState(1); // index of the chosen stage
  const [gain, setGain] = useState(5); // percentage points
  const [spend, setSpend] = useState(sampleSpend);

  const now = stages.map((s) => s.count);
  const next = projectFunnel(stages, stage, gain);
  const last = stages.length - 1;

  // Registrations is always stage 1; matches is always the last stage.
  const rows = [
    ["Registrations", now[1], next[1], (v) => v.toLocaleString()],
    ["Matches", now[last], next[last], (v) => v.toLocaleString()],
    ["Cost per registration", costPerAcquisition(spend, now[1]), costPerAcquisition(spend, next[1]), money],
    ["Cost per match", costPerAcquisition(spend, now[last]), costPerAcquisition(spend, next[last]), money],
  ];

  return (
    <section className="card">
      <h2>What-if</h2>
      <div className="controls">
        <label>
          Stage to improve
          <select value={stage} onChange={(e) => setStage(Number(e.target.value))}>
            {stages.slice(1).map((s, i) => <option key={s.stage} value={i + 1}>{stages[i].stage} → {s.stage}</option>)}
          </select>
        </label>
        <label>
          Improvement: +{gain} percentage points
          <input type="range" min="0" max="20" value={gain} onChange={(e) => setGain(Number(e.target.value))} />
        </label>
        <label>
          Marketing spend (sample, USD)
          <input type="number" min="0" value={spend} onChange={(e) => setSpend(Number(e.target.value))} />
        </label>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Metric</th><th>Current</th><th>Projected</th><th>Change</th></tr>
          </thead>
          <tbody>
            {rows.map(([name, a, b, fmt]) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{fmt(a)}</td>
                <td>{fmt(b)}</td>
                <td>{typeof a === "number" && fmt === money ? money(b - a) : signed(b - a)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
