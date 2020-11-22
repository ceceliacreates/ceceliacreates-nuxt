---
title: The Back End of the Front End - APIs
description: An overview of interacting with APIs from your front-end application
img: https://source.unsplash.com/MtqG1lWcUw0/
alt: blog post image alt text
tags:
  - apis
  - rest
  - graphql
  - front-end
---

# The Back End of the Front End - APIs

This is the second in a three-part series about front-end development. It is focused on JavaScript, but many of the concepts here translate to other languages. It was original published on the [Women Who Code Blog](https://www.womenwhocode.com/blog/the-back-end-of-the-front-end-state-part-2).

## What is an API?

Technically, [an API is any application programming interface](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction). Many people describe an API like a counter at a deli. You use the API to make requests and receive responses (hopefully containing what you ordered!)

![responses and requests](https://raw.githubusercontent.com/ceceliacreates/ceceliacreates-nuxt/main/assets/images/apis-1.png)

This could be in the form of functions in a library that you use to interact with underlying functionality.

For example, you’ve likely already used Browser APIs like Fetch or the famous Document Object Model (DOM). Every time you use the fetch() function, you are accessing the Fetch functionality via its API.

This is why libraries and frameworks like [Vue refer to their library of functions as an API](https://vuejs.org/v2/api/). It is the programming interface used to interact with the application.

There are also 3rd-party Web APIs like the Twitter API or this[ amazing API that generates dog pictures](https://dog.ceo/dog-api/). We do not manage these APIs or necessarily see how they function, we simply rely on the API to function properly so we can use it exactly how we need.

An API also allows the user interface of your application to interact with the back end of your application to retrieve and update data and perform business logic functions. These are the types of APIs we’ll focus on in this article.

![user interface and REST API interaction](https://raw.githubusercontent.com/ceceliacreates/ceceliacreates-nuxt/main/assets/images/apis-2.png)

## Rest APIs

REST APIs are [a common standard for modern APIs](https://www.mulesoft.com/resources/api/what-is-an-api). With this type of API, the deli counter is always open and ready for orders. We’ll cover some basics here, but I recommend reading this [guide on REST APIs from Smashing Magazine](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/), as well as the [HTTP Zine by Julia Evans](https://gumroad.com/l/http-zine).

A REST API consists of various endpoints that you access based on the type of information. In our analogy, these would be like a restaurant with different counters for the deli, the bakery, and for hot food. Each of these counters is like an endpoint, with a cashier ready and waiting for your request.

```
/api/bakery

/api/deli

/api/hotfood
```

![REST API with three endpoints](https://raw.githubusercontent.com/ceceliacreates/ceceliacreates-nuxt/main/assets/images/apis-3.png)

You make requests to these endpoints using Methods. The most common methods are GET, POST, PUT, DELETE.

For example, you might make a GET request to the /api/bakery endpoint to see what’s on the menu.

Or you might make a DELETE request to /api/hotfood if you change your mind and want to cancel your order.

You can customize your requests by using paths on the endpoint, query parameters, or by passing headers and/or a body with your request.

Developing APIs is typically handled by back-end engineers, but front-end engineers must understand the API in order to properly interact with it and handle responses. Applications with REST APIs tend to be more tightly coupled between the front and back ends.

## GraphQL

A newer type of API is a [GraphQL API](https://graphql.org/learn/). We can continue our restaurant counter analogy, but in this case, there’s a single counter and you can make any combination of requests at a single endpoint.

Let’s say for example you want to look at the bakery menu, and check the price on a spiral ham and a hot sandwich. You would have to make three requests with a REST API:

```
GET /api/bakery/menu

GET /api/deli/menu?item=spiral+ham

GET /api/hotfood/menu?item=sandwich
```

With a GraphQL API, you can request all the data you need at one time. In this example, a request would look more like this:

```
{
bakery {
	menu
}
deli {
	menu(item: "spiral ham") {
		price
}
hotfood {
```

```
	menu(item: "sandwich") {
		price
}
```

![graphql API with single endpoint](https://raw.githubusercontent.com/ceceliacreates/ceceliacreates-nuxt/main/assets/images/apis-4.png)

GraphQL APIs use “types” and “fields” as the syntax for requests. These are essentially objects and properties. You can also leverage arguments (like passing the “item” to our query above), aliases, fragments (reusable components of a query), and variables.

In addition to queries, you can also update data on your server using mutations. These are similar to POST, PUT, and DELETE requests in a REST API.

## Serverless APIs

Most applications -- regardless of whether they use REST or GraphQL -- deploy the API on a server that is available at all times to receive requests. Again, think of the 24-hour restaurant counter.

![Live server available 24/7](https://raw.githubusercontent.com/ceceliacreates/ceceliacreates-nuxt/main/assets/images/apis-5.png)

Another option that is increasingly popular is a serverless architecture for an application API. Let’s define a few terms that are often grouped together:

### Serverless

A function, API, or architecture that does not use a live running server. This refers to leveraging external APIs and/or vendors that offer on-demand servers to handle requests only when they occur.

![Serverless API available on demand](https://raw.githubusercontent.com/ceceliacreates/ceceliacreates-nuxt/main/assets/images/apis-6.png)

### Microservices

An API architecture that, instead of having a single layer that handles the business logic and data handling of an application, uses multiple packages or functions that are narrow in scope.

![microservices with single user interface and multiple APIs](https://raw.githubusercontent.com/ceceliacreates/ceceliacreates-nuxt/main/assets/images/apis-7.png)

### Jamstack

An approach to web development that uses JavaScript, APIs, and Markdown to pre-build and serve static sites via CDN while leveraging serverless APIs instead of a traditional back end.

If you’re interested in learning more about Jamstack, I recommend the free eBook “[Modern Web Development on the Jamstack](https://www.netlify.com/oreilly-jamstack/)” by Mathias Biilmann and Phil Hawksworth of Netlify.

Again, serverless refers to the architecture of the API, not the syntax. It simply means that your application is not dependent on a dedicated API server. It is often used alongside microservices and/or Jamstack architecture, but it’s not a requirement that they be used together.

## API Considerations

While API development is typically handled by the back end, the increasing popularity of client-side APIs has required front end developers to better understand this area of the application. The following are some considerations when deciding which API approaches to use in your application.

### Modularity

Modularity is a consideration when you’re deciding whether to apply a microservices API architecture.

A monolithic application with a tightly-coupled UI and API can provide predictability and consistency to a codebase, but any changes will be more complex than with a serverless architecture.

Because the APIs in a serverless architecture typically only handle a single task, updating a function or swapping it out entirely doesn’t require an overhaul of the entire application to prevent regressions.

### Maintenance

Maintenance is a consideration for all API-related decisions. If you are using microservices, how do you plan to organize and update the packages? How comfortable are you maintaining external services?

A GraphQL API may be more maintainable for one organization, while another prefers a REST API because it’s more consistent with their data model. Always consider the maintainability of your chosen API architecture and syntax.

### Reliability

Reliability depends on the expected traffic to your site, the delivery method of your front end (server-rendered or pre-rendered and delivered via CDN), and the reliability of any third-party services or vendors.

Sudden spikes in traffic can be harder to manage with a traditional server API, particularly if a server also handles the delivery of the front end content.

### Developer Experience

Certain approaches may be more appealing than others depending on your interest, skill level, and the tooling available. It will also depend on the constraints of your application and organization.

Hopefully, you now have a better understanding of the types of APIs you may encounter as a front end developer. Keep an eye out for this series’s next installment, focused on databases, coming up in November.
