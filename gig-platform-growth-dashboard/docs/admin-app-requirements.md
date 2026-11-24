# Admin Dashboard: Marketing Requirements

**From:** Marketing Lead  **To:** Development Team  **Product:** Job and gig platform, Cambodia

*This is a practice document based on a fictional scenario. It is not based on any real company.*

## Why marketing needs this

We spend money to bring in two groups: employers and job seekers. Today I can't see which channel brings people who actually post jobs, apply or get matched. I need the admin dashboard to answer that without asking an engineer for a database query.

## 1. Data and fields we need

| Area | Fields |
|---|---|
| Every user | User ID, user type (employer or job seeker), registration date and time, acquisition source, province or city, language (Khmer or English) |
| Acquisition source | Channel (Facebook, Telegram, referral, field team, Google, other), campaign name, referral code. Saved at sign-up and never overwritten |
| Employer status | Registered, first job posted, first hire or match, last active date |
| Job seeker status | Registered, profile completed, applied to a job, matched, last active date |
| Activity | Job posts (date, employer, category, location), applications (date, job, seeker), matches (date, job, seeker, employer) |
| Cost | Marketing spend per channel and campaign, per week, entered by marketing |

Rules: use one clear definition for each status, written down and shared. Store dates in one time zone (Cambodia time) and say so on screen. Show money in USD and KHR where relevant.

## 2. Reports and filters

- **Weekly KPIs:** registrations, job posts, applications and matches, each with target, actual and on-track or behind.
- **Funnel by channel:** the employer and job seeker funnels, with conversion and drop-off at each stage, split by acquisition source.
- **Campaign comparison:** two or more campaigns side by side with registrations, matches, spend and cost per registration and per match.
- **Filters on every report:** date range, user type, channel, campaign, province or city, language.

## 3. Export

- Download any report as CSV. It must respect the filters on screen.
- Column names in plain English, one header row, dates in a standard format.
- The export must open correctly in Excel and Google Sheets, including Khmer text.
- Log who exported what and when.

## 4. Roles and permissions

| Role | Can do |
|---|---|
| Marketing | View all reports, enter spend, export aggregated data |
| Operations or support | View individual users and job posts, fix data issues |
| Admin | Everything, plus manage users and roles |
| Read-only (management) | View reports only |

Marketing does not need phone numbers or personal details. Reports should show counts and rates by default. Personal data should be visible only to roles that need it.

## 5. Priorities

**Must have (first release)**
1. Acquisition source and registration date saved for every user
2. Clear status fields for employers and job seekers
3. Weekly KPI report with targets
4. Funnel report with a channel filter
5. CSV export that follows filters
6. Roles: marketing, admin, read-only

**Should have (soon after)**
1. Campaign comparison with spend and cost per acquisition
2. Province and language filters
3. Export log

**Nice to have (later)**
1. Cohort retention (do people registered in week X come back?)
2. Scheduled weekly report by email
3. Alerts when a KPI falls behind target
4. Charts that can be saved or shared as an image

## Questions for the team

- Can we capture the acquisition source at sign-up, including referral codes? Without it most reports above are not possible.
- Are the status definitions above easy to calculate from the current data?
- Roughly how long would the must-have list take?
