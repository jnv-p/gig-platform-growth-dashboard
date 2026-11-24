import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { KPIS } from "../utils/kpi";

// Line chart of actual vs target for one KPI at a time (KPIs have very different
// scales, so one chart per selected KPI stays readable).
export default function TrendChart({ weeks }) {
  const [kpi, setKpi] = useState("registrations");
  const data = weeks.map((w) => ({ week: w.week, Actual: w.actual[kpi], Target: w.target[kpi] }));

  return (
    <section className="card">
      <div className="card-head">
        <h2>Weekly trend</h2>
        <select value={kpi} onChange={(e) => setKpi(e.target.value)} aria-label="Choose KPI">
          {KPIS.map((k) => <option key={k.key} value={k.key}>{k.label}</option>)}
        </select>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Actual" stroke="#2563eb" strokeWidth={3} />
            <Line type="monotone" dataKey="Target" stroke="#9ca3af" strokeDasharray="6 4" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
