import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1952acc7 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _384f129f = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _0d577458 = () => interopDefault(import('../pages/talks/index.vue' /* webpackChunkName: "pages/talks/index" */))
const _179c0b7f = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _36987157 = () => interopDefault(import('../pages/projects/_slug.vue' /* webpackChunkName: "pages/projects/_slug" */))
const _0ba0d310 = () => interopDefault(import('../pages/talks/_slug.vue' /* webpackChunkName: "pages/talks/_slug" */))
const _926d88c0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _1952acc7,
    name: "blog"
  }, {
    path: "/projects",
    component: _384f129f,
    name: "projects"
  }, {
    path: "/talks",
    component: _0d577458,
    name: "talks"
  }, {
    path: "/blog/:slug",
    component: _179c0b7f,
    name: "blog-slug"
  }, {
    path: "/projects/:slug",
    component: _36987157,
    name: "projects-slug"
  }, {
    path: "/talks/:slug",
    component: _0ba0d310,
    name: "talks-slug"
  }, {
    path: "/",
    component: _926d88c0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
