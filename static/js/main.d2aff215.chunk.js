(this["webpackJsonpautoscorer-client"]=this["webpackJsonpautoscorer-client"]||[]).push([[0],{220:function(e,t,a){e.exports=a(372)},225:function(e,t,a){},226:function(e,t,a){},354:function(e,t){},355:function(e,t){},356:function(e,t){},357:function(e,t){},358:function(e,t){},359:function(e,t){},372:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(25),i=a.n(s),o=(a(225),a(30)),l=a(31),c=a(33),u=a(32),h=a(34),d=(a(226),a(74)),m=a(61),p=a(52),g=a(24),f=a(86),v=a(36),b=a.n(v),E=a(87),w=a(63),y=a(65),k=a.n(y),O={TOKEN:"AutoScorer-Token"},S="http://localhost:8000";S="https://fierce-citadel-47273.herokuapp.com",console.log("server url:",S,"production"),S+="/api";var C={},T=function(e){e=e||localStorage.getItem(O.TOKEN),C.Authorization="Token "+e};function j(){return(j=Object(w.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("lolw",t,S),e.prev=1,e.next=4,k.a.post(S+"/api-token-auth/",t);case 4:if(200!==(a=e.sent).status||!a.data.token){e.next=10;break}return console.log(a),localStorage.setItem(O.TOKEN,a.data.token),T(a.data.token),e.abrupt("return",!0);case 10:return console.log("Response not ok",a),e.abrupt("return",!1);case 14:return e.prev=14,e.t0=e.catch(1),console.log("error",e.t0),e.abrupt("return",!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}function x(){return(x=Object(w.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.post(S+"/create-user/",t);case 3:if(!(a=e.sent).data.token){e.next=11;break}return console.log("registerReq",a),localStorage.setItem(O.TOKEN,a.data.token),T(a.data.token),e.abrupt("return",!0);case 11:if(!a.data.Error){e.next=13;break}return e.abrupt("return",a.data.Error);case 13:return console.log("Response not ok",a),e.abrupt("return",!1);case 17:return e.prev=17,e.t0=e.catch(0),console.log("error",e.t0),e.abrupt("return",!1);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}T(null),k.a.defaults.xsrfHeaderName="X-CSRFTOKEN",k.a.defaults.xsrfCookieName="csrftoken";var M=function(e){for(var t=[],a=0,n=Object.entries(e);a<n.length;a++){var r=n[a],s=Object(E.a)(r,2),i=s[0],o=s[1];t.push({index:i,score:o})}return t},R=function(e){var t={};return e.forEach((function(e){t[e.index]=e.score})),t};function D(){return(D=Object(w.a)(b.a.mark((function e(t,a,n){var r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={name:t,size:a,rows:M(n)},console.log("api",r),e.prev=2,e.next=5,k.a.post(S+"/update-create-dataset/",r,{headers:C});case 5:if(!((s=e.sent).status>=200&&s.status<300)){e.next=8;break}return e.abrupt("return",!0);case 8:return console.log("send qualification failed? ",s.status),e.abrupt("return",!1);case 12:return e.prev=12,e.t0=e.catch(2),console.log("error",e.t0),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}function B(){return(B=Object(w.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get(S+"/ds/"+t,{headers:C});case 3:if(!((a=e.sent).status>=200&&a.status<300)){e.next=6;break}return e.abrupt("return",R(a.data.rows));case 6:return e.abrupt("return",!1);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var N=a(85),_=a(123),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){switch(e.target.name){case"username":a.setState({update_string:"Welcome back "+e.target.value})}a.setState(Object(p.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log("A name was submitted: "+a.state.username),function(e){return j.apply(this,arguments)}({username:a.state.username,password:a.state.password}).then((function(e){console.log("LoginPage",e),!1===e?a.setState({server_error:"Username or password is incorrect"}):a.props.history.push("/dashboard")}))},a.state={username:"",password:"",update_string:"just to annoy you",server_error:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e;return this.state.server_error&&(e=r.a.createElement(_.a,{variant:"danger"}," ",this.state.server_error," ")),r.a.createElement("div",{align:"center"},r.a.createElement(N.a,null,r.a.createElement("h1",null,"Hello to your favourite AutoScorer!"),r.a.createElement("p",null," Sign in to get into your dashboard ")),r.a.createElement(g.a,{onSubmit:this.handleSubmit,align:"left",className:"mt-5",style:{maxWidth:"20em"}},r.a.createElement(g.a.Group,{controlId:"formBasicUsername"},r.a.createElement(g.a.Label,null,"Enter your username"),r.a.createElement(g.a.Control,{md:"auto",name:"username",type:"text",value:this.state.username,onChange:this.handleChange})),r.a.createElement(g.a.Group,{controlId:"formBasicPassword"},r.a.createElement(g.a.Label,null,"Password"),r.a.createElement(g.a.Control,{md:"auto",name:"password",type:"password",value:this.state.password,onChange:this.handleChange})),e,r.a.createElement("div",{align:"center",className:"mt-3 pt-3"},r.a.createElement(f.a,{variant:"primary",type:"submit"},"Log in"),r.a.createElement("br",null),r.a.createElement(d.b,{to:"/register"},"Don't have an account? Sign Up"))),r.a.createElement("br",null))}}]),t}(r.a.Component),P=Object(m.g)(I),A=function(e){var t=!0;return Object.values(e).forEach((function(e){return e.length>0&&(t=!1)})),t},G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t;e.preventDefault();var n=e.target,r=n.name,s=n.value,i=a.state.errors;switch(r){case"username":i.username=s.length<4?"Username must be at least 4 characters long":"",i.start="";break;case"password":i.password=s.length<4?"Password must be at least 4 characters long":"";break;case"confirm_password":i.confirm_password=s!==a.state.password?"Password inputs must match":""}a.setState((t={},Object(p.a)(t,e.target.name,e.target.value),Object(p.a)(t,"errors",i),t))},a.handleSubmit=function(e){if(e.preventDefault(),!A(a.state.errors))return console.log("Submit not valid!"),void a.setState({server_error:"Please fill the form correctly"});console.log("A name was submitted: "+a.state.username),function(e){return x.apply(this,arguments)}({username:a.state.username,password:a.state.password,confirm_password:a.state.confirm_password}).then((function(e){console.log("RegisterPage",e),!1===e?a.setState({update_string:"There was error with your registration"}):"string"===typeof e?a.setState({server_error:e}):a.props.history.push("/dashboard")}))},a.state={username:"",password:"",confirm_password:"",errors:{start:"error",username:"",password:"",confirm_password:""},server_error:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e;return this.state.server_error&&(e=r.a.createElement(_.a,{variant:"danger"}," ",this.state.server_error," ")),r.a.createElement("div",{align:"center"},r.a.createElement(N.a,null,r.a.createElement("h1",null,"Hello to your favourite AutoScorer!"),r.a.createElement("p",null," Register to get into your dashboard ")),r.a.createElement(g.a,{onSubmit:this.handleSubmit,className:"mt-3",align:"left",style:{maxWidth:"20em"}},r.a.createElement("br",null),r.a.createElement(g.a.Group,{controlId:"formRegisterUsername"},r.a.createElement(g.a.Label,null,"Enter your username"),r.a.createElement(g.a.Control,{name:"username",type:"text",value:this.state.username,onChange:this.handleChange}),r.a.createElement("p",{className:"font-weight-light"}," ",this.state.errors.username," ")),r.a.createElement(g.a.Group,{controlId:"formRegisterPassword"},r.a.createElement(g.a.Label,null,"Your password"),r.a.createElement(g.a.Control,{name:"password",type:"password",value:this.state.password,onChange:this.handleChange}),r.a.createElement("p",{className:"font-weight-light"}," ",this.state.errors.password," "),r.a.createElement(g.a.Label,null,"Confirm your password"),r.a.createElement(g.a.Control,{name:"confirm_password",type:"password",value:this.state.confirm_password,onChange:this.handleChange}),r.a.createElement("p",{className:"font-weight-light"}," ",this.state.errors.confirm_password," ")),e,r.a.createElement("div",{align:"center",className:"mt-3 pt-3 btn-block"},r.a.createElement(f.a,{className:"col-md-8",variant:"primary",type:"submit"},"Register"),r.a.createElement(d.b,{to:"/login"},r.a.createElement(f.a,{className:"col-md-4 text-right",align:"right",variant:"link"},"Log in"))),r.a.createElement("br",null)),r.a.createElement("br",null))}}]),t}(r.a.Component),U=Object(m.g)(G),L=a(38),z=a(66),H=a(62),W=a(23),X=a.n(W),q=a(21),F=a(42),Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).hasNullBrush=function(){return(a.props.timeRanges||[]).length>0&&null==a.props.timeRanges[a.props.timeRanges.length-1]},a.handleMouseClick=function(e,t){a.props.onTimeRangeClicked&&a.props.onTimeRangeClicked(t)},a.state={isBrushing:!1},a.handleBrushMouseDown=a.handleBrushMouseDown.bind(Object(H.a)(a)),a.handleOverlayMouseDown=a.handleOverlayMouseDown.bind(Object(H.a)(a)),a.handleHandleMouseDown=a.handleHandleMouseDown.bind(Object(H.a)(a)),a.handleMouseUp=a.handleMouseUp.bind(Object(H.a)(a)),a.handleMouseMove=a.handleMouseMove.bind(Object(H.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"viewport",value:function(){var e=this.props,t=e.width,a=e.timeScale,n=a.invert(0),r=a.invert(t);return new q.TimeRange(n,r)}},{key:"handleBrushMouseDown",value:function(e,t){e.preventDefault();var a=e.pageX,n=e.pageY,r=[Math.round(a),Math.round(n)],s=+this.props.timeRanges[t].begin(),i=+this.props.timeRanges[t].end();document.addEventListener("mouseup",this.handleMouseUp),this.setState({isBrushing:!0,brushingInitializationSite:"brush",initialBrushBeginTime:s,initialBrushEndTime:i,initialBrushXYPosition:r,brushIndex:t})}},{key:"handleOverlayMouseDown",value:function(e){if(this.props.allowFreeDrawing||this.hasNullBrush()){e.preventDefault();var t=Object(F.getElementOffset)(this.overlay),a=e.pageX-t.left,n=this.props.timeScale.invert(a).getTime();document.addEventListener("mouseup",this.handleMouseUp);var r=this.props.allowFreeDrawing?this.props.timeRanges.length:this.props.timeRanges.length-1;this.setState({isBrushing:!0,brushingInitializationSite:"overlay",initialBrushBeginTime:n,initialBrushEndTime:n,initialBrushXYPosition:null,brushIndex:r})}}},{key:"handleHandleMouseDown",value:function(e,t,a){e.preventDefault();var n=e.pageX,r=e.pageY,s=[Math.round(n),Math.round(r)],i=this.props.timeRanges[a].begin().getTime(),o=this.props.timeRanges[a].end().getTime();document.addEventListener("mouseover",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp),this.setState({isBrushing:!0,brushingInitializationSite:"handle-".concat(t),initialBrushBeginTime:i,initialBrushEndTime:o,initialBrushXYPosition:s,brushIndex:a})}},{key:"handleMouseUp",value:function(e){var t=this;e.preventDefault(),document.removeEventListener("mouseover",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp);var a=this.state.brushIndex;this.setState({isBrushing:!1,brushingInitializationSite:null,initialBrushBeginTime:null,initialBrushEndTime:null,initialBrushXYPosition:null,brushIndex:null},(function(){t.props.onUserMouseUp&&t.props.onUserMouseUp(a)}))}},{key:"handleMouseMove",value:function(e){e.preventDefault();var t=e.pageX,a=e.pageY,n=[Math.round(t),Math.round(a)],r=this.viewport();if(this.state.isBrushing){var s,i,o=this.state.initialBrushBeginTime,l=this.state.initialBrushEndTime;if("overlay"===this.state.brushingInitializationSite){var c=Object(F.getElementOffset)(this.overlay),u=e.pageX-c.left,h=this.props.timeScale.invert(u).getTime();h<o?(s=h<r.begin().getTime()?r.begin():h,i=o>r.end().getTime()?r.end():o):(s=o<r.begin().getTime()?r.begin():o,i=h>r.end().getTime()?r.end():h)}else{var d=this.state.initialBrushXYPosition,m=this.props.timeScale.invert(d[0]).getTime()-this.props.timeScale.invert(n[0]).getTime(),p=m,g=m;if(o-m<r.begin()&&(p=o-r.begin().getTime()),l-m>r.end()&&(g=l-r.end().getTime()),(s="brush"===this.state.brushingInitializationSite||"handle-left"===this.state.brushingInitializationSite?parseInt(o-p,10):o)>(i="brush"===this.state.brushingInitializationSite||"handle-right"===this.state.brushingInitializationSite?parseInt(l-g,10):l)){var f=[i,s];s=f[0],i=f[1]}}this.props.onTimeRangeChanged&&this.props.onTimeRangeChanged(new q.TimeRange(s,i),this.state.brushIndex)}}},{key:"renderOverlay",value:function(){var e,t=this,a=this.props,n=a.width,s=a.height;switch(this.state.brushingInitializationSite){case"handle-right":case"handle-left":e="ew-resize";break;case"brush":e="move";break;default:e=this.props.allowFreeDrawing||this.hasNullBrush()?"crosshair":"default"}var i={fill:"white",opacity:0,cursor:e};return r.a.createElement("rect",{ref:function(e){t.overlay=e},x:0,y:0,width:n,height:s,style:i,onClick:this.handleMouseClick,onMouseDown:this.handleOverlayMouseDown,onMouseUp:this.handleMouseUp})}},{key:"renderBrush",value:function(e,t){var a,n=this,s=this.props,i=s.timeScale,o=s.height;if(!e)return r.a.createElement("g",null);switch(this.state.brushingInitializationSite){case"handle-right":case"handle-left":a="ew-resize";break;case"overlay":a=this.props.allowFreeDrawing||this.hasNullBrush()?"crosshair":"default";break;default:a="move"}var l={fill:"#777",fillOpacity:.3,stroke:"#fff",shapeRendering:"crispEdges",cursor:a},c=this.props.style?this.props.style(t):{},u=X()(!0,l,c),h=this.props.text?this.props.text(t):"",d=this.props.textStyle?this.props.textStyle(t):{};if(!this.viewport().disjoint(e)){var m=e.intersection(this.viewport()),p=m.begin(),g=m.end(),f=[i(p),0],v=f[0],b=f[1],E=i(g)-v;E<1&&(E=1);var w={x:v,y:b,width:E,height:o};return r.a.createElement("g",{key:"".concat(t,"-").concat(u,"-").concat(h),pointerEvents:"all",onClick:function(e){return n.handleMouseClick(e,t)},onMouseDown:function(e){return n.handleBrushMouseDown(e,t)},onMouseUp:this.handleMouseUp},r.a.createElement("rect",Object.assign({},w,{style:u})),r.a.createElement("text",Object.assign({},d,{x:w.x+w.width/2-24,y:w.y+w.height/2+24}),h))}return r.a.createElement("g",null)}},{key:"renderHandles",value:function(e,t){var a=this,n=this.props,s=n.timeScale,i=n.height;if(!e)return r.a.createElement("g",null);var o={fill:"white",opacity:0,cursor:"ew-resize"};if(!this.viewport().disjoint(e)){var l=e.intersection(this.viewport()).toJSON(),c=Object(E.a)(l,2),u=c[0],h=c[1],d=[s(u),0],m=d[0],p=d[1],g=s(h)-m;g<1&&(g=1);var f=this.props.handleSize,v={x:m-1,y:p,width:f,height:i},b={x:m+(g-f),y:p,width:f+1,height:i};return r.a.createElement("g",null,r.a.createElement("rect",Object.assign({},v,{style:o,pointerEvents:"all",onMouseDown:function(e){return a.handleHandleMouseDown(e,"left",t)},onMouseUp:this.handleMouseUp})),r.a.createElement("rect",Object.assign({},b,{style:o,pointerEvents:"all",onMouseDown:function(e){return a.handleHandleMouseDown(e,"right",t)},onMouseUp:this.handleMouseUp})))}return r.a.createElement("g",null)}},{key:"render",value:function(){var e=this;return r.a.createElement("g",{onMouseMove:this.handleMouseMove},this.renderOverlay(),(this.props.timeRanges||[]).map((function(t,a){return r.a.createElement("g",{key:"multibrush_".concat(a)},e.renderBrush(t,a),e.renderHandles(t,a))})))}}]),t}(r.a.Component);Y.defaultProps={handleSize:6,allowFreeDrawing:!0};var K=Object(z.styler)([{key:"in",color:"#C8D5B8"},{key:"out",color:"#9BB8D7"}]),J=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=(this.props.tracker&&"".concat(this.props.tracker),Object(L.format)(".4s"));return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},this.props.tracker?r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("div",{style:{position:"absolute",left:this.props.trackerX}},r.a.createElement("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.8)",color:"#AAA",marginLeft:"5px"}},"Data In: ",t(this.props.trackerEventIn.get("in"))))):null,r.a.createElement(z.Resizable,null,r.a.createElement(z.ChartContainer,{timeRange:this.props.timerange,format:"year",trackerPosition:this.props.tracker,onTrackerChanged:this.props.handleTrackerChanged,enablePanZoom:!1,maxTime:this.props.timerange.end(),minTime:this.props.timerange.begin(),minDuration:36e5,onBackgroundClick:this.props.onBackgroundClick,onTimeRangeChanged:this.props.handleTimeRangeChange},r.a.createElement(z.ChartRow,{height:"250",debug:!1},r.a.createElement(z.Charts,null,r.a.createElement(z.LineChart,{axis:"traffic",series:this.props.data,columns:["in"],style:K}),r.a.createElement(Y,{timeRanges:this.props.selections,style:function(t){return t===e.props.selected?{fill:"#46abff"}:{fill:"#cccccc"}},text:function(t){return e.props.getText?e.props.getText(t):""},textStyle:function(t){return e.props.getTextStyle?e.props.getTextStyle(t):{}},allowSelectionClear:!0,onTimeRangeChanged:this.props.handleSelectionChange,onTimeRangeClicked:this.props.onTimeRangeClicked})),r.a.createElement(z.YAxis,{id:"traffic",label:"Traffic (bps)",labelOffset:0,min:this.props.minSignal,max:this.props.maxSignal,absolute:!0,width:"60",type:"linear"})))))))}}]),t}(r.a.Component),Z=a(77),$=a.n(Z),Q=a(171),V=a(378),ee=a(377),te=a(376),ae=a(379);function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function re(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var se=3,ie=1,oe=10,le={0:"W",1:"NR",2:"R"},ce={w:"W",e:"NR",r:"R",W:"W",E:"NR",R:"R"},ue=0,he=r.a.createElement(V.a,{id:"popover-basic"},r.a.createElement(V.a.Title,{as:"h3"},"Keyboard shortcuts"),r.a.createElement(V.a.Content,null,"To select the ",r.a.createElement("strong",null,"predicted")," state:",r.a.createElement("ul",null,r.a.createElement("li",null,"press spacebar")),"To select your own state:",r.a.createElement("ul",null,r.a.createElement("li",null,"key w: ",r.a.createElement("strong",null,"W")),r.a.createElement("li",null,"key e: ",r.a.createElement("strong",null,"NR")),r.a.createElement("li",null,"key r: ",r.a.createElement("strong",null,"R"))),"To move to next/previous selection:",r.a.createElement("ul",null,r.a.createElement("li",null,"right arrow key: ",r.a.createElement("strong",null,"Move right")),r.a.createElement("li",null,"left arrow key: ",r.a.createElement("strong",null,"Move left")))));function de(e,t){return me.apply(this,arguments)}function me(){return(me=Object(w.a)(b.a.mark((function e(t,a){var n,r,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e){return Q.b(e,[1,5e3,2],"float32")}(a),r=t.predict(n).dataSync(),s=Array.from(r),i=le[s.indexOf($.a.max(s))],e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var pe=function(e,t,a){var n=Math.floor((t-e)/a);return Array.apply(null,Array(a+1)).map((function(r,s){var i=parseInt(e+s*n),o=parseInt(e+(s+1)*n);return s===a?new q.TimeRange(i,t):new q.TimeRange(i,o)}))},ge=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getText=function(e){return null!=a.state.qualifications[e+a.state.offsetData]?a.state.qualifications[e+a.state.offsetData]:e===a.state.selected?a.state.prediction:void 0},a.getTextStyle=function(e){return null!=a.state.qualifications[e+a.state.offsetData]?{fill:"#0057c2",fontSize:48}:e===a.state.selected?{fill:"#bf9300",fontSize:48}:void 0},a.handleTrackerChanged=function(e,t){a.setState({tracker:e,trackerEventIn_EEG:e&&a.state.EEG.at(a.state.EEG.bisect(e)),trackerEventIn_EMG:e&&a.state.EMG.at(a.state.EMG.bisect(e)),trackerEventOut_EEG:e&&a.state.EEG.at(a.state.EEG.bisect(e)),trackerEventOut_EMG:e&&a.state.EMG.at(a.state.EMG.bisect(e)),trackerX:e&&t(e)})},a.handleTimeRangeChange=function(e){a.setState({timerange:e})},a.handleSelectionChange=function(e,t){},a.onBackgroundClick=function(){a.setState({selection:null,prediction:null})},a.onTimeRangeClicked=function(e){var t=e%se;a.getPrediction(a.state.offsetData+t).then((function(e){a.setState({selected:t,prediction:e})}))},a.getPrediction=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=a.props.edf.getPhysicalSignalConcatRecords(0,e*oe,oe),r=a.props.edf.getPhysicalSignalConcatRecords(1,e*oe,oe),s=Array.from(n).concat(Array.from(r));return t||(t=a.state.model),de(t,Float32Array.from(s))},a.edfParser=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=a.props.edf;if(t){ue=t.getNumberOfRecords();t.getRawSignal(0,0).length,t.getRawSignal(0,ue-1).length;var n=t.getRecordDuration(),r=t.getRecordingStartDate().getTime(),s=t.getPhysicalSignalConcatRecords(0,e*oe,se*oe),i=1,o=($.a.map(s.slice(0,10),(function(t,a){return r+i*(a+e*oe)*n*1e3})),new q.TimeSeries({name:"EEG",columns:["time","in"],points:$.a.map(s,(function(t,a){return[parseInt(r+i*(a+e*oe)*n*100),t]}))})),l=t.getPhysicalSignalConcatRecords(1,e*oe,se*oe),c=new q.TimeSeries({name:"EMG",columns:["time","in"],points:$.a.map(l,(function(t,a){return[parseInt(r+i*(a+e*oe)*n*100),t]}))}),u=pe(o.timerange().toJSON()[0],o.timerange().toJSON()[1],se);return[o,c,u]}},a._handleKeyDown=function(e){a.setState({showAlert:null});var t=a.state.selected,n=a.state.offsetData,r=e.key,s=a.state.qualifications;switch(-1!==Object.keys(ce).indexOf(r)?(s=re({},s,Object(p.a)({},n+t,ce[e.key])),r="ArrowRight"):" "==r&&(s=re({},s,Object(p.a)({},n+t,a.state.prediction)),r="ArrowRight"),r){case"PageUp":n+=se;break;case"PageDown":n=n-se>0?n-se:0;break;case"ArrowRight":t<ie?t+=1:n+=1;break;case"ArrowLeft":n>0?n-=1:t>0&&(t-=1)}if(n!=a.state.offsetData){var i=a.edfParser(n),o=i[0],l=i[1],c=i[2];a.getPrediction(n+t).then((function(e){a.setState({EEG:o,EMG:l,offsetData:n,selected:t,timerange:o.range(),selections:c,qualifications:s,prediction:e})}))}else a.getPrediction(n+t).then((function(e){a.setState({selected:t,qualifications:s,prediction:e})}))},a.send_selections=function(e){(function(e,t,a){return D.apply(this,arguments)})(a.props.name||"test",ue,a.state.qualifications).then((function(e){a.setState({showAlert:e})})),e.target.blur()},a.load_selections=function(e){window.confirm("This will delete all your unsaved selections. Proceed?")&&(a.setState({showAlert:"spin"}),function(e){return B.apply(this,arguments)}(a.props.name).then((function(e){console.log("neki",e),e?a.setState({qualifications:e,showAlert:!0}):a.setState({showAlert:!1})}))),e.target.blur()},a.dict_to_csv=function(e){for(var t="",a=0,n=Object.entries(e);a<n.length;a++){var r=n[a],s=Object(E.a)(r,2);t+=s[0]+","+s[1]+"\n"}return t},a.csv_to_dict=function(e){var t={};return e.split("\n").forEach((function(e){var a=e.split(",");t[parseInt(a[0])]=a[1]})),t},a.download_selections=function(e){var t=new Blob([a.dict_to_csv(a.state.qualifications)],{type:"text/csv"}),n=window.URL.createObjectURL(t),r=document.createElement("a");r.href=n,r.setAttribute("download",a.props.name+"-selections.csv"),r.click()},a.upload_selections=function(e){var t=e.target.files[0];console.log("madona",t);var n={},r=new FileReader;r.onload=function(){n=a.csv_to_dict(r.result),a.setState({qualifications:n})},r.readAsBinaryString(t)},a.state={EEG:null,EMG:null,offsetData:0,tracker:null,timerange:null,selected:0,selections:null,qualifications:{},prediction:null,trackerEventIn_EEG:null,trackerEventIn_EMG:null,trackerEventOut_EEG:null,trackerEventOut_EMG:null,trackerX:null,showAlert:null},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",$.a.debounce(this._handleKeyDown,50))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",$.a.debounce(this._handleKeyDown,50))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(null!=this.props.edf&&e.edf!==this.props.edf){var n=this.edfParser(0),r=n[0],s=n[1],i=n[2];Q.a("https://raw.githubusercontent.com/AgileDS/AutoScorer/model_dev/model/TF-js/1CNN-Model/model.json").then((function(e){a.getPrediction(0,e).then((function(t){a.setState({EEG:r,EMG:s,timerange:r.range(),selections:i,model:e,prediction:t})}))}))}}},{key:"render",value:function(){return this.props.edf?r.a.createElement("div",null,r.a.createElement(ee.a,{bg:"lite"},r.a.createElement("div",{className:"col-2"},r.a.createElement(ee.a.Brand,null,"AutoScorer")),r.a.createElement("div",{className:"col-3 d-inline-flex justify-content-center align-items-center"},r.a.createElement(f.a,{variant:"outline-secondary",className:"No-focus",onClick:this.download_selections},"Download"),r.a.createElement("label",{className:"btn btn-outline-secondary ml-md-5 No-focus",style:{marginBottom:"0px"},onChange:this.upload_selections.bind(this)},"Upload ",r.a.createElement("input",{type:"file",accept:".csv",hidden:!0}))),r.a.createElement("div",{className:"col-1 d-inline-flex align-items-center"},!0===this.state.showAlert?r.a.createElement("div",{className:" ml-md-2 badge badge-success",role:"alert"}," Success! "):!1===this.state.showAlert?r.a.createElement("div",{className:"badge badge-danger",role:"alert"}," Something went wrong! "):"spin"===this.state.showAlert?r.a.createElement(te.a,{animation:"border",variant:"secondary"}):null),r.a.createElement("div",{className:"col-5 d-inline-flex justify-content-center align-items-center"},r.a.createElement(f.a,{variant:"outline-primary",className:" No-focus",onClick:this.load_selections},"Load selections"),r.a.createElement(f.a,{variant:"outline-primary",className:" ml-md-5 No-focus",onClick:this.send_selections},"Save selections")),r.a.createElement("div",{className:"col-1",align:"right"},r.a.createElement(ae.a,{trigger:"click",placement:"left",overlay:he},r.a.createElement("a",{className:"btn btn-light No-focus float-right"},"Help")))),this.state.EEG?r.a.createElement(J,{data:this.state.EEG,timerange:this.state.timerange,selected:this.state.selected,selections:this.state.selections,handleTrackerChanged:this.handleTrackerChanged,handleTimeRangeChange:this.handleTimeRangeChange,handleSelectionChange:this.handleSelectionChange,onBackgroundClick:this.onBackgroundClick,onTimeRangeClicked:this.onTimeRangeClicked,maxSignal:800,minSignal:-800,getText:this.getText,getTextStyle:this.getTextStyle}):r.a.createElement("div",{align:"center",style:{minWidth:"100%",minHeight:"100%"},className:"mt-md-5"},r.a.createElement(te.a,{align:"center",style:{minWidth:"10em",minHeight:"10em"},animation:"grow",variant:"secondary"})),this.state.EMG?r.a.createElement(J,{data:this.state.EMG,timerange:this.state.timerange,selected:this.state.selected,selections:this.state.selections,handleTrackerChanged:this.handleTrackerChanged,handleTimeRangeChange:this.handleTimeRangeChange,handleSelectionChange:this.handleSelectionChange,onBackgroundClick:this.onBackgroundClick,onTimeRangeClicked:this.onTimeRangeClicked,maxSignal:6e3,minSignal:-6e3,getText:this.getText,getTextStyle:this.getTextStyle}):null):r.a.createElement("div",null)}}]),t}(r.a.Component),fe=(a(371),a(170)),ve=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={spinner:!1},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e){return r.a.createElement("div",{align:"center",className:"vh-100 center-block align-middle"},r.a.createElement(N.a,null,r.a.createElement("h1",null,"Hello to your favourite AutoScorer!"),r.a.createElement("p",null," Just one more step to get to the dashboard \ud83d\ude04 ")),r.a.createElement("div",{align:"center",className:"mt-3 pt-3",style:{maxWidth:"20em"}},r.a.createElement(g.a.Control,{className:"d-inline-flex p-2 align-middle",type:"file",onChange:this.setFile.bind(this),accept:".edf"})),this.state.spinner?r.a.createElement(te.a,{animation:"border",variant:"secondary"}):null)}},{key:"postFile",value:function(e){}},{key:"setFile",value:function(e){var t=this;this.setState({spinner:!0});var a=e.target.files[0],n=e.target.files[0].name;new fe.EdfDecoder;if(null!=a){var r=new FileReader;r.onloadend=function(){var e=new fe.EdfDecoder,a=r.result;e.setInput(a),e.decode(),t.props.handleData(e.getOutput(),n)},r.readAsArrayBuffer(a)}}}]),t}(r.a.Component),be=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={edf:null,name:null},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,{basename:"/"},r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/"},r.a.createElement(m.a,{to:"/login"})),r.a.createElement(m.b,{path:"/login"},r.a.createElement(P,null)),r.a.createElement(m.b,{path:"/dashboard"},this.state.edf?null:r.a.createElement(ve,{handleData:function(t,a){e.setState({edf:t,name:a})}}),r.a.createElement(ge,{edf:this.state.edf,name:this.state.name})),r.a.createElement(m.b,{path:"/register"},r.a.createElement(U,null)))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[220,1,2]]]);
//# sourceMappingURL=main.d2aff215.chunk.js.map