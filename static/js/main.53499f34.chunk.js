(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(3),c=n.n(a),s=n(4),i=n(5),b=n(8),r=n(7),d=n(1),o=n.n(d),l=n(6),u=n.n(l),j=n(0),h=function(t){var e=t.tabs,n=t.onTabSelected,a=t.selectedTabId;return Object(j.jsx)(j.Fragment,{children:e.map((function(t){var e=t.id,c=t.title;return Object(j.jsx)("button",{type:"button",className:u()("tab",{"tab--is-active":a===e}),onClick:function(){return n(e)},children:c},e)}))})},T=(n(14),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),f=function(t){Object(b.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={selectedTabId:"tab-1"},t.onTabSelected=function(e){t.setState({selectedTabId:e})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=T.find((function(e){return e.id===t.state.selectedTabId}))||T[0];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{children:["Selected tab is\xa0",e.title]}),Object(j.jsx)("div",{className:"tabs-container",children:Object(j.jsx)(h,{tabs:T,onTabSelected:this.onTabSelected,selectedTabId:this.state.selectedTabId})}),Object(j.jsx)("div",{className:"tab__content",children:e.content})]})}}]),n}(o.a.Component);c.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.53499f34.chunk.js.map