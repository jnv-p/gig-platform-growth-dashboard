// Shows each funnel stage: count, conversion from previous stage, drop-off.
// The stage with the biggest drop-off is highlighted.
export default function FunnelTable({ analysis }) {
  const { rows, biggestIndex } = analysis;
  const top = rows[0].count; // bar widths are relative to the first stage

  return (
    <section className="card">
      <h2>Funnel stages</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Stage</th>
              <th>Count</th>
              <th>Conversion</th>
              <th>Drop-off</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.stage} className={i === biggestIndex ? "worst" : ""}>
                <td>
                  {r.stage}
                  <div className="bar"><span style={{ width: `${(r.count / top) * 100}%` }} /></div>
                </td>
                <td>{r.count.toLocaleString()}</td>
                <td>{i === 0 ? "-" : `${r.conversion.toFixed(1)}%`}</td>
                <td>
                  {i === 0 ? "-" : `${r.dropOff.toFixed(1)}% (-${r.lost.toLocaleString()})`}
                  {i === biggestIndex && <span className="badge bad">Biggest drop</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
