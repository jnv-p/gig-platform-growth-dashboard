// Rule-based insight text (no AI API). One suggested action per stage name.
const ACTIONS = {
  Registered: "simplify sign-up (fewer fields, phone-number login) and test a clearer promise in the first ad or message.",
  "First job posted": "send employers a guided first-post checklist and offer to post their first job for them.",
  "First hire or match": "recommend candidates to employers automatically and follow up within 24 hours of the first post.",
  "Profile completed": "add a progress bar and a reminder nudge for unfinished profiles.",
  "Applied to a job": "show more relevant jobs right after sign-up and add one-tap apply.",
  Matched: "speed up employer replies with reminders and shortlist alerts.",
};

// Builds 3 short sentences from the analysed funnel (see utils/funnel.js).
export function generateInsight(funnelName, { rows, biggestIndex }) {
  const worst = rows[biggestIndex];
  const previous = rows[biggestIndex - 1];
  const totalLost = rows.reduce((sum, r) => sum + r.lost, 0);
  const share = Math.round((worst.lost / totalLost) * 100); // this step's share of all losses
  const action = ACTIONS[worst.stage] || "interview a few users who dropped off to find out why.";

  return [
    `In the ${funnelName.toLowerCase()}, the biggest loss is between "${previous.stage}" and "${worst.stage}": ${worst.dropOff.toFixed(1)}% of people drop off (${worst.lost.toLocaleString()} lost).`,
    `This single step accounts for ${share}% of all users lost across the funnel.`,
    `Suggested action: ${action}`,
  ].join(" ");
}
