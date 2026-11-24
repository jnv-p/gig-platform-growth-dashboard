import { KPIS, kpiStatus } from "./kpi";

// Turns the weekly KPI data into CSV text: one row per week,
// and Actual / Target / Status columns for every KPI.
export function buildCsv(weeks) {
  const header = ["Week"];
  KPIS.forEach((k) => header.push(`${k.label} actual`, `${k.label} target`, `${k.label} status`));

  const lines = weeks.map((w) => {
    const cells = [w.week];
    KPIS.forEach((k) => {
      cells.push(w.actual[k.key], w.target[k.key], kpiStatus(w.actual[k.key], w.target[k.key]));
    });
    return cells.join(",");
  });
  return [header.join(","), ...lines].join("\n");
}

// Creates a temporary file in the browser and clicks a hidden link to download it.
export function downloadCsv(weeks, filename = "weekly-kpi-report.csv") {
  const blob = new Blob([buildCsv(weeks)], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
