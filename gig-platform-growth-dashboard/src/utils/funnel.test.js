import { describe, it, expect } from "vitest";
import { conversionRate, dropOff, analyseFunnel, projectFunnel } from "./funnel";

const stages = [
  { stage: "A", count: 1000 },
  { stage: "B", count: 500 },
  { stage: "C", count: 100 },
];

describe("funnel helpers", () => {
  it("calculates conversion rate", () => {
    expect(conversionRate(1000, 250)).toBe(25);
  });

  it("calculates drop-off", () => {
    expect(dropOff(1000, 250)).toBe(75);
  });

  it("returns 0 instead of crashing when previous is 0", () => {
    expect(conversionRate(0, 10)).toBe(0);
    expect(dropOff(0, 10)).toBe(0);
  });

  it("finds the stage with the biggest drop-off", () => {
    expect(analyseFunnel(stages).biggestIndex).toBe(2); // 500 -> 100 = 80% lost
  });

  it("projects a better conversion down the funnel", () => {
    // B -> C converts 20%; +10 points = 30%, so 500 * 0.3 = 150
    expect(projectFunnel(stages, 2, 10)).toEqual([1000, 500, 150]);
  });
});
