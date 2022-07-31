"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[500],{2358:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(3504),a=n(6871),u=n(184);function i(t){var e=t.title,n=void 0===e?"No movie title":e,i=t.id,c=(0,a.TH)();return(0,u.jsx)("li",{id:i,children:(0,u.jsx)(r.OL,{to:"/movies/".concat(i),state:{from:c},children:n})})}function c(t){var e=t.movies.map((function(t){var e=t.id,n=t.title,r=t.original_title;return(0,u.jsx)(i,{id:e,title:r||n},e)}));return(0,u.jsx)("ol",{children:e})}},4500:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=n(885),a=n(2358),u=n(3504),i=n(6871),c=n(5562),o=n.n(c),s=n(2791),f=n(4390),p=n(8787),l=n(5705),d=n(5650),h=n(184);function v(t){var e=t.setSearchParams,n=d.Ry({query:d.Z_().required("Name is required")});return(0,h.jsx)(l.J9,{initialValues:{query:""},validationSchema:n,onSubmit:function(t,n){var r=t.query.trim();""===r&&o().Notify.warning("Enter the name of the movie!!!"),e(""!==r?{query:r}:{})},children:(0,h.jsxs)(l.l0,{children:[(0,h.jsx)(l.gN,{type:"text",name:"query"}),(0,h.jsx)(l.Bc,{name:"query",component:"div"}),(0,h.jsx)("button",{type:"submit",children:"Search"})]})})}function m(){var t=(0,u.lr)(),e=(0,r.Z)(t,2),n=e[0],c=e[1],l=(0,s.useState)([]),d=(0,r.Z)(l,2),m=d[0],y=d[1],g=(0,i.s0)(),x=n.get("query");return(0,s.useEffect)((function(){x&&(0,f.H_)(x).then((function(t){0===t.length&&x&&(c({}),o().Notify.failure("Not found movie this name!!!")),y(t)})).catch((function(){g("/",{replace:!0})}))}),[x,c,g]),(0,h.jsxs)(p.K,{children:[(0,h.jsx)(v,{setSearchParams:c}),x&&(0,h.jsx)(a.Z,{movies:m})]})}},4390:function(t,e,n){n.d(e,{H_:function(){return s},Hg:function(){return p},TP:function(){return d},tx:function(){return y},zv:function(){return v}});var r=n(5861),a=n(7757),u=n.n(a),i=n(4569),c=n.n(i),o="ab9c2583cd1a2f86525b45efd67b53f1";function s(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().get("/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return n=t.sent,r=n.data.results,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().get("trending/movie/day?api_key=".concat(o));case 2:return e=t.sent,n=e.data.results,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().get("/movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().get("/movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().get("movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c().defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=500.e0820670.chunk.js.map