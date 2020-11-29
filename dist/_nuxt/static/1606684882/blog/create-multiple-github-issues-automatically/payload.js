__NUXT_JSONP__("/blog/create-multiple-github-issues-automatically", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return {data:[{article:{title:"Create Multiple GitHub Issues Automatically with Node and the GitHub API",description:"How to create GitHub issues automatically from a JSON file using Node, Node-Fetch, the GitHub API, and dotenv.",img:"https:\u002F\u002Fsource.unsplash.com\u002FMAYEkmn7G6E\u002F",alt:"blog post image alt text",tags:["GitHub","node","JSON","api","automation","devops"],toc:[],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"If you are juggling multiple side projects and using GitHub to manage those projects, you may find yourself spending more time than you'd like creating, tagging, and assigning issues on the website."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This script will allow you to create multiple issues at once using the GitHub API. The best part is that it uses as JSON file, so if you do multiple types of the same project (such as a MERN stack project), you can use the same file for multiple projects and save a lot of time."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I have created a demo video, available at "},{type:b,tag:e,props:{href:p,rel:[f,g,h],target:i},children:[{type:a,value:p}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The repository is also online at "},{type:b,tag:e,props:{href:r,rel:[f,g,h],target:i},children:[{type:a,value:r}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The first step will be to create a JSON file with some issues. The only "},{type:b,tag:s,props:{},children:[{type:a,value:"required"}]},{type:a,value:" field is the issue name, but you can also include a description, labels, assignees, and more."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Documentation: "},{type:b,tag:e,props:{href:t,rel:[f,g,h],target:i},children:[{type:a,value:t}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Example:"}]},{type:a,value:c},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,n]},children:[{type:b,tag:o,props:{},children:[{type:a,value:"{\n  \"title\": \"Found a bug\",\n  \"body\": \"I'm having a problem with this.\",\n  \"assignees\": [\n    \"octocat\"\n  ],\n  \"milestone\": 1,\n  \"labels\": [\n    \"bug\"\n  ]\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Next, you will need to install the required packages. "},{type:b,tag:s,props:{},children:[{type:a,value:"NOTE"}]},{type:a,value:" You do not NEED these packages if you prefer to use a different API request method such as Axios and don't need to use environment variables."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Node-Fetch Documentation: "},{type:b,tag:e,props:{href:u,rel:[f,g,h],target:i},children:[{type:a,value:u}]},{type:a,value:"\ndotenv Documentation: "},{type:b,tag:e,props:{href:v,rel:[f,g,h],target:i},children:[{type:a,value:v}]}]},{type:a,value:c},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,n]},children:[{type:b,tag:o,props:{},children:[{type:a,value:"npm init\nnpm install node-fetch\nnpm install dotenv\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Next you will create a .js file with your script. I named mine CreateIssueFromJSON.js. Below is the code from my script. I will break it down."}]},{type:a,value:c},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,n]},children:[{type:b,tag:o,props:{},children:[{type:a,value:"const fetch = require('node-fetch');\nrequire('dotenv').config();\nconst file = require('.\u002FTestIssues.json');\nconst user = 'ceceliacreates';\nconst repo = 'APITools';\n\ncreateIssueFromJSON = function(file) {\n    file.forEach(issue =\u003E {\n        fetch(`https:\u002F\u002Fapi.github.com\u002Frepos\u002F${user}\u002F${repo}\u002Fissues`, {\n            method: 'post',\n            body:    JSON.stringify(issue),\n            headers: {'Content-Type': 'application\u002Fjson', 'Authorization': `${process.env.TOKEN}`}\n        })\n        .then(res =\u003E res.json())\n        .then(json =\u003E {\n            if (json.Status == 201) {\n                console.log(`Issue created at ${json.status.Location}`)\n            }\n            else {\n                console.log(`Something went wrong. Response: ${JSON.stringify(json)}`)\n            }\n        });\n    })\n}\n\ncreateIssueFromJSON(file);\n\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The first section is requiring the packages and declaring the values of the JSON file, your GitHub username, and the project repository. These could be stored in your .env file or accepted via Node parameters as well if you prefer."}]},{type:a,value:c},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,n]},children:[{type:b,tag:o,props:{},children:[{type:a,value:"const fetch = require('node-fetch');\nrequire('dotenv').config();\nconst file = require('.\u002FTestIssues.json');\nconst user = 'ceceliacreates';\nconst repo = 'APITools';\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The next section defines the function that will iterate over the JSON file and make the POST request to the GitHub API for each issue in the file."}]},{type:a,value:c},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,n]},children:[{type:b,tag:o,props:{},children:[{type:a,value:"createIssueFromJSON = function(file) {\n    file.forEach(issue =\u003E {\n        fetch(`https:\u002F\u002Fapi.github.com\u002Frepos\u002F${user}\u002F${repo}\u002Fissues`, {\n            method: 'post',\n            body:    JSON.stringify(issue),\n            headers: {'Content-Type': 'application\u002Fjson', 'Authorization': `${process.env.TOKEN}`}\n        })\n        .then(res =\u003E res.json())\n        .then(json =\u003E {\n            if (json.Status == 201) {\n                console.log(`Issue created at ${json.status.Location}`)\n            }\n            else {\n                console.log(`Something went wrong. Response: ${JSON.stringify(json)}`)\n            }\n        });\n    })\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The function uses the forEach() Array method to iterate, and uses interpolation to input the needed variables in the request URL. The dotenv package is only used to protect the Authorization Token."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"After the fetch method (using the Node-Fetch package) returns its promise, the response is turned into JSON and, if the status message is successful, returns a corresponding message to the console. If not, it returns the response."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Please let me know if you have any questions, or feel free to create issues on the GitHub repository. Thanks for reading!"}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fcreate-multiple-github-issues-automatically",extension:".md",slug:"create-multiple-github-issues-automatically",createdAt:"2020-11-22T03:59:12.432Z",updatedAt:"2020-11-22T20:03:38.553Z"}}],fetch:[],mutations:void 0}}("text","element","\n","p","a","nofollow","noopener","noreferrer","_blank","div","nuxt-content-highlight","pre","language-text","line-numbers","code","https:\u002F\u002Fyoutu.be\u002FtR5FpO3QglA",".","https:\u002F\u002Fgithub.com\u002Fceceliacreates\u002FAPITools","em","https:\u002F\u002Fdeveloper.github.com\u002Fv3\u002Fissues\u002F#create-an-issue","https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fnode-fetch","https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fdotenv")));