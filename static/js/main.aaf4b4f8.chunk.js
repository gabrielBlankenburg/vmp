(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e){e.exports={path:"https://vmp-server.herokuapp.com/"}},39:function(e,t,a){e.exports=a(76)},44:function(e,t,a){},73:function(e,t){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(33),c=a.n(o),r=(a(44),a(2)),l=a(3),s=a(6),u=a(4),d=a(5),m=a(1),h=function(e){var t=e.children;return i.a.createElement("div",{className:"background"},t)},b=a(38),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).props=e,a.camera=i.a.createRef(),a.takePicture=a.takePicture.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"takePicture",value:function(){this.camera.capture().then(function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){var e=t.result;console.log(e)}})}},{key:"render",value:function(){var e=this,t=this.props.children;return i.a.createElement("div",{className:"camera"},i.a.createElement("div",{className:"camera__overlay"}),i.a.createElement(b.a,{ref:function(t){e.camera=t}},i.a.createElement("div",{className:"camera__content"},t)))}}]),t}(n.Component),p=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.preTitle,a=e.subTitle,n=e.children;return i.a.createElement("div",{className:"item"},t&&i.a.createElement("div",{className:"item__secondary"},t),i.a.createElement("div",{className:"item__primary"},n),a&&i.a.createElement("div",{className:"item__secondary"},a))}}]),t}(n.Component),g=a(34),f={get:function(e){return JSON.parse(window.localStorage.getItem(e))},set:function(e,t){return window.localStorage.setItem(e,JSON.stringify(t))},remove:function(e){window.localStorage.removeItem("itemId")}},O=a(35),j=a.n(O),w=a(36),k=j()(w.path),y={listenSocket:function(e){k.on("top",function(t){e.top(t)}),k.on("middle",function(t){e.middle(t)}),k.on("bottom",function(t){e.bottom(t)})}},D=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).props=e,a.state={active:!1,top:f.get("top"),middle:f.get("middle"),bottom:f.get("bottom")},a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a.toggle=a.toggle.bind(Object(m.a)(Object(m.a)(a))),a.topChangeData=a.topChangeData.bind(Object(m.a)(Object(m.a)(a))),a.middleChangeData=a.middleChangeData.bind(Object(m.a)(Object(m.a)(a))),a.bottomChangeData=a.bottomChangeData.bind(Object(m.a)(Object(m.a)(a))),y.listenSocket({top:a.topChangeData,middle:a.middleChangeData,bottom:a.bottomChangeData}),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"topChangeData",value:function(e){this.setState({top:e})}},{key:"middleChangeData",value:function(e){this.setState({middle:e})}},{key:"bottomChangeData",value:function(e){this.setState({bottom:e})}},{key:"componentWillMount",value:function(){var e=this.state,t=e.top,a=e.middle,n=e.bottom;t||a||n||this.toggle()}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(g.a)({},a,n),function(){f.set(a,n)})}},{key:"toggle",value:function(){this.setState({active:!this.state.active})}},{key:"render",value:function(){var e=this.state,t=(e.active,e.top),a=e.middle,n=e.bottom;return i.a.createElement("div",{className:"list"},i.a.createElement("div",{className:"list__outdoor"},i.a.createElement(p,{preTitle:t,subTitle:n},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:a?a.replace(/\r?\n/,"<br />").replace("&",'<div class="item__concat">&</div>').replace("+",'<div class="item__concat">+</div>'):a}}))))}}]),t}(n.Component),E=a(37),C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).props=e,a.state={color:"rgba(255, 255, 255, 1)",background:"transparent",recording:!1,width:window.innerWidth,height:window.innerHeight},a.handleResize=a.handleResize.bind(Object(m.a)(Object(m.a)(a))),a.onReceiveData=a.onReceiveData.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({recording:!0})},1e3)}},{key:"onReceiveData",value:function(e){this.props.onData&&this.props.onData(e)}},{key:"handleResize",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var e=this.state,t=e.background,a=e.color,n=e.recording,o=e.width,c=e.height;return i.a.createElement("div",{className:"microphone"},i.a.createElement(E.a,{record:n,width:o,height:c,strokeColor:a,duration:5,onData:this.onReceiveData,backgroundColor:t,className:"microphone"}))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).props=e,a.state={micData:null},a.timer=null,a.onMic=a.onMic.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"onMic",value:function(e){var t=this;this.timer||(this.timer=setTimeout(function(){t.setState({micData:e},function(){t.timer=null})},2e3))}},{key:"render",value:function(){return i.a.createElement(h,null,i.a.createElement(v,null,i.a.createElement(D,null),i.a.createElement(C,{audioBitsPerSecond:32e3})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,2,1]]]);
//# sourceMappingURL=main.aaf4b4f8.chunk.js.map