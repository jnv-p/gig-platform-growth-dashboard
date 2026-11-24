import { generateInsight } from "../utils/insight";

export default function InsightBox({ name, analysis }) {
  return (
    <section className="card insight">
      <h2>Insight</h2>
      <p>{generateInsight(name, analysis)}</p>
    </section>
  );
}
