---
title: Express Basics for Beginners
description: The six basic functions you need to know to get up and running with Express
img: express-basics-for-beginners.jpg
alt: blog post image alt text
tags:
  - express
  - node
  - api
  - back-end
---

When you're in a 12-week full-stack boot camp, you have to learn <em>fast</em>. Because I already had familiarity with HTML, CSS, and Javascript, I was generally able to keep these topics separate in my mind as we whizzed through them. Once we transitioned to back end, however, it was like the wild west in my brain.

Node, Express, Sequelize, which did what on the back end? Is "fs" a native or installed package? What do I need to require? I spent a lot of time just copy and pasting from in-class activities and previous homework assignments instead of fully understanding the concepts of what I was coding. I got things to work, but didn't really understand <em>why</em> it worked.

So I decided to go back, really study my code, and delineate what each line was doing, and whether it was working with Node, Express, or my database (either using Sequelize or MongoJS). It was illuminating and revelatory, and finally everything began to click into place.

If you are in a similar situation, I cannot recommend enough going back and really diving into your code and parsing out what each line is accomplishing. No more REST vs. CRUD confusion! And debugging! It was no longer a game of "find the difference" between working code and non-working code. I was able to actually read the error and understand what might be wrong.

As part of this exercise, I created a list of the basic, essential functions for Express. Express is a package that allows you to establish a connection to your server and write paths to handle incoming requests.

Below are the six things you should know how to do in Express, and in most cases, should be included in every application running Express. All of these functions can be written in a single server.js file, or the routes can be modularized into separate .js files and then required in server.js.

## Install and require Express

Express is not a native package to Node, so it must be installed. Because you want to ensure it's included in your node modules, make sure to install it locally and then require it in your server.

<ul>
<li>Run "npm install express" in Node while in your project folder</li>

```node
npm install express
```

<li>Insert "const express = require("express");" in your server.js file</li>

```javascript
const express = require("express");
```

</ul>

## Assign express to an app variable

<ul>
<li>
Insert "const app = express();" in your server.js file. You can now use "app" to reference your instance of express (aka the server you're working with)

```javascript
const app = express();
```

</ul>

## Set app to listen on a specified port

<ul>
<li>
Insert "app.listen(PORT, function () { console.log("App running on port" + PORT)})
</li>
<li>
PORT can either be specified directly or assigned as a variable, ex. "const PORT = process.env.PORT || 3000;"
</li>

```javascript
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("App running on port" + PORT);
});
```

</ul>

## Set app to handle data parsing for JSON and URLencoded requests

<ul>
<li>
Depending on what type of requests your API will expect, you'll need to enable middleware to parse JSON or URLencoded requests. You can do this with app.use().
</li>

```javascript
// handle URLencoded requests
app.use(express.urlencoded({ extended: true }));

// handle JSON requests
app.use(express.json());
```

</ul>

## Enable automatic return of static files

<ul>
<li>
Set up app to automatically return static files without having to write a specific route for each file (ex. a "public" folder that has your HTML, CSS, and client-side JS files)
</li>

```javascript
app.use(express.static("public"));
```

</ul>

## Handle REST requests

Write routes to handle REST requests to paths (GET, POST, PUT, DELETE). Each route requires a callback function that states what to do with the request and, if applicable, the response. I have written out example callback functions for GET and POST, as these are the most common.

### GET

```javascript
app.get("path, function (req, res) {

/// res.send will return the string back to the client
res.send("Hello World!")

// res.sendFile will return the file back to the client
// check out the 'path' package on npm to avoid relative path issues
res.sendFile(path.join(__dirname, "../public/index.html"))})
```

### POST

```javascript

app.post("path", function (req, res) {

const request = req.body;
...
// handle database update
}).then(function (response) {
res.json(response)
})
```

### PUT

```javascript

app.put("path, function (req, res) {

...
// handle database update
}).then(function (response) {
res.json(response)
})
```

### DELETE

```javascript
app.delete("path", function (req, res) {
...
// handle database update
}).then(function (response) {
res.json(response)
```

<p>That's it! As long as you understand how these functions work you have a basic understanding of Express and can set up a server for full stack applications. Please let me know if you have any questions or suggestions!</p>
