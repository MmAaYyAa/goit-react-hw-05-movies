"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{687:function(n,e,t){t.d(e,{Df:function(){return s},M1:function(){return p},Pg:function(){return u},UN:function(){return c},tx:function(){return f}});var r=t(861),a=t(757),i=t.n(a),o=t(340);o.Z.defaults.baseURL="https://api.themoviedb.org/3/",o.Z.defaults.params={api_key:"7fd4f410c4ec08626e88dd82651b1178",language:"en-US"},o.Z.defaults.headers={Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmQ0ZjQxMGM0ZWMwODYyNmU4OGRkODI2NTFiMTE3OCIsInN1YiI6IjY1NmEzZWNhNTY4NDYzMDBlZTExYzRkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iYhBZwX53rUY3z7-sh1Tm3eSJwK0Zg0dZSk27-YoCmw",accept:"application/json"};var s=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/week");case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie",{params:{query:e}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e),{params:{append_to_response:"poster_path"}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits"),{params:{append_to_response:"poster_path"}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},174:function(n,e,t){t.d(e,{Z:function(){return g}});t(791);var r,a,i,o,s,c=t(689),u=t(168),p=t(867),f=t(87),l=p.ZP.ul(r||(r=(0,u.Z)(["\n  list-style-type: none;\n  display: grid;\n  max-width: calc(100vw - 65px);\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  grid-gap: 15px;\n  margin-top: 50px;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  @media screen and (min-width: 768px) {\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));\n    grid-gap: 40px;\n  }\n"]))),d=p.ZP.li(a||(a=(0,u.Z)(["\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  border: none;\n  background-color: #f4eeff;\n  overflow: hidden;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n  }\n  list-style: none;\n  margin: 0;\n"]))),m=p.ZP.img(i||(i=(0,u.Z)(["\n  display: flex;\n  width: 100%;\n"]))),h=p.ZP.p(o||(o=(0,u.Z)(["\n  font-size: 16px;\n  font-weight: 700;\n  color: black;\n"]))),x=(0,p.ZP)(f.rU)(s||(s=(0,u.Z)(["\n  text-decoration: none;\n  text-align: center;\n"]))),v=t(184),g=function(n){var e=n.movies,t=(0,c.TH)();return(0,v.jsx)(l,{children:e.map((function(n){var e=n.title,r=n.id,a=n.poster_path;return(0,v.jsx)(d,{children:(0,v.jsxs)(x,{to:"/movies/".concat(r),state:{from:t},children:[(0,v.jsx)(h,{children:e}),(0,v.jsx)(m,{src:a?"https://image.tmdb.org/t/p/w500".concat(a):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:250,alt:"poster"})]})},r)}))})}},544:function(n,e,t){t.r(e);var r=t(861),a=t(439),i=t(757),o=t.n(i),s=t(791),c=t(687),u=t(174),p=t(184);e.default=function(){var n=(0,s.useState)([]),e=(0,a.Z)(n,2),t=e[0],i=e[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.Df)();case 3:e=n.sent,(t=e.results).length>0&&i(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log("error.message",n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Trending Movies"}),(0,p.jsx)(u.Z,{movies:t})]})}}}]);
//# sourceMappingURL=544.27cd7cd7.chunk.js.map