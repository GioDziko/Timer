(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n(2),c=n.n(a),i=n(11),o=n.n(i),r=(n(18),n(19),n(4)),l=n(5),b=n(7),d=n(6),m=n(3),u=n(12),j=n(0),k=n(9),h=(n(20),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).updateCount=function(){if(s.state.time>=0){var t=Math.floor(s.state.time/60),e=s.state.time%60;document.getElementById("count").innerHTML="".concat(t,":").concat(e),s.setState({time:s.state.time-1}),s.state.time<60&&s.state.time>0&&(document.getElementById("container_2").style.color="red")}else if(document.getElementById("caption").innerHTML="Break",document.getElementById("container_2").style.color="black",s.state.breakTime>=0){var n=s.state.breakTime%60,a=Math.floor(s.state.breakTime/60);document.getElementById("count").innerHTML="".concat(a,":").concat(n),s.setState({breakTime:s.state.breakTime-1})}},s.restart=function(){s.setState({time:60*s.state.startingMinutes,boolean:!0,breakTime:60*s.state.startingBreak}),clearInterval(s.state.intervalId),document.getElementById("container_2").style.color="black",document.getElementById("caption").innerHTML="Session",document.getElementById("count").innerHTML="".concat(s.state.startingMinutes,":00")},s.start=function(){if(!0===s.state.boolean){var t=setInterval(s.updateCount,1e3);s.setState({intervalId:t,boolean:!1})}},s.pause=function(){clearInterval(s.state.intervalId),s.setState({boolean:!0}),console.log("gio")},s.sessionArrowUp=function(){!0===s.state.boolean&&(s.setState({startingMinutes:s.state.startingMinutes+1,time:s.state.time+60}),document.getElementById("count").innerHTML="".concat(s.state.startingMinutes+1,":00"))},s.sessionArrowDown=function(){s.state.startingMinutes>1&&!0===s.state.boolean&&(s.setState({startingMinutes:s.state.startingMinutes-1,time:s.state.time-60}),document.getElementById("count").innerHTML="".concat(s.state.startingMinutes-1,":00"))},s.breakArrowDown=function(){s.state.startingBreak>1&&!0===s.state.boolean&&s.setState({startingBreak:s.state.startingBreak-1,breakTime:s.state.breakTime-60})},s.breakArrowUp=function(){!0===s.state.boolean&&s.setState({startingBreak:s.state.startingBreak+1,breakTime:s.state.breakTime+60})},s.state={startingMinutes:10,time:void 0,intervalId:void 0,boolean:!0,startingBreak:10,breakTime:void 0},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({time:60*this.state.startingMinutes,breakTime:60*this.state.startingBreak}),console.log(document.getElementById("checkbox").checked)}},{key:"render",value:function(){this.state.startingMinutes;return Object(s.jsx)(j.b.Provider,{value:{size:"1em"},children:Object(s.jsxs)("div",{className:"timer",children:[Object(s.jsxs)("div",{className:"container_1",children:[Object(s.jsxs)("div",{className:"break",children:[Object(s.jsx)("p",{children:"Break Length"}),Object(s.jsx)(m.b,{className:"icon",onClick:this.breakArrowUp}),Object(s.jsx)("span",{children:this.state.startingBreak}),Object(s.jsx)(m.a,{className:"icon",onClick:this.breakArrowDown})]}),Object(s.jsxs)("div",{className:"session",children:[Object(s.jsx)("p",{children:"Session Length"}),Object(s.jsx)(m.b,{className:"icon",onClick:this.sessionArrowUp}),Object(s.jsx)("span",{children:this.state.startingMinutes}),Object(s.jsx)(m.a,{className:"icon",onClick:this.sessionArrowDown})]})]}),Object(s.jsxs)("div",{className:"container_2",id:"container_2",children:[Object(s.jsx)("p",{id:"caption",children:"Session"}),Object(s.jsxs)("div",{className:"count",id:"count",children:[this.state.startingMinutes,":00"]})]}),Object(s.jsxs)("div",{className:"icons",children:[Object(s.jsx)(u.a,{className:"icon displayicon",onClick:this.pause}),Object(s.jsx)(k.b,{className:"icon displayicon",onClick:this.start}),Object(s.jsx)(k.a,{className:"icon displayicon",onClick:this.restart})]})]})})}}]),n}(a.Component)),g=n(10),p=(n(21),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).checkboxclick=function(){switch(s.state.boolean){case!0:document.getElementById("App").style.cssText="background-color:rgb(190, 190, 253); color:black",document.getElementById("container_2").style.cssText="border: black solid 2px;",s.setState({boolean:!1});break;case!1:document.getElementById("App").style.cssText="background-color:rgba(5, 5, 5, 0.986); color:white",document.getElementById("container_2").style.cssText="border: white solid 2px;",s.setState({boolean:!0})}},s.state={boolean:!1},s}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"darkmode_button",children:[Object(s.jsx)("input",{type:"checkbox",className:"checkbox",id:"checkbox",onClick:this.checkboxclick}),Object(s.jsxs)("label",{htmlFor:"checkbox",className:"label",children:[Object(s.jsx)(g.b,{className:"icon_1"}),Object(s.jsx)(g.a,{className:"icon_2"}),Object(s.jsx)("div",{className:"ball"})]})]})}}]),n}(a.Component));var x=function(){return Object(s.jsxs)("div",{className:"App",id:"App",children:[Object(s.jsx)("p",{className:"caption",children:"Timer with Break"}),Object(s.jsx)(p,{}),Object(s.jsx)(h,{})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),s(t),a(t),c(t),i(t)}))};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),O()}},[[22,1,2]]]);
//# sourceMappingURL=main.e2524b23.chunk.js.map