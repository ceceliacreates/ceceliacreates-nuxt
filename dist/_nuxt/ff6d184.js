(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{204:function(t,r,e){var content=e(208);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(64).default)("6ecd3433",content,!0,{sourceMap:!1})},207:function(t,r,e){"use strict";var n=e(204);e.n(n).a},208:function(t,r,e){(r=e(63)(!1)).push([t.i,".nav-link[data-v-26b0e940]{text-decoration:none}",""]),t.exports=r},210:function(t,r,e){"use strict";e.r(r);e(207);var n=e(42),c=e(206),o=e.n(c),l=e(312),v=e(311),d=e(302),_=e(298),f=e(303),component=Object(n.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-app-bar",{attrs:{absolute:"",app:"",color:"white",dark:"",src:"https://source.unsplash.com/E0AHdsENmDg/1920x1310"},scopedSlots:t._u([{key:"img",fn:function(r){var n=r.props;return[e("v-img",t._b({attrs:{gradient:"to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"}},"v-img",n,!1))]}}])},[t._v(" "),e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/"}},[e("v-icon",{staticClass:"ma-2"},[t._v("mdi-code-tags")]),t._v(" "),e("v-icon",{staticClass:"ma-2"},[t._v("mdi-heart")]),t._v(" "),e("v-icon",{staticClass:"ma-2"},[t._v("mdi-pencil")])],1),t._v(" "),e("v-spacer"),t._v(" "),e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/projects"}},[e("v-btn",{staticClass:"white--text",attrs:{text:""}},[t._v("PROJECTS")])],1),t._v(" "),e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/blog"}},[e("v-btn",{staticClass:"white--text",attrs:{text:""}},[t._v("BLOG")])],1),t._v(" "),e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/talks"}},[e("v-btn",{staticClass:"white--text",attrs:{text:""}},[t._v("TALKS")])],1)],1)}),[],!1,null,"26b0e940",null);r.default=component.exports;o()(component,{VAppBar:l.a,VBtn:v.a,VIcon:d.a,VImg:_.a,VSpacer:f.a})},226:function(t,r,e){var content=e(246);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(64).default)("11aa2c8e",content,!0,{sourceMap:!1})},245:function(t,r,e){"use strict";var n=e(226);e.n(n).a},246:function(t,r,e){(r=e(63)(!1)).push([t.i,".v-card__text,.v-card__title{word-break:normal}.blog-card{height:100%}.blog-link{text-decoration:none}",""]),t.exports=r},306:function(t,r,e){"use strict";e.r(r);e(45);var n=e(3),c={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function r(){var e,n,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.$content,n=t.params,r.next=3,e("articles",n.slug).only(["title","description","img","slug"]).sortBy("createdAt","asc").fetch();case 3:return c=r.sent,r.abrupt("return",{articles:c});case 5:case"end":return r.stop()}}),r)})))()}},o=(e(245),e(42)),l=e(206),v=e.n(l),d=e(304),_=e(243),f=e(213),m=e(273),x=e(314),k=e(298),C=e(275),h=e(278),component=Object(o.a)(c,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-app",[e("Navigation"),t._v(" "),e("v-main",[e("div",[e("v-container",[e("v-row",{attrs:{wrap:""}},t._l(t.articles,(function(article){return e("v-col",{key:article.slug,attrs:{cols:"12",sm:"6",lg:"4"}},[e("NuxtLink",{staticClass:"blog-link",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[e("v-card",{staticClass:"blog-card",attrs:{shaped:""}},[e("v-img",{attrs:{src:article.img}}),t._v(" "),e("v-card-text",[e("v-card-title",[t._v("\n                    "+t._s(article.title)+"\n                  ")]),t._v(" "),e("v-card-subtitle",[t._v(t._s(article.description))])],1)],1)],1)],1)})),1)],1)],1)])],1)}),[],!1,null,null,null);r.default=component.exports;v()(component,{Navigation:e(210).default}),v()(component,{VApp:d.a,VCard:_.a,VCardSubtitle:f.a,VCardText:f.b,VCardTitle:f.c,VCol:m.a,VContainer:x.a,VImg:k.a,VMain:C.a,VRow:h.a})}}]);