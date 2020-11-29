# ceceliacreates-nuxt

[Deployed Site](https://stoic-jones-84f845.netlify.app/)

Blog project with Nuxt content module

Using Vuetify for components

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

### Markdown content

### Dynamic page creation

### Default & custom injected variables

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
