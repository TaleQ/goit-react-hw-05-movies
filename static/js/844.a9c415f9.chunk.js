"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[844],{9315:function(n,e,t){t.d(e,{Hx:function(){return f},LI:function(){return u},Y5:function(){return p},uV:function(){return d},wr:function(){return s}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1243),c="9d4ece4211ac8e35ee810dac1072ece6",u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:c,query:e,language:"en-US",page:1,include_adult:!1}),n.next=4,o.Z.get("https://api.themoviedb.org/3/search/movie?".concat(t.toString()));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:c,media_type:"movie",time_window:"week",language:"en-US"},n.next=3,o.Z.get("https://api.themoviedb.org/3/trending/".concat(e.media_type,"/").concat(e.time_window,"?api_key=").concat(e.api_key));case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},2738:function(n,e,t){t.d(e,{x:function(){return i}});var r=t.p+"static/media/poster.e7ec84172f6fa1b3f445.jpeg",a=t(184),i=function(){return(0,a.jsx)("img",{src:r,alt:"No poster"})}},9245:function(n,e,t){t.d(e,{a:function(){return p}});var r,a,i=t(168),o=t(6444),c=o.default.div(r||(r=(0,i.Z)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  background-color: rgba(0, 0, 0, 0.2);\n  transition: opacity 500ms linear, visibility 500ms linear;\n"]))),u=o.default.div(a||(a=(0,i.Z)(["\n  position: absolute;\n  top: calc(50% - 60px);\n  left: calc(50% - 60px);\n  width: 120px;\n  border: 16px solid #3f51b5;\n  border-top: 16px solid rgba(174, 175, 165, 1);\n  border-radius: 50%;\n  height: 120px;\n  animation: spin 2s linear infinite;\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),s=t(184),p=function(){return(0,s.jsx)(c,{children:(0,s.jsx)(u,{})})}},7961:function(n,e,t){t.r(e),t.d(e,{MovieDetails:function(){return g}});var r=t(5861),a=t(9439),i=t(4687),o=t.n(i),c=t(2791),u=t(7689),s=t(1087),p=t(2187),d=t(9315),f=t(9245),l=t(6454),x=t(2738),h=t(1686),v=t(184),g=function(){var n=(0,u.UO)().movieId,e=(0,p.a)(),t=e.isLoading,i=e.setIsLoading,g=(0,c.useState)({}),m=(0,a.Z)(g,2),b=m[0],w=m[1],j=(0,c.useState)([]),y=(0,a.Z)(j,2),k=y[0],Z=y[1],_=(0,c.useState)(""),S=(0,a.Z)(_,2),C=S[0],L=S[1],F=(0,u.TH)(),O=(0,u.s0)();(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,(0,d.Y5)(n);case 4:t=e.sent,w(t),Z(t.genres),L(t.release_date.slice(0,4)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),h.Report.info("An error occurred, try again later","".concat(e.t0),"Okay");case 13:return e.prev=13,i(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);return(0,v.jsxs)(v.Fragment,{children:[t&&(0,v.jsx)(f.a,{}),(0,v.jsx)(l.lm,{type:"button",onClick:function(){O(F.state.from)},children:"Go back"}),(0,v.jsxs)(l.uA,{children:[null!==b.poster_path?(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(b.poster_path),alt:b.title}):(0,v.jsx)(x.x,{}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("h1",{children:[b.title,""!==C&&(0,v.jsx)(l.Fe,{children:"(".concat(C,")")})]}),(0,v.jsxs)("p",{children:[(0,v.jsx)("span",{children:"User score:"}),(0,v.jsx)(l.Fe,{children:b.vote_average})]}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{children:b.overview}),k.length>0&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h2",{children:"Genres"}),(0,v.jsx)(l.CJ,{children:k.map((function(n){return(0,v.jsx)(l.g$,{children:n.name},n.id)}))})]})]})]}),(0,v.jsxs)(l.uf,{children:[(0,v.jsx)("h2",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)(l.Er,{children:(0,v.jsx)(s.OL,{to:"cast",children:"Cast"})}),(0,v.jsx)(l.Er,{children:(0,v.jsx)(s.OL,{to:"reviews",children:"Reviews"})})]})]}),(0,v.jsx)(u.j3,{})]})};e.default=g},6454:function(n,e,t){t.d(e,{CJ:function(){return x},Er:function(){return m},Fe:function(){return v},g$:function(){return h},lm:function(){return f},uA:function(){return l},uf:function(){return g}});var r,a,i,o,c,u,s,p=t(168),d=t(6444),f=d.default.button(r||(r=(0,p.Z)(["\n  margin-bottom: 10px;\n  padding: 5px 10px;\n  background-color: #141e58;\n  color: #fff;\n  border-radius: 4px;\n  border-style: none;\n  opacity: 0.6;\n  &:hover {\n    opacity: 1;\n  }\n"]))),l=d.default.div(a||(a=(0,p.Z)(["\n  padding: 15px;\n  padding-bottom: 20px;\n  display: flex;\n  gap: 15px;\n  text-align: justify;\n  h1 {\n    text-align: left;\n  }\n"]))),x=d.default.ul(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n"]))),h=d.default.li(o||(o=(0,p.Z)(["\n  padding: 10px;\n  background-color: #141e58;\n  color: #fff;\n  border-radius: 4px;\n  border: 1px solid;\n  opacity: 0.6;\n"]))),v=d.default.span(c||(c=(0,p.Z)(["\n  margin-left: 5px;\n  font-weight: bold;\n"]))),g=d.default.div(u||(u=(0,p.Z)(["\n  padding: 15px;\n  padding-bottom: 20px;\n  border-top: 1px solid #141e58;\n"]))),m=d.default.li(s||(s=(0,p.Z)(["\n  margin-bottom: 5px;\n"])))}}]);
//# sourceMappingURL=844.a9c415f9.chunk.js.map