---
title: Create Multiple GitHub Issues Automatically with Node and the GitHub API
description: How to create GitHub issues automatically from a JSON file using Node, Node-Fetch, the GitHub API, and dotenv.
img: https://source.unsplash.com/MAYEkmn7G6E/
alt: blog post image alt text
tags:
  - GitHub
  - node
  - JSON
  - api
  - automation
  - devops
---

If you are juggling multiple side projects and using GitHub to manage those projects, you may find yourself spending more time than you'd like creating, tagging, and assigning issues on the website.

This script will allow you to create multiple issues at once using the GitHub API. The best part is that it uses as JSON file, so if you do multiple types of the same project (such as a MERN stack project), you can use the same file for multiple projects and save a lot of time.

I have created a demo video, available at https://youtu.be/tR5FpO3QglA.

The repository is also online at https://github.com/ceceliacreates/APITools.

The first step will be to create a JSON file with some issues. The only _required_ field is the issue name, but you can also include a description, labels, assignees, and more.

Documentation: https://developer.github.com/v3/issues/#create-an-issue

Example:

```
{
  "title": "Found a bug",
  "body": "I'm having a problem with this.",
  "assignees": [
    "octocat"
  ],
  "milestone": 1,
  "labels": [
    "bug"
  ]
}
```

Next, you will need to install the required packages. _NOTE_ You do not NEED these packages if you prefer to use a different API request method such as Axios and don't need to use environment variables.

Node-Fetch Documentation: https://www.npmjs.com/package/node-fetch
dotenv Documentation: https://www.npmjs.com/package/dotenv

```
npm init
npm install node-fetch
npm install dotenv
```

Next you will create a .js file with your script. I named mine CreateIssueFromJSON.js. Below is the code from my script. I will break it down.

```
const fetch = require('node-fetch');
require('dotenv').config();
const file = require('./TestIssues.json');
const user = 'ceceliacreates';
const repo = 'APITools';

createIssueFromJSON = function(file) {
    file.forEach(issue => {
        fetch(`https://api.github.com/repos/${user}/${repo}/issues`, {
            method: 'post',
            body:    JSON.stringify(issue),
            headers: {'Content-Type': 'application/json', 'Authorization': `${process.env.TOKEN}`}
        })
        .then(res => res.json())
        .then(json => {
            if (json.Status == 201) {
                console.log(`Issue created at ${json.status.Location}`)
            }
            else {
                console.log(`Something went wrong. Response: ${JSON.stringify(json)}`)
            }
        });
    })
}

createIssueFromJSON(file);

```

The first section is requiring the packages and declaring the values of the JSON file, your GitHub username, and the project repository. These could be stored in your .env file or accepted via Node parameters as well if you prefer.

```
const fetch = require('node-fetch');
require('dotenv').config();
const file = require('./TestIssues.json');
const user = 'ceceliacreates';
const repo = 'APITools';
```

The next section defines the function that will iterate over the JSON file and make the POST request to the GitHub API for each issue in the file.

```
createIssueFromJSON = function(file) {
    file.forEach(issue => {
        fetch(`https://api.github.com/repos/${user}/${repo}/issues`, {
            method: 'post',
            body:    JSON.stringify(issue),
            headers: {'Content-Type': 'application/json', 'Authorization': `${process.env.TOKEN}`}
        })
        .then(res => res.json())
        .then(json => {
            if (json.Status == 201) {
                console.log(`Issue created at ${json.status.Location}`)
            }
            else {
                console.log(`Something went wrong. Response: ${JSON.stringify(json)}`)
            }
        });
    })
}
```

The function uses the forEach() Array method to iterate, and uses interpolation to input the needed variables in the request URL. The dotenv package is only used to protect the Authorization Token.

After the fetch method (using the Node-Fetch package) returns its promise, the response is turned into JSON and, if the status message is successful, returns a corresponding message to the console. If not, it returns the response.

Please let me know if you have any questions, or feel free to create issues on the GitHub repository. Thanks for reading!
