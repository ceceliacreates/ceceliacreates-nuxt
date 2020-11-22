---
title: The Back End of the Front End - State Management
description: An overview of state management in front-end applications
img: https://source.unsplash.com/G9dTk2zOB54/
alt: blog post image alt text
tags:
  - redux
  - state
  - front-end
---

# The Back End of the Front End - State Management

## This is the first part of a three-part series. This series focuses on JavaScript development, however many concepts translate to other languages. It was original published on the [Women Who Code Blog](https://www.womenwhocode.com/blog/the-back-end-of-the-front-end-state-part-1).

## What is State?

When working with static, content-based websites, application state is not as much of a consideration, if at all. It’s only as our applications become more interactive that we need to consider state management approaches.

So what is state? Chris Ferdinandi puts it very succinctly in his article “[State-based components with vanilla JS](https://gomakethings.com/state-based-components-with-vanilla-js/)”:

_State is data at a particular moment in time. It’s the present “state” of your data. Get it?_

If you’ve ever used JavaScript to create a counter on a website, you’ve worked with application state. State allows us to update and access data about our application so that we can make decisions based on that data.

Why do we care about managing our application state? Raquel Moss explains it like this in her article “[What is state? Why do I need to manage it?](https://egghead.io/articles/what-is-state-why-do-i-need-to-manage-it)”:

_For me, the key to understanding state management was when I realised that there is always state. Whether or not I’m managing it, with an interactive web application, there is always state — users perform actions, and things change in response to those actions._

Managing state is also important for sharing state across your components. Making sure that your UI components have access to the correct, current state is important for your application to render correctly.

## State Management Overview

Once you have decided that the interactivity of your application requires state management, it helps to understand some overall concepts of managing state before choosing a tool.

There are concepts of state management that are consistent no matter what framework or tool you are using. Typically your state management will have some or all of the following elements:

### Store

A location where your application state is --ahem _*stored*_. This is typically an object, sometimes with a level of abstraction provided by the tool.

For example:

```
Const store = {
isLoggedIn: true,
status: "active",
couponCodeActive: false,
couponCode: null,
cart: [
{
itemName: "Deluxe Rubber Ducky",
itemPrice: "5"
}
]}
```

### Properties

These are the individual data points used to track the state of your application. In the above example, isLoggedIn, couponCode, and Cart are examples of properties.

### Actions

Functions or methods that are used to update properties in a store. You can think of this like a “setter” method for an object.

For example:

```
logout () {

store.isLoggedIn = false

}
```

### Selectors

Functions or methods that are used to retrieve the current state of a property. You can think of these like “getter” methods for an object.

For example:

```
getShopperStatus () {

Return store.status

}
```

### Reducer

This is a method of state management, where a separate function, called a reducer, receives the actions, decides how to handle them, and then creates a new state and returns a copy of that state, rather than mutating the state directly.

You can think of a reducer like a bookkeeper with a ledger. Every time the state is updated is like a transaction. Imagine if every time a transaction took place, the bookkeeper simply erased the current account balance, calculated the updated balance based on the transaction, and then recorded the new balance.

There are two issues here. First, you would have no way to identify duplicate requests or transactions. You would also have no understanding of the history of your account changes or why the balance was updated.

Like a good bookkeeper, a reducer can keep a record of state and updates across time to better ensure state is updated appropriately and in accordance with rules and best practices.

### Effects

Functions or methods that subscribe to or listen for state update events and perform side effects based on those changes.

![Visualization of state management](https://raw.githubusercontent.com/ceceliacreates/ceceliacreates-nuxt/main/assets/images/state-management.png)

I highly recommend David Meister’s article “[State management in JavaScript](https://codeburst.io/state-management-in-javascript-15d0d98837e1)”, where he outlines principles and best practices for working with state in your application. These include having unique properties, properly defining and updating dependencies, and keeping state as localized as possible.

## State Management Tools

There are a variety of state management options available depending on what framework you are using. Some of these options are built directly into the framework (such as React Hooks) while others are third-party libraries you can integrate into your app. While there are many, many other libraries you can use, I’ll go over the most popular here.

If you are interested in state management with vanilla JavaScript, check out:

- “[State-based components with vanilla JS](https://gomakethings.com/state-based-components-with-vanilla-js/)” by Chris Ferdinandi
- “[Build a state management system with vanilla JavaScript](https://css-tricks.com/build-a-state-management-system-with-vanilla-javascript/)” by Andy Bell

Many different state management libraries are based on the Redux model. This model is based on [three principles](https://redux.js.org/introduction/three-principles):

1. A single source of truth
2. State is read-only
3. Changes are made with pure functions

### Angular

In Angular, the [NgRX](https://ngrx.io/), [NGXS](https://www.ngxs.io/), and [angular-redux](https://angular-redux.github.io/store/) libraries are all based on the Redux pattern, and provide different features depending on the complexity of the state management needs of your application. “[Angular state management with Redux Pattern](https://tsh.io/blog/angular-state-management-with-redux-pattern/)” provides a comparison of these three options.

If you are interested in options for state management without using an external library, check the article “[Angular Application State Management: You Do (Not) Need External Data Stores like NgRx, Redux, and Other](https://www.maestralsolutions.com/angular-application-state-management-you-do-not-need-external-data-stores/)” by Seid Mehmedovic for recommendations.

### React

React provides strong tools within the framework for managing state. If you do not need a complex or Redux-based state management tool, you can leverage React features like Hooks, Effects, and/or Context to keep track of your application state. In “[Application State Management with React](https://kentcdodds.com/blog/application-state-management-with-react)”, Kent C. Dodds breaks down a solution using the React Context API for state management.

For external libraries, Redux is lightweight and popular but does have a learning curve. I’d recommend following the outlined best practices from the start to reduce confusion.

[XState](https://xstate.js.org/docs/) is also popular, and includes a state machine as well as neat tools like statecharts and visualizations. It has templates available for React, Typescript, Vue, and Svelte.

### Vue

[Vuex](https://vuex.vuejs.org/) is the official state management library for Vue, and is also based on the Redux pattern. You can also check out the article “[State Management Without Vuex](https://michaelnthiessen.com/state-management-without-vuex/)” by Michael Thiessen for state management options using built-in functionality in Vue.

Ultimately, the tool you choose will depend on the complexity of your application and your comfort level with the syntax and structure of the tool. I recommend starting as simply as required and only adding additional features if necessary. Remember the [agile concept of YAGNI - “You aren’t gonna need it”](https://www.martinfowler.com/bliki/Yagni.html) and build for now, not for later.
