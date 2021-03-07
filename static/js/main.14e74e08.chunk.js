(this.webpackJsonpqrtransfer=this.webpackJsonpqrtransfer||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(24),c=a.n(s),r=(a(77),a(78),a(44)),o=a(6),u=a(123),d=a(63),l=a(124),h=a(125),m=a(64),j=a(118),v=a(119),b=a(120),p=a(58),f=a.n(p),g=a(59),O=a.n(g),_=a(60),x=a.n(_),k=a(2),y=Object(j.a)({root:{width:"100%",position:"fixed",bottom:0}});function w(){var e=Object(o.f)(),t=i.a.useState(0),a=Object(m.a)(t,2),n=a[0],s=a[1],c=y();return Object(k.jsxs)(v.a,{value:n,onChange:function(t,a){e.push(a),s(a)},showLabels:!0,className:c.root,children:[Object(k.jsx)(b.a,{label:"Home",value:"/",icon:Object(k.jsx)(f.a,{})}),Object(k.jsx)(b.a,{label:"Send",value:"/send",icon:Object(k.jsx)(O.a,{})}),Object(k.jsx)(b.a,{label:"Receive",value:"/receive",icon:Object(k.jsx)(x.a,{})})]})}var M,S=a(19),C=a(20),q=a(23),D=a(21),R=a(121),I=(a(91),function(e){Object(q.a)(a,e);var t=Object(D.a)(a);function a(){return Object(S.a)(this,a),t.apply(this,arguments)}return Object(C.a)(a,[{key:"render",value:function(){return Object(k.jsxs)(R.a,{maxWidth:"sm",children:[Object(k.jsx)("h3",{children:"Home"}),Object(k.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})}}]),a}(i.a.Component)),E=a(37),T=(a(92),a(126)),N=a(47),W=a.n(N),L=a(61),P=(a(94),function(e){Object(q.a)(a,e);var t=Object(D.a)(a);function a(){var e;Object(S.a)(this,a);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).video=Object(n.createRef)(),e.canvas=Object(n.createRef)(),e.isStreamInit=!1,e.constraints={audio:!1,video:{facingMode:"environment"}},e.decoder=new Worker("./lib/quirc/quirc-worker.js"),e.last_scanned_raw=(new Date).getTime(),e.last_scanned_at=(new Date).getTime(),e.debounce_timeout=750,e}return Object(C.a)(a,[{key:"componentDidMount",value:function(){var e=Object(L.a)(W.a.mark((function e(){var t,a=this;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.decoder.onmessage=function(e){a.onDecoderMessage(e)},e.prev=1,e.next=4,navigator.mediaDevices.getUserMedia(this.constraints);case 4:t=e.sent,this.handleSuccess(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),this.handleError(e.t0);case 11:setTimeout((function(){a.attemptQRDecode()}),this.debounce_timeout);case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"attemptQRDecode",value:function(){var e=this;if(this.isStreamInit)try{if(null===this.canvas||null===this.canvas.current)return;if(null===this.video||null===this.video.current)return;var t=this.canvas.current.getContext("2d");if(null===t)return;this.canvas.current.width=this.video.current.videoWidth,this.canvas.current.height=this.video.current.videoHeight,t.drawImage(this.video.current,0,0,this.canvas.current.width,this.canvas.current.height);var a=t.getImageData(0,0,this.canvas.current.width,this.canvas.current.height);a.data&&this.decoder.postMessage(a)}catch(n){"NS_ERROR_NOT_AVAILABLE"===n.name&&setTimeout((function(){e.attemptQRDecode()}),0),console.log("Error"),console.log(n)}}},{key:"onDecoderMessage",value:function(e){var t=this;if("done"!==e.data){var a=e.data.payload_string,n=Date.now();a!==this.last_scanned_raw||this.last_scanned_at<n-this.debounce_timeout?(this.last_scanned_raw=a,this.last_scanned_at=n,this.props.messageChange&&this.props.messageChange(a),this.setState({decoded_string:a})):a===this.last_scanned_raw&&(this.last_scanned_at=n)}setTimeout((function(){t.attemptQRDecode()}),0)}},{key:"handleSuccess",value:function(e){this.video&&this.video.current&&(this.video.current.srcObject=e,this.isStreamInit=!0)}},{key:"handleError",value:function(e){console.log("navigator.MediaDevices.getUserMedia error: ",e.message,e.name)}},{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"video-container",children:Object(k.jsx)("video",{playsInline:!0,autoPlay:!0,ref:this.video})}),Object(k.jsx)("canvas",{id:"qr-canvas",ref:this.canvas,className:"qrcode-canvas"})]})}}]),a}(n.Component));!function(e){e.USER="user",e.ENVIRONMENT="environment"}(M||(M={}));var A=function(e){Object(q.a)(a,e);var t=Object(D.a)(a);function a(e){var i;return Object(S.a)(this,a),(i=t.call(this,e)).qrScannerRef=Object(n.createRef)(),i.onMessageChanged=i.onMessageChanged.bind(Object(E.a)(i)),i}return Object(C.a)(a,[{key:"onMessageChanged",value:function(e){this.setState({decodedMessage:e})}},{key:"render",value:function(){return Object(k.jsxs)(R.a,{maxWidth:"sm",children:[Object(k.jsx)("h3",{children:"Receive"}),Object(k.jsx)("p",{children:this.state&&this.state.decodedMessage?this.state.decodedMessage:"empty"}),Object(k.jsx)(T.a,{children:Object(k.jsx)(P,{ref:this.qrScannerRef,messageChange:this.onMessageChanged})})]})}}]),a}(i.a.Component),U=(a(95),a(122)),z=a(62),B=a.n(z),F=function(e){Object(q.a)(a,e);var t=Object(D.a)(a);function a(){return Object(S.a)(this,a),t.apply(this,arguments)}return Object(C.a)(a,[{key:"tick",value:function(){var e=(this.state.current_packet_number+1)%this.state.total_number_of_packets;this.setState({current_packet_number:e,current_packet_data:this.getCurrentPacket(this.state.data,this.state.each_packet_size,e,this.state.total_number_of_packets)})}},{key:"prepare",value:function(){if(null!==this.state.data&&0!==this.state.data.length){var e=Math.ceil(this.state.data.length/this.state.each_packet_size);this.setState({current_packet_number:0,total_number_of_packets:e,current_packet_data:this.getCurrentPacket(this.state.data,this.state.each_packet_size,0,e)})}else this.setState({current_packet_number:0,total_number_of_packets:0,current_packet_data:""})}},{key:"getCurrentPacket",value:function(e,t,a,n){return a+1+"/"+n+"|"+e.substr(a*t,t)}},{key:"componentWillMount",value:function(){this.setState({data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",each_packet_size:30})}},{key:"componentDidMount",value:function(){var e=this;this.prepare(),setInterval((function(){return e.tick()}),200)}},{key:"render",value:function(){return Object(k.jsxs)(R.a,{maxWidth:"sm",children:[Object(k.jsx)("h3",{children:"Send"}),Object(k.jsx)(U.a,{variant:"contained",color:"primary",children:"Send"}),Object(k.jsx)("span",{children:this.state.current_packet_number+1}),"/",Object(k.jsx)("span",{children:this.state.total_number_of_packets}),Object(k.jsx)(T.a,{alignItems:"center",style:{backgroundColor:"white",padding:10,width:"74vmin",height:"74vmin"},children:null!=this.state.current_packet_data?Object(k.jsx)(B.a,{value:this.state.current_packet_data,renderAs:"svg",style:{width:"70vmin",height:"70vmin"}}):null})]})}}]),a}(i.a.Component);var Q=function(){var e=Object(u.a)("(prefers-color-scheme: dark)"),t=i.a.useMemo((function(){return Object(d.a)({palette:{type:e?"dark":"light"}})}),[e]);return Object(k.jsxs)(l.a,{theme:t,children:[Object(k.jsx)(h.a,{}),Object(k.jsxs)(r.a,{children:[Object(k.jsxs)(o.c,{children:[Object(k.jsx)(o.a,{path:"/send",children:Object(k.jsx)(F,{})}),Object(k.jsx)(o.a,{path:"/receive",children:Object(k.jsx)(A,{})}),Object(k.jsx)(o.a,{children:Object(k.jsx)(I,{})})]}),Object(k.jsx)(w,{})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,128)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))};c.a.render(Object(k.jsx)(i.a.StrictMode,{children:Object(k.jsx)(Q,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),H()},77:function(e,t,a){},78:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.14e74e08.chunk.js.map