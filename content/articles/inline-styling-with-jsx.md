---
title: Inline Styling with JSX
description: How to properly format inline styling with JSX and React
img: https://source.unsplash.com/c8h0n7fSTqs/
alt: blog post image alt text
tags:
  - react
  - css
  - front-end
---

If you are new to React, you have likely already encountered JSX, a syntax extension for Javascript used by the framework. It very closely resembles HTML, allowing for an easy transition if you’re already using HTML, CSS, and Javascript to create web applications. Just like HTML, JSX allows for inline styling. I’m not here to make an argument for or against inline styling versus external or internal style sheets, but if you do need to use inline style for a JSX element, there are some things to keep in mind to make sure your components render as expected.

Here is an example of a JSX expression being rendered by a simple function component:

```javascript
function HelloHeader() {
  return <h1>Hello World!</h1>;
}
```

The JSX expression is after the return keyword, including the h1 tags. If you think this looks identical to HTML -- you'd be right! There are some differences between HTML and JSX, but for the most part if you're comfortable with HTML, you'll be in good hands.

Let's say you'd like to style this component, and for reasons unexplained here you want to use inline styling. Below is the syntax to style this h1 with font size of 16px and a color of red.

```javascript
function HelloHeader() {
  return <h1 style={{ color: "red", fontSize: "16px" }}>Hello World!</h1>;
}
```

A few things you've probably noticed:

- The value of the style attribute is wrapped in a set of curly braces {}. This is how you pass a Javascript expression in JSX.
- There is a second set of curly braces inside, indicating the object containing the CSS properties and values.
- The CSS property font-size is typed as fontSize. Hyphens don't play nice with JSX, so any CSS property with a hyphen must be converted to camelCase to work.
- The property values are wrapped in quotes. While this isn't necessarily required in a CSS stylesheet, we do need to pass the values as strings in most cases. If you are passing a numeric value, such as for width or margin, it will default to pixels, so if you DON'T want that, you'll need to pass a string like "40%".

As long as you keep those things in mind, you shouldn't have any issues styling your components in JSX!

If you do decide to use an external style sheet instead, webpack within React allows you to import your stylesheet directly in your .js file where your components are defined!

Like this:

```javascript
import "../styles/style.css";
```

Please let me know if you have any questions or corrections, and thanks for reading!
