"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{9315:function(n,e,t){t.d(e,{Hx:function(){return l},LI:function(){return s},Y5:function(){return p},uV:function(){return d},wr:function(){return u}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1243),c="9d4ece4211ac8e35ee810dac1072ece6",s=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:c,query:e,language:"en-US",page:1,include_adult:!1}),n.next=4,o.Z.get("https://api.themoviedb.org/3/search/movie?".concat(t.toString()));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:c,media_type:"movie",time_window:"week",language:"en-US"},n.next=3,o.Z.get("https://api.themoviedb.org/3/trending/".concat(e.media_type,"/").concat(e.time_window,"?api_key=").concat(e.api_key));case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9245:function(n,e,t){t.d(e,{a:function(){return p}});var r,a,i=t(168),o=t(6444),c=o.default.div(r||(r=(0,i.Z)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  background-color: rgba(0, 0, 0, 0.2);\n  transition: opacity 500ms linear, visibility 500ms linear;\n"]))),s=o.default.div(a||(a=(0,i.Z)(["\n  position: absolute;\n  top: calc(50% - 60px);\n  left: calc(50% - 60px);\n  width: 120px;\n  border: 16px solid #3f51b5;\n  border-top: 16px solid rgba(174, 175, 165, 1);\n  border-radius: 50%;\n  height: 120px;\n  animation: spin 2s linear infinite;\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),u=t(184),p=function(){return(0,u.jsx)(c,{children:(0,u.jsx)(s,{})})}},5033:function(n,e,t){t.r(e),t.d(e,{MovieDetails:function(){return C},default:function(){return I}});var r,a,i,o,c,s,u,p=t(5861),d=t(9439),l=t(4687),f=t.n(l),h=t(2791),x=t(7689),v=t(1087),g=t(2187),m=t(9315),b=t(9245),w=t(168),j=t(6444),y=j.default.button(r||(r=(0,w.Z)(["\nmargin-bottom: 10px;\npadding: 5px 10px;\nbackground-color: #141e58;\ncolor: #fff;\nborder-radius: 4px;\nborder-style: none;\nopacity: 0.6;\n&:hover{\n    opacity: 1;\n  }\n"]))),k=j.default.div(a||(a=(0,w.Z)(["\npadding: 10px;\npadding-bottom: 20px;\ndisplay: flex;\ngap: 15px;\ntext-align: justify;\nborder-bottom: 1px solid #141e58;\nh1 {\n  text-align: left;\n}\n"]))),Z=j.default.ul(i||(i=(0,w.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\ngap: 10px;\n"]))),_=j.default.li(o||(o=(0,w.Z)(["\npadding: 10px;\nbackground-color: #141e58;\ncolor: #fff;\nborder-radius: 4px;\nborder: 1px solid;\nopacity: 0.6;\n"]))),S=j.default.span(c||(c=(0,w.Z)(["\nmargin-left: 5px;\n"]))),L=j.default.div(s||(s=(0,w.Z)(["\npadding: 10px;\npadding-bottom: 20px;\nborder-bottom: 1px solid #141e58;\n"]))),O=j.default.li(u||(u=(0,w.Z)(["\nmargin-bottom: 5px;\n"]))),U=t(184),C=function(){var n=(0,x.UO)().movieId,e=(0,g.a)(),t=e.isLoading,r=e.setIsLoading,a=(0,h.useState)({}),i=(0,d.Z)(a,2),o=i[0],c=i[1],s=(0,h.useState)([]),u=(0,d.Z)(s,2),l=u[0],w=u[1],j=(0,h.useState)("Release year is unknown"),C=(0,d.Z)(j,2),I=C[0],R=C[1],F=(0,x.TH)(),G=(0,x.s0)();(0,h.useEffect)((function(){var e=function(){var e=(0,p.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,(0,m.Y5)(n);case 4:t=e.sent,console.log(t),c(t),w(t.genres),R(t.release_date.slice(0,4)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Oops, something went wrong. ".concat(e.t0,". Try again later."));case 14:return e.prev=14,r(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);return(0,U.jsxs)(U.Fragment,{children:[t&&(0,U.jsx)(b.a,{}),(0,U.jsx)(y,{type:"button",onClick:function(){G(F.state.from)},children:"Go back"}),(0,U.jsxs)(k,{children:[(0,U.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(o.poster_path),alt:o.title}),(0,U.jsxs)("div",{children:[(0,U.jsxs)("h1",{children:[o.title,(0,U.jsx)(S,{children:"(".concat(I,")")})]}),(0,U.jsxs)("p",{children:[(0,U.jsx)("span",{children:"User score:"}),(0,U.jsx)(S,{children:o.vote_average})]}),(0,U.jsx)("h2",{children:"Overview"}),(0,U.jsx)("p",{children:o.overview}),l.length>0&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)("h2",{children:"Genres"}),(0,U.jsx)(Z,{children:l.map((function(n){return(0,U.jsx)(_,{children:n.name},n.id)}))})]})]})]}),(0,U.jsxs)(L,{children:[(0,U.jsx)("h2",{children:"Additional information"}),(0,U.jsxs)("ul",{children:[(0,U.jsx)(O,{children:(0,U.jsx)(v.OL,{to:"cast",children:"Cast"})}),(0,U.jsx)(O,{children:(0,U.jsx)(v.OL,{to:"reviews",children:"Reviews"})})]})]}),(0,U.jsx)(L,{children:(0,U.jsx)(x.j3,{})})]})},I=C}}]);
//# sourceMappingURL=33.00c85313.chunk.js.map