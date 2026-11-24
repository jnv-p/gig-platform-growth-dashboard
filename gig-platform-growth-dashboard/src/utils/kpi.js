// The KPIs shown in the table, chart and CSV (key matches sampleData.js).
export const KPIS = [
  { key: "registrations", label: "Registrations" },
  { key: "jobPosts", label: "Job posts" },
  { key: "applications", label: "Applications" },
  { key: "matches", label: "Matches" },
];

// On track when actual has reached (or beaten) the weekly target.
export function kpiStatus(actual, target) {
  return actual >= target ? "On track" : "Behind";
}
