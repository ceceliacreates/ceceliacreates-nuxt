(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{204:function(t,n,e){var content=e(208);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(64).default)("6ecd3433",content,!0,{sourceMap:!1})},207:function(t,n,e){"use strict";var r=e(204);e.n(r).a},208:function(t,n,e){(n=e(63)(!1)).push([t.i,".nav-link[data-v-26b0e940]{text-decoration:none}",""]),t.exports=n},210:function(t,n,e){"use strict";e.r(n);e(207);var r=e(42),c=e(206),o=e.n(c),l=e(312),v=e(311),m=e(302),f=e(298),x=e(303),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app-bar",{attrs:{absolute:"",app:"",color:"white",dark:"",src:"https://source.unsplash.com/E0AHdsENmDg/1920x1310"},scopedSlots:t._u([{key:"img",fn:function(n){var r=n.props;return[e("v-img",t._b({attrs:{gradient:"to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"}},"v-img",r,!1))]}}])},[t._v(" "),e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/"}},[e("v-icon",{staticClass:"ma-2"},[t._v("mdi-code-tags")]),t._v(" "),e("v-icon",{staticClass:"ma-2"},[t._v("mdi-heart")]),t._v(" "),e("v-icon",{staticClass:"ma-2"},[t._v("mdi-pencil")])],1),t._v(" "),e("v-spacer"),t._v(" "),e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/projects"}},[e("v-btn",{staticClass:"white--text",attrs:{text:""}},[t._v("PROJECTS")])],1),t._v(" "),e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/blog"}},[e("v-btn",{staticClass:"white--text",attrs:{text:""}},[t._v("BLOG")])],1),t._v(" "),e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/talks"}},[e("v-btn",{staticClass:"white--text",attrs:{text:""}},[t._v("TALKS")])],1)],1)}),[],!1,null,"26b0e940",null);n.default=component.exports;o()(component,{VAppBar:l.a,VBtn:v.a,VIcon:m.a,VImg:f.a,VSpacer:x.a})},232:function(t,n,e){var content=e(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(64).default)("083745fe",content,!0,{sourceMap:!1})},283:function(t,n,e){"use strict";var r=e(232);e.n(r).a},284:function(t,n,e){(n=e(63)(!1)).push([t.i,".nav-link{text-decoration:none}img{max-width:800px;max-height:600px}h2{font-weight:700;font-size:28px;margin-bottom:30px;margin-top:30px}.nuxt-content h3{font-weight:700;font-size:22px}p{margin-bottom:20px}",""]),t.exports=n},309:function(t,n,e){"use strict";e.r(n);e(45);var r=e(3),c={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,article;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,r=t.params,n.next=3,e("articles",r.slug).fetch();case 3:return article=n.sent,n.abrupt("return",{article:article});case 5:case"end":return n.stop()}}),n)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},o=(e(283),e(42)),l=e(206),v=e.n(l),m=e(304),f=e(314),x=e(302),d=e(275),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("Navigation"),t._v(" "),e("v-main",[e("v-container",{attrs:{fluid:"","fill-height":"",id:"main"}},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/blog"}},[e("v-button",[e("v-icon",{staticClass:"ma-2",attrs:{large:"",color:"cyan darken-1"}},[t._v("mdi-arrow-left")])],1)],1),t._v(" "),e("article",{staticClass:"ma-3 pa-3"},[e("h1",{staticClass:"text-h2"},[t._v(t._s(t.article.title))]),t._v(" "),e("p",{staticClass:"text-subtitle-1"},[t._v(t._s(t.article.description))]),t._v(" "),e("img",{attrs:{src:t.article.img,alt:t.article.alt}}),t._v(" "),e("p",{staticClass:"font-italic"},[t._v("\n          Article last updated: "+t._s(t.formatDate(t.article.updatedAt))+"\n        ")]),t._v(" "),e("nuxt-content",{staticClass:"text-body-1 mx-3",attrs:{document:t.article}})],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;v()(component,{Navigation:e(210).default}),v()(component,{VApp:m.a,VContainer:f.a,VIcon:x.a,VMain:d.a})}}]);