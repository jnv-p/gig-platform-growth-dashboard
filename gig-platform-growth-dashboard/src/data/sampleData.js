// ALL sample data lives here. Every number is fictional.
// To use real data later, replace the values below (keep the same shape).

// Funnel stages: each stage is { stage, count }. Order matters (top to bottom).
export const employerFunnel = [
  { stage: "Employers contacted", count: 4000 },
  { stage: "Registered", count: 1400 },
  { stage: "First job posted", count: 770 },
  { stage: "First hire or match", count: 400 },
];

export const seekerFunnel = [
  { stage: "Job seekers reached", count: 30000 },
  { stage: "Registered", count: 12000 },
  { stage: "Profile completed", count: 6000 },
  { stage: "Applied to a job", count: 2400 },
  { stage: "Matched", count: 720 },
];

// 4 weeks of KPIs. "actual" is what happened, "target" is the goal.
export const weeklyKpis = [
  {
    week: "Week 1",
    actual: { registrations: 3000, jobPosts: 420, applications: 1600, matches: 240 },
    target: { registrations: 3000, jobPosts: 400, applications: 1700, matches: 250 },
  },
  {
    week: "Week 2",
    actual: { registrations: 3300, jobPosts: 450, applications: 1800, matches: 270 },
    target: { registrations: 3200, jobPosts: 450, applications: 1800, matches: 260 },
  },
  {
    week: "Week 3",
    actual: { registrations: 3400, jobPosts: 480, applications: 2000, matches: 280 },
    target: { registrations: 3500, jobPosts: 500, applications: 2000, matches: 300 },
  },
  {
    week: "Week 4",
    actual: { registrations: 3700, jobPosts: 550, applications: 2200, matches: 330 },
    target: { registrations: 3700, jobPosts: 500, applications: 2300, matches: 320 },
  },
];

// Sample marketing spend (USD) used as the default in the What-if panel.
export const sampleSpend = 6000;
