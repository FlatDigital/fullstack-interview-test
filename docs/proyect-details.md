# Objetives

## Backend
Build a API wrpper around the git information about this proyect(repository)
The main object are:
* Commits
* Authors
* Branches
* PRs

## Frontend
Build the next views

* A view where we can see the existing branches
* A branch detail view where we can see all the commits to one specific branch, with commit messages, authors and timestamps.
* A commit detail view where we can see the commit message, timestamp, number of files changed and author names / emails.
* A "PR" create view, where we can choose two branches (base and compare), and merge them together, just like Pull Requests work in Github.
* A "PR" list view, where we see all created PRs and the following info: Author, Title, Description and Status (Open, Closed, Merged). If the status is Open, there should be a button that allows us to mark it as Closed.
* For the PR create view, we'll ask the user for a PR title and description, and we'll give them 2 options: either save it (Status = Open), or merge it. Note that merge operations can fail due to conflicts or other reasons, so make sure you handle and show whatever error happens when merging. There's no need to do something about these errors other than show them in the frontend. After a successful merge, the PR should move to a Merged status.