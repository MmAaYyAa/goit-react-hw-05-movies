"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[522],{687:function(n,e,t){t.d(e,{Df:function(){return s},M1:function(){return p},Pg:function(){return c},UN:function(){return u},tx:function(){return d}});var r=t(861),a=t(757),i=t.n(a),o=t(340);o.Z.defaults.baseURL="https://api.themoviedb.org/3/",o.Z.defaults.params={api_key:"7fd4f410c4ec08626e88dd82651b1178",language:"en-US"},o.Z.defaults.headers={Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmQ0ZjQxMGM0ZWMwODYyNmU4OGRkODI2NTFiMTE3OCIsInN1YiI6IjY1NmEzZWNhNTY4NDYzMDBlZTExYzRkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iYhBZwX53rUY3z7-sh1Tm3eSJwK0Zg0dZSk27-YoCmw",accept:"application/json"};var s=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/week");case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie",{params:{query:e}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e),{params:{append_to_response:"poster_path"}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits"),{params:{append_to_response:"poster_path"}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},174:function(n,e,t){t.d(e,{Z:function(){return v}});t(791);var r,a,i,o,s,u=t(689),c=t(168),p=t(867),d=t(87),l=p.ZP.ul(r||(r=(0,c.Z)(["\n  list-style-type: none;\n  display: grid;\n  max-width: calc(100vw - 65px);\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  grid-gap: 15px;\n  margin-top: 50px;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  @media screen and (min-width: 768px) {\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));\n    grid-gap: 40px;\n  }\n"]))),f=p.ZP.li(a||(a=(0,c.Z)(["\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  border: none;\n  background-color: #f4eeff;\n  overflow: hidden;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n  }\n  list-style: none;\n  margin: 0;\n"]))),h=p.ZP.img(i||(i=(0,c.Z)(["\n  display: flex;\n  width: 100%;\n"]))),x=p.ZP.p(o||(o=(0,c.Z)(["\n  font-size: 16px;\n  font-weight: 700;\n  color: black;\n"]))),m=(0,p.ZP)(d.rU)(s||(s=(0,c.Z)(["\n  text-decoration: none;\n  text-align: center;\n"]))),g=t(184),v=function(n){var e=n.movies,t=(0,u.TH)();return(0,g.jsx)(l,{children:e.map((function(n){var e=n.title,r=n.id,a=n.poster_path;return(0,g.jsx)(f,{children:(0,g.jsxs)(m,{to:"/movies/".concat(r),state:{from:t},children:[(0,g.jsx)(x,{children:e}),(0,g.jsx)(h,{src:a?"https://image.tmdb.org/t/p/w500".concat(a):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:250,alt:"poster"})]})},r)}))})}},522:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r,a,i,o,s,u=t(861),c=t(439),p=t(757),d=t.n(p),l=t(791),f=t(687),h=t(168),x=t(867),m=x.ZP.header(r||(r=(0,h.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  border: none;\n  \n"]))),g=x.ZP.form(a||(a=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),v=x.ZP.button(i||(i=(0,h.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' id='Outline' viewBox='0 0 24 24' width='512' height='512'%3E%3Cpath d='M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z'/%3E%3C/svg%3E\");\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),Z=x.ZP.span(o||(o=(0,h.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),b=x.ZP.input(s||(s=(0,h.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),w=t(686),y=t(184);function k(n){var e=n.onSubmit,t=(0,l.useState)(""),r=(0,c.Z)(t,2),a=r[0],i=r[1];return(0,y.jsx)("div",{children:(0,y.jsx)(m,{children:(0,y.jsxs)(g,{onSubmit:function(n){n.preventDefault(),""!==a.trim()?(e(a.trim()),i("")):w.Notify.info("Enter your request")},children:[(0,y.jsx)(v,{type:"submit",children:(0,y.jsx)(Z,{children:"Search"})}),(0,y.jsx)(b,{onChange:function(n){i(n.currentTarget.value.toLowerCase())},value:a,className:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]})})})}var j=t(174),C=t(87),z=t(881),N=function(){return(0,y.jsx)(z.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"1.5",width:"50",visible:!0})},I=function(){var n,e=(0,l.useState)([]),t=(0,c.Z)(e,2),r=t[0],a=t[1],i=(0,C.lr)(),o=(0,c.Z)(i,2),s=o[0],p=o[1],h=(0,l.useState)(!1),x=(0,c.Z)(h,2),m=x[0],g=x[1],v=null!==(n=s.get("query"))&&void 0!==n?n:"";(0,l.useEffect)((function(){if(v){var n=function(){var n=(0,u.Z)(d().mark((function n(){var e,t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!0),n.prev=1,n.next=4,(0,f.UN)(v);case 4:if(e=n.sent,(t=e.results).length){n.next=9;break}return w.Notify.failure("Sorry,nothing was found for your request.Please,try again."),n.abrupt("return");case 9:t.length>0&&a(t),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0.message);case 15:return n.prev=15,g(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[1,12,15,18]])})));return function(){return n.apply(this,arguments)}}();n()}}),[v]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(k,{onSubmit:function(n){p({query:n}),a([])}}),m&&(0,y.jsx)(N,{}),r&&r.length>0&&(0,y.jsx)(j.Z,{movies:r})]})}}}]);
//# sourceMappingURL=522.339bf7d0.chunk.js.map