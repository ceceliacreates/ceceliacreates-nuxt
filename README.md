# Unpacking the Nuxt Content Module

This project is a redesign of my personal site using Nuxt.js and the Nuxt Content Module.

Webinar Recording - TBD

[Deployed Site](https://stoic-jones-84f845.netlify.app/)

Resources:

- https://nuxtjs.org/blog/creating-blog-with-nuxt-content
- https://nuxtjs.org/docs/2.x/get-started/installation
- https://vuetifyjs.com/en/introduction/why-vuetify/#guide

## Nuxt.js Features

### Automatic component imports

With Nuxt, any component within your `components` directory will be automatically imported to any page or even other components. There is no need to manually list every single component in your script tag!

Read more about [the Nuxt `components` directory here](https://nuxtjs.org/docs/2.x/get-started/directory-structure#the-components-directory).

### Automatic routes

Nuxt handles page routing for you out of the box. All files within your `pages/` directory will automatically generate a route based on the file name.

You can use subdirectories that will correspond to subdomains. In our app, we have the following `pages/` struture:

```
pages
  blog
    _slug.vue
    index.vue
  projects
    _slug.vue
    index.vue
  talks
    _slug.vue
    index.vue
  index.vue
```

This results in the following routes:

- `myapp.com/` == `index.vue`
- `myapp.com/blog` == `blog/index.vue`
- `myapp.com/projects` == `projects/index.vue`
- `myapp.com/talks` == `talks/index.vue`

When linking to a page internally, use the `<NuxtLink />` component. Use a regular anchor tag for external links.

You can read more about [Nuxt automatic routing here](https://nuxtjs.org/docs/2.x/get-started/routing).

### Vuetify component support

This project uses the [@nuxt/vuetify module](https://github.com/nuxt-community/vuetify-module). Follow [the Setup instructions at the module repo here](https://github.com/nuxt-community/vuetify-module#setup).

We have the module as a dependency in our `package.json`, and we've added it to our buildModules in our `nuxt.config.js`.

```package.json
"devDependencies": {
    "@nuxtjs/vuetify": "^1.11.2"
  }
```

```nuxt.config.js
buildModules: [
    // Simple usage
    "@nuxtjs/vuetify",
  ],
```

We can now use Vuetify.js components in our application. Just like with our custom components, there is no need to import Vuetify components individually! It just works.

## Content Module Features

### Content directory

Similar to how we use the `pages` directory to automatically handle our routing, we can use the `content` directory to manage the content for our site. From here, the Content Module will create our content pages.

You can use a few different file types, but we'll use Markdown. Within our `content` directory, we can use subdirectories to organize content types. In our project, we have articles, projects, and talks to correspond with our blog, projects, and talks pages.

The `content/articles` directory contains the Markdown files for our blog posts. Each post has metadata that contains the injected variables we'll need for our page templates. This is set in a YAML front matter block at the top of our file.

```
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
```

### Dynamic page creation

To leverage dynamic page creation for our content, we'll need to create an `index.vue` and `_slug.vue` file for each subdirectory in our pages folder.

The `index.vue` page contains a list of all the articles. The `_slug.vue` serves as the template for each individual article.

We get the content in the `<script>` tag of our `index.vue` component.

```
<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "img", "slug"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      articles,
    };
  },
};
</script>
```

We get the data of each individual article using the `<script>` tag on the `_slug.vue` template.

```
 async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },
```

We now automatically have routes for each article at `myapp.com/blog/article-file-name`.

### Injected variables

You can use the properties in the YAML front matter block within your page template. They are properties on the `article` object we returned in our `_slug.vue` script tag. We have access to title, description, and img because these are properties in our YAML block.

```
<article class="ma-3 pa-3">
  <h1 class="text-h2">{{ article.title }}</h1>
  <p class="text-subtitle-1">{{ article.description }}</p>
    <img :src="article.img" :alt="article.alt" />
    <p class="font-italic">
      Article last updated: {{ formatDate(article.updatedAt) }}
    </p>
  <nuxt-content class="text-body-1 mx-3" :document="article" />
</article>
```

### Live editing in dev

### Simple build and deploy

Because we are going to be generating a static site to deploy, we have set the `target` as `static` in our `nuxt.config.js`.

Using Netlify, we simply connect to the GitHub repository, set the build command as `npm run generate` and the publish folder as `dist`. Now, every time we push a change to our main branch, Netlify will build the new site and deploy it. This allows us to leverage a Git-based CMS. Whenever we want to add new content to our site, we simply need to add a new Markdown file with our content. Nuxt and the Content Module will dynamically generate the new page and route during the build process.

![Netlify Build Settings Screenshot](https://raw.githubusercontent.com/ceceliacreates/ceceliacreates-nuxt/main/assets/images/build-settings.PNG)

## Screenshots

### Home

![home-screenshot](https://github.com/ceceliacreates/ceceliacreates-nuxt/blob/main/assets/images/screenshot.PNG)

### Blog List

![home-screenshot](https://github.com/ceceliacreates/ceceliacreates-nuxt/blob/main/assets/images/blog-list-screenshot.PNG)

### Blog Post

![blog-post-screenshot](https://github.com/ceceliacreates/ceceliacreates-nuxt/blob/main/assets/images/blog-screenshot.PNG)
