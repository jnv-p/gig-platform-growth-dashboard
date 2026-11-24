import { KPIS, kpiStatus } from "../utils/kpi";
import { downloadCsv } from "../utils/csv";

// Weekly KPI table: each cell shows ACTUAL / TARGET and an on-track or behind badge.
export default function KpiTable({ weeks }) {
  return (
    <section className="card">
      <div className="card-head">
        <h2>Weekly KPIs (actual / target)</h2>
        <button className="btn" onClick={() => downloadCsv(weeks)}>Export CSV</button>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Week</th>
              {KPIS.map((k) => <th key={k.key}>{k.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {weeks.map((w) => (
              <tr key={w.week}>
                <td>{w.week}</td>
                {KPIS.map((k) => {
                  const actual = w.actual[k.key];
                  const target = w.target[k.key];
                  const status = kpiStatus(actual, target);
                  return (
                    <td key={k.key}>
                      {actual.toLocaleString()} / {target.toLocaleString()}
                      <span className={status === "On track" ? "badge good" : "badge bad"}>{status}</span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
