(this.webpackJsonpura_iot_terminal=this.webpackJsonpura_iot_terminal||[]).push([[0],{160:function(t,e){},162:function(t,e){},186:function(t,e){},187:function(t,e){},194:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),u=n(76),c=n.n(u),l=(n(84),n(8));function o(){var t=Object(l.b)().status;return r.a.createElement("p",null,"Status: ".concat(t))}function i(){var t=Object(l.b)().mqtt;function e(e){return t.publish("URA01/input",e)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:function(){return e("f")}},"Frente"),r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){return e("e")}},"Esquerda"),r.a.createElement("button",{type:"button",onClick:function(){return e("d")}},"Direita")),r.a.createElement("button",{type:"button",onClick:function(){return e("t")}},"Tr\xe1s"))}function m(){var t=Object(l.c)("URA01/output").lastMessage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null," Topic: ",t&&t.topic," "),r.a.createElement("p",null," Message: ",t&&t.message,"  "))}function s(){return r.a.createElement(l.a,{brokerUrl:"ws://157.230.89.7:1884",opts:"[{ username:'mqtt', password:'oriva_mqtt'}]"},r.a.createElement("h1",null,"Terminal URA MQTT"),r.a.createElement(o,null),r.a.createElement(i,null),r.a.createElement(m,null))}c.a.render(r.a.createElement(s,null),document.getElementById("root"))},79:function(t,e,n){t.exports=n(194)},84:function(t,e,n){},89:function(t,e){},91:function(t,e){}},[[79,1,2]]]);
//# sourceMappingURL=main.5d6bd317.chunk.js.map