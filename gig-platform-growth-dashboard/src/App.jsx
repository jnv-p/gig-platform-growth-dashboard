import { useState } from "react";
import { employerFunnel, seekerFunnel, weeklyKpis } from "./data/sampleData";
import { analyseFunnel } from "./utils/funnel";
import Banner from "./components/Banner";
import InsightBox from "./components/InsightBox";
import FunnelTable from "./components/FunnelTable";
import KpiTable from "./components/KpiTable";
import TrendChart from "./components/TrendChart";
import WhatIfPanel from "./components/WhatIfPanel";

const FUNNELS = {
  employer: { label: "Employer funnel", stages: employerFunnel },
  seeker: { label: "Job seeker funnel", stages: seekerFunnel },
};

export default function App() {
  const [active, setActive] = useState("employer"); // which funnel tab is open
  const { label, stages } = FUNNELS[active];
  const analysis = analyseFunnel(stages);

  return (
    <>
      <Banner />
      <main className="container">
        <h1>Gig Platform Growth Dashboard</h1>

        <div className="tabs">
          {Object.entries(FUNNELS).map(([key, f]) => (
            <button key={key} className={key === active ? "tab active" : "tab"} onClick={() => setActive(key)}>
              {f.label}
            </button>
          ))}
        </div>

        <InsightBox name={label} analysis={analysis} />
        <FunnelTable analysis={analysis} />
        <KpiTable weeks={weeklyKpis} />
        <TrendChart weeks={weeklyKpis} />
        {/* key resets the sliders when the funnel tab changes */}
        <WhatIfPanel key={active} stages={stages} />
      </main>
    </>
  );
}
