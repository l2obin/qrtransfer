(this.webpackJsonpqrtransfer=this.webpackJsonpqrtransfer||[]).push([[0],{76:function(e,t,a){},77:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(20),r=a.n(c),s=(a(76),a(77),a(44)),o=a(6),u=a(120),l=a(62),d=a(121),h=a(122),j=a(63),m=a(115),b=a(116),p=a(117),v=a(57),O=a.n(v),f=a(58),x=a.n(f),g=a(59),_=a.n(g),k=a(2),C=Object(m.a)({root:{width:"100%",position:"fixed",bottom:0}});function y(){var e=Object(o.f)(),t=i.a.useState(0),a=Object(j.a)(t,2),n=a[0],c=a[1],r=C();return Object(k.jsxs)(b.a,{value:n,onChange:function(t,a){e.push(a),c(a)},showLabels:!0,className:r.root,children:[Object(k.jsx)(p.a,{label:"Home",value:"/",icon:Object(k.jsx)(O.a,{})}),Object(k.jsx)(p.a,{label:"Send",value:"/send",icon:Object(k.jsx)(x.a,{})}),Object(k.jsx)(p.a,{label:"Receive",value:"/receive",icon:Object(k.jsx)(_.a,{})})]})}var w,E=a(24),M=a(25),S=a(27),N=a(26),q=a(118),R=(a(90),function(e){Object(S.a)(a,e);var t=Object(N.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(M.a)(a,[{key:"render",value:function(){return Object(k.jsxs)(q.a,{maxWidth:"sm",children:[Object(k.jsx)("h3",{children:"Home"}),Object(k.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})}}]),a}(i.a.Component)),I=a(37),F=(a(91),a(60)),T=a.n(F),W=a(123),L=a(119);!function(e){e.USER="user",e.ENVIRONMENT="environment"}(w||(w={}));var P=function(e){Object(S.a)(a,e);var t=Object(N.a)(a);function a(){var e;return Object(E.a)(this,a),(e=t.call(this,{})).webcamRef=void 0,e.state={videoConstraints:{facingMode:w.ENVIRONMENT},currentFacingMode:w.ENVIRONMENT},e.toggleCamera=e.toggleCamera.bind(Object(I.a)(e)),e}return Object(M.a)(a,[{key:"toggleCamera",value:function(){var e=this.state.currentFacingMode==w.USER?w.ENVIRONMENT:w.USER;this.setState({videoConstraints:{facingMode:e},currentFacingMode:e})}},{key:"render",value:function(){return Object(k.jsxs)(q.a,{maxWidth:"sm",children:[Object(k.jsx)("h3",{children:"Receive"}),Object(k.jsx)(W.a,{children:Object(k.jsx)(T.a,{videoConstraints:this.state.videoConstraints,ref:this.webcamRef})}),Object(k.jsx)(L.a,{variant:"contained",color:"primary",onClick:this.toggleCamera,children:"Toggle Camera"})]})}}]),a}(i.a.Component),U=(a(92),a(61)),z=a.n(U),D=function(e){Object(S.a)(a,e);var t=Object(N.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(M.a)(a,[{key:"tick",value:function(){var e=(this.state.current_packet_number+1)%this.state.total_number_of_packets;this.setState({current_packet_number:e,current_packet_data:this.getCurrentPacket(this.state.data,this.state.each_packet_size,e,this.state.total_number_of_packets)})}},{key:"prepare",value:function(){if(null!==this.state.data&&0!==this.state.data.length){var e=Math.ceil(this.state.data.length/this.state.each_packet_size);this.setState({current_packet_number:0,total_number_of_packets:e,current_packet_data:this.getCurrentPacket(this.state.data,this.state.each_packet_size,0,e)})}else this.setState({current_packet_number:0,total_number_of_packets:0,current_packet_data:""})}},{key:"getCurrentPacket",value:function(e,t,a,n){return a+1+"/"+n+"|"+e.substr(a*t,t)}},{key:"componentWillMount",value:function(){this.setState({data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",each_packet_size:30})}},{key:"componentDidMount",value:function(){var e=this;this.prepare(),setInterval((function(){return e.tick()}),200)}},{key:"render",value:function(){return Object(k.jsxs)(q.a,{maxWidth:"sm",children:[Object(k.jsx)("h3",{children:"Send"}),Object(k.jsx)(L.a,{variant:"contained",color:"primary",children:"Send"}),Object(k.jsx)("span",{children:this.state.current_packet_number+1}),"/",Object(k.jsx)("span",{children:this.state.total_number_of_packets}),Object(k.jsx)(W.a,{alignItems:"center",style:{backgroundColor:"white",padding:10,width:"74vmin",height:"74vmin"},children:null!=this.state.current_packet_data?Object(k.jsx)(z.a,{value:this.state.current_packet_data,renderAs:"svg",style:{width:"70vmin",height:"70vmin"}}):null})]})}}]),a}(i.a.Component);var V=function(){var e=Object(u.a)("(prefers-color-scheme: dark)"),t=i.a.useMemo((function(){return Object(l.a)({palette:{type:e?"dark":"light"}})}),[e]);return Object(k.jsxs)(d.a,{theme:t,children:[Object(k.jsx)(h.a,{}),Object(k.jsxs)(s.a,{children:[Object(k.jsxs)(o.c,{children:[Object(k.jsx)(o.a,{path:"/send",children:Object(k.jsx)(D,{})}),Object(k.jsx)(o.a,{path:"/receive",children:Object(k.jsx)(P,{})}),Object(k.jsx)(o.a,{children:Object(k.jsx)(R,{})})]}),Object(k.jsx)(y,{})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,125)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))};r.a.render(Object(k.jsx)(i.a.StrictMode,{children:Object(k.jsx)(V,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),B()}},[[99,1,2]]]);
//# sourceMappingURL=main.e8b71348.chunk.js.map