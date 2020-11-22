import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3adda1cd = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _4683986d = () => interopDefault(import('..\\pages\\projects.vue' /* webpackChunkName: "pages/projects" */))
const _566dd81e = () => interopDefault(import('..\\pages\\talks\\index.vue' /* webpackChunkName: "pages/talks/index" */))
const _39270085 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _54b736d6 = () => interopDefault(import('..\\pages\\talks\\_slug.vue' /* webpackChunkName: "pages/talks/_slug" */))
const _397b1def = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3adda1cd,
    name: "blog"
  }, {
    path: "/projects",
    component: _4683986d,
    name: "projects"
  }, {
    path: "/talks",
    component: _566dd81e,
    name: "talks"
  }, {
    path: "/blog/:slug",
    component: _39270085,
    name: "blog-slug"
  }, {
    path: "/talks/:slug",
    component: _54b736d6,
    name: "talks-slug"
  }, {
    path: "/",
    component: _397b1def,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
