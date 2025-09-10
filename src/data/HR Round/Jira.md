# Jira Interview Topics and Most-Asked Questions

A concise, interview-focused guide to Jira concepts, real-world scenarios, and
practical tips.

## 1) Jira Basics

- What is Jira and where is it used?
- Difference between Jira Software, Jira Service Management, and Jira Work
  Management?
- What are Projects, Issues, and Issue Types?
- Kanban vs Scrum in Jira Software
- Components, Versions, and Epics—what are they used for?

## 2) Issues & Workflows

- Issue lifecycle states (To Do → In Progress → Done) and custom states
- Workflow elements: Status, Transitions, Conditions, Validators, Post-functions
- What are Resolutions? How do they differ from Status?
- How to set default assignee? How to auto-assign issues?
- Creating and using Sub-tasks and Epics

Sample Q:

- Explain how you would design a workflow for code review with “In Review”,
  “Changes Requested”, and “Approved” states.

## 3) Boards & Agile Concepts

- Scrum board vs Kanban board
- Backlog, Sprint, Active Sprint, Burndown/Burnup charts
- Story Points vs Time Tracking
- Swimlanes and Quick Filters
- Definition of Done vs Definition of Ready

Sample Q:

- How would you configure swimlanes to prioritize blockers and critical bugs?

## 4) JQL (Jira Query Language)

- Basic JQL syntax: field, operators, functions
- Common fields: assignee, reporter, status, project, labels, priority, updated,
  created, fixVersion
- Functions: currentUser(), startOfDay(), endOfDay(), startOfWeek(), membersOf()
- Order by and saved filters

Useful JQL Examples:

- Issues assigned to me, not done:
  `assignee = currentUser() AND status NOT IN (Done, Closed)`
- Open bugs updated in last 24 hours:
  `project = ABC AND issuetype = Bug AND status != Done AND updated >= -1d`
- All issues in current sprint: `sprint IN openSprints() AND project = ABC`
- Unestimated stories:
  `issuetype = Story AND ("Story Points" IS EMPTY OR "Story Points" = 0)`

## 5) Permissions & Schemes

- Global permissions vs Project permissions
- Permission Scheme, Issue Security Scheme
- Notification Scheme
- Workflow Scheme and Issue Type Scheme
- Screen and Screen Scheme, Field Configuration and Field Configuration Scheme

Sample Q:

- How do you restrict certain issue types to be created by only a specific role?

## 6) Screens, Fields, and Forms

- Screens for Create/Edit/View; Screen Schemes per issue type
- Custom fields: context, scope, default values
- Required vs optional fields (Field Configuration)
- Dynamic fields via Behaviours (Jira Server/DC + ScriptRunner)

Sample Q:

- How do you show a custom field only for Bugs in project ABC?

## 7) Automation

- Native automation rules: triggers, conditions, actions
- Common automations: auto-assign, transition on PR merge, add comment on status
  change
- Smart values and branching on related issues (Epic/Parent/Linked issues)
- Webhooks and external integrations

Sample Q:

- Design an automation that moves an issue to “In Review” when a pull request is
  opened.

## 8) Integrations & DevOps

- Integrations: Bitbucket, GitHub, GitLab, CI/CD tools
- Development panel: branches, commits, PRs
- Linking commits/PRs to issues via smart commits (e.g.,
  `ABC-123 #comment ... #time 1h #done`)
- Confluence integration for documentation

## 9) Reporting & Dashboards

- Dashboards: gadgets, filters, sharing
- Sprint reports, Velocity, Control Chart, Cumulative Flow Diagram
- Custom reports from saved filters

Sample Q:

- Which charts help identify bottlenecks in a Kanban flow?

## 10) Project Administration

- Creating and configuring projects (company-managed vs team-managed)
- When to use company-managed over team-managed
- Managing roles, users, and groups
- Archiving and cleanup (versions, releases, components)

## 11) Advanced Topics

- Issue linking types (blocks, relates to, duplicates)
- Cross-project boards and filters
- Next-gen (team-managed) vs classic (company-managed) differences
- Managing large backlogs and performance considerations
- SLA management (Jira Service Management)

## 12) Common Real-World Scenarios

- Enforce code review before moving to Done
- Auto-create subtasks on Story creation
- Transition parent when all subtasks are Done
- Block deployment if Critical bugs exist in a release

Example Solutions (High-Level):

- Enforce code review: add workflow transition from “In Progress” → “In Review”
  with validator checking linked PR existence; add post-function to set reviewer
  field.
- Auto-create subtasks: automation trigger on issue creation IF issuetype =
  Story THEN create subtasks (Development, QA, Docs).
- Transition parent: branch to related issues → if all subtasks status = Done
  THEN transition parent.

## 13) Best Practices

- Keep workflows simple; avoid state explosion
- Use labels and components consistently
- Prefer saved filters and quick filters over complex board configs for teams
- Regular backlog grooming; archive unused fields and schemes
- Document conventions in Confluence

## 14) Frequently Asked Interview Questions

1. What is the difference between Status and Resolution?
2. How do Permission Schemes differ from Issue Security Schemes?
3. Explain how to design a workflow with approvals and rejections.
4. How do you write JQL to find issues updated by a specific user last week?
5. What is the purpose of Components and Versions?
6. How do you restrict a transition to a specific role?
7. How do you set up auto-assign on issue creation?
8. What are Story Points and how do they differ from time estimates?
9. How would you migrate a team-managed project to a company-managed project?
10. How do you link commits and PRs to issues? What are smart commits?
11. What is the Velocity chart and how do you interpret it?
12. How do you configure screen fields differently for Bugs vs Stories?
13. How do you bulk update issues safely?
14. How would you troubleshoot a slow board or heavy JQL filter?
15. How do you handle SLAs in Jira Service Management?

---

Tip: Bring short, real examples of JQL, a simple workflow diagram, and 2–3
automation rules you’ve used. Practical stories resonate in interviews.
