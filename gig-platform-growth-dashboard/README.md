# Gig Platform Growth Dashboard

A small React dashboard that analyses the acquisition funnels of a two-sided job and gig platform.

**Live demo:** https://<your-username>.github.io/gig-platform-growth-dashboard/

> **Note: all data in this project is fictional sample data.** It is not from any real company. The dashboard shows a banner saying so, and every number lives in one file, `src/data/sampleData.js`.

## Why I built it

I am a second-year B.Tech student at IIT Guwahati. I built this to practise acquisition funnel analysis for a two-sided job and gig platform, where both employers and job seekers have to be acquired, activated and matched. It is a learning project, and I wanted to turn funnel analysis into something you can open and click through.

## Features

- Two funnels with a tab toggle: employers (contacted, registered, first job posted, first hire or match) and job seekers (reached, registered, profile completed, applied, matched)
- Count, conversion rate from the previous stage and drop-off for every stage, with the biggest drop-off highlighted
- Weekly KPI table (registrations, job posts, applications, matches) showing actual vs target and an on-track or behind label
- Trend chart of actual vs target for any chosen KPI
- What-if panel: improve one stage's conversion by a chosen number of percentage points and see projected registrations, matches and cost per acquisition
- Rule-based insight text that names the stage losing the most users and suggests one action (plain JavaScript, no AI API)
- CSV export of the weekly KPI report
- Responsive layout that works on mobile

## Tech stack

React 18, Vite, Recharts, plain CSS, Vitest for unit tests. Front end only, no backend. Deployed with GitHub Actions to GitHub Pages.

## How the funnel maths works

The helpers are in `src/utils/funnel.js`, each with a comment.

- **Conversion rate** = current stage count / previous stage count x 100
- **Drop-off** = 100 - conversion rate (the share lost between two stages)
- **People lost** = previous stage count - current stage count
- **Biggest drop-off** = the stage with the highest drop-off percentage
- **What-if projection**: raise one stage's conversion by X percentage points (capped at 100%), keep all other conversions unchanged, then rebuild every later stage from the new count
- **Cost per acquisition** = marketing spend / number acquired (registrations or matches)

The what-if panel uses a single sample spend figure and assumes other conversions stay constant. It is a simple projection, not a forecast.

## Run locally

```bash
npm install
npm run dev     # http://localhost:5173/gig-platform-growth-dashboard/
npm test        # unit tests for the conversion and drop-off functions
npm run build   # production build
```

## What I would do next

- **Connect real platform data** in place of the sample file, with proper date ranges and channel breakdowns
- **Add an admin reporting view** with saved weekly reports instead of a manual CSV export
- **Add cohort retention** to see whether users who register in a given week come back and stay active

## Project structure

```
src/
  data/sampleData.js   all sample data in one place
  utils/               funnel maths, KPI status, insight text, CSV export
  components/          small display components
```
