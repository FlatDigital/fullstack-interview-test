# Backend routes

Here we can see all api routes by API of backend

## Branches
* **GET /api/:author/:repositoryName/branches**
This return a list of branches.
```json
[
  {
    "name": "master",
    "commit": "cdd8c8c4a4e5ad9a527e41871d6b164d5283616f",
    "protected": false
  }
]
```

## Commits
* **GET /api/:author/:repositoryName/branches/:branchName/commits**

This return a list of commits.
```json
[
  {
    "sha": "cdd8c8c4a4e5ad9a527e41871d6b164d5283616f",
    "author": "FrcGustavo",
    "message": "Merge pull request #21 from FranciscoGustavo/feat/page-to-view-drafts\n\nFeat/page to view drafts",
    "verified": true,
    "date": "2021-01-27T02:44:17Z"
  },
]
```
* **GET /api/:author/:repositoryName/branches/:branchName/commits/:commitSha**

This return the detail about one commit 
```json
{
  "author": "FrcGustavo",
  "author_email": "hidalgo_fco520@outlook.com",
  "message": "Merge pull request #21 from FranciscoGustavo/feat/page-to-view-drafts\n\nFeat/page to view drafts",
  "date": "2021-01-27T02:44:17Z",
  "verified": true,
  "sha": "cdd8c8c4a4e5ad9a527e41871d6b164d5283616f",
  "total": 2913,
  "additions": 1071,
  "deletions": 1842,
  "files": [
    {
      "sha": "b5b571f28498575a7a47abc241854008b439e93e",
      "filename": ".gitignore",
      "status": "modified",
      "additions": 2,
      "deletions": 1,
      "changes": 3,
      "patch": "@@ -5,4 +5,5 @@\n .env\n .next\n out\n-package-lock.json\n\\ No newline at end of file\n+package-lock.json\n+src/oldeditpost.jsx\n\\ No newline at end of file"
    }
  ]
}
```

## Pulls
* **GET /api/:author/:repositoryName/pulls**

This return  a list of pulls
```json
[
  {
  "title": "Testing",
  "number": 23,
  "author": "FranciscoGustavo",
  "date": "2021-03-15T20:54:01Z",
  "description": "Testing",
  "state": "open",
  "merged": null
  }
]
```
* **POST /api/:author/:repositoryName/pulls**

This create a pull request
You need send on body of request
```json
{ 
  "title": "My own pull request",
  "body": "Pull request with my tool",
  "head": "feature-new-test",
  "base": "master"
}
```
Response
```json
{}
```
* **POST /api/:author/:repositoryName/merges**

This create a merge
```json
{
  "head": "feature-new-test",
  "base": "master"
}
```
Response
```json
{}
```
* **PUT /api/:author/:repositoryName/pulls/:number**
  
This update of state of one pull
You need to send the current state on the body in format json
```json
  {
    "state": "closed"
  }
```
Response
```json
{
  "state": "open"
}
```
* **GET /api/:author/:repositoryName/pulls/compare/:base/:compare**
  
This return an object with the comparison between two branches
```json
{
"files": [
    {
      "sha": "3607cdf86384f0fff9930931893a56d54eb76fa6",
      "filename": ".gitignore",
      "status": "modified",
      "additions": 0,
      "deletions": 1,
      "changes": 1,
      "patch": "@@ -5,5 +5,4 @@\n .env\n .next\n out\n-package-lock.json\n src/oldeditpost.jsx\n\\ No newline at end of file"
    },
  ]
}
``` 
