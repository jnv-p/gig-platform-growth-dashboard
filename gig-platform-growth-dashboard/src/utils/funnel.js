// Funnel maths. All functions are pure (no React) so they are easy to test.

// Conversion rate = what share of the PREVIOUS stage reached this stage.
// Formula: current / previous * 100
export function conversionRate(previous, current) {
  if (!previous) return 0; // avoid dividing by zero
  return (current / previous) * 100;
}

// Drop-off = the share of people we LOST between two stages.
// Formula: 100 - conversion rate
export function dropOff(previous, current) {
  if (!previous) return 0;
  return 100 - conversionRate(previous, current);
}

// Adds conversion, drop-off and "lost" (people lost) to every stage,
// and finds the stage with the biggest drop-off percentage.
export function analyseFunnel(stages) {
  const rows = stages.map((s, i) => {
    if (i === 0) return { ...s, conversion: null, dropOff: null, lost: 0 };
    const prev = stages[i - 1].count;
    return {
      ...s,
      conversion: conversionRate(prev, s.count),
      dropOff: dropOff(prev, s.count),
      lost: prev - s.count, // lost = previous count - current count
    };
  });

  let biggestIndex = 1; // stage 0 has no previous stage, so start at 1
  rows.forEach((row, i) => {
    if (i > 0 && row.dropOff > rows[biggestIndex].dropOff) biggestIndex = i;
  });
  return { rows, biggestIndex };
}

// What-if: improve ONE stage's conversion by `ppGain` percentage points,
// keep every other conversion the same, and rebuild the counts top to bottom.
// New count = previous (projected) count * new conversion / 100
export function projectFunnel(stages, stageIndex, ppGain) {
  const counts = [stages[0].count];
  for (let i = 1; i < stages.length; i++) {
    let conv = conversionRate(stages[i - 1].count, stages[i].count);
    if (i === stageIndex) conv = Math.min(100, conv + ppGain); // cap at 100%
    counts.push(Math.round((counts[i - 1] * conv) / 100));
  }
  return counts;
}

// Cost per acquisition (CPA) = marketing spend / number acquired.
export function costPerAcquisition(spend, acquired) {
  return acquired ? spend / acquired : 0;
}
