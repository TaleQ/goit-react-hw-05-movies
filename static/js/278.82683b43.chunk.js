"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{315:function(e,t,n){n.d(t,{LI:function(){return s},Y5:function(){return p},wr:function(){return u}});var r=n(861),a=n(757),o=n.n(a),i=n(243),c="9d4ece4211ac8e35ee810dac1072ece6",s=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:c,query:t,language:"en-US",page:1,include_adult:!1}),e.next=4,i.Z.get("https://api.themoviedb.org/3/search/movie?".concat(n.toString()));case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:c,media_type:"movie",time_window:"week"},e.next=3,i.Z.get("https://api.themoviedb.org/3/trending/".concat(t.media_type,"/").concat(t.time_window,"?api_key=").concat(t.api_key));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},245:function(e,t,n){n.d(t,{a:function(){return p}});var r,a,o=n(168),i=n(444),c=i.default.div(r||(r=(0,o.Z)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  background-color: rgba(0, 0, 0, 0.2);\n  transition: opacity 500ms linear, visibility 500ms linear;\n"]))),s=i.default.div(a||(a=(0,o.Z)(["\n  position: absolute;\n  top: calc(50% - 60px);\n  left: calc(50% - 60px);\n  width: 120px;\n  border: 16px solid #3f51b5;\n  border-top: 16px solid rgba(174, 175, 165, 1);\n  border-radius: 50%;\n  height: 120px;\n  animation: spin 2s linear infinite;\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),u=n(184),p=function(){return(0,u.jsx)(c,{children:(0,u.jsx)(s,{})})}},278:function(e,t,n){n.r(t),n.d(t,{Movies:function(){return f}});var r=n(861),a=n(439),o=n(757),i=n.n(o),c=n(791),s=n(187),u=n(87),p=n(315),l=n(245),d=n(184),f=function(){var e=(0,c.useState)(""),t=(0,a.Z)(e,2),n=t[0],o=t[1],f=(0,c.useState)(""),h=(0,a.Z)(f,2),m=h[0],v=h[1],g=(0,c.useState)([]),x=(0,a.Z)(g,2),w=x[0],b=x[1],y=(0,s.a)(),k=y.isLoading,_=y.setIsLoading;return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.prev=1,e.next=4,(0,p.LI)(m);case 4:0===(t=e.sent).results.length?console.log("No movies found"):b(t.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Oops, something went wrong. ".concat(e.t0,". Try again later."));case 11:return e.prev=11,_(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();m&&e()}),[m]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=n.trim().toLowerCase();t?v(t):console.log("Please enter search query")},children:[(0,d.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:n,onChange:function(e){o(e.target.value)}}),(0,d.jsx)("button",{type:"submit"})]}),k&&(0,d.jsx)(l.a,{}),(0,d.jsx)("ul",{children:w.length>0?w.map((function(e){return(0,d.jsx)("li",{children:(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.original_title}),(0,d.jsx)(u.rU,{to:"movies/".concat(e.id),children:e.original_title})]})},e.id)})):(0,d.jsx)("p",{children:"No movies found"})})]})};t.default=f}}]);
//# sourceMappingURL=278.82683b43.chunk.js.map