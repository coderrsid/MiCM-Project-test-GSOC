(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},8:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var a=n(2),l=n(3),r=n(6),c=n(4),s=n(7),u=n(0),i=n.n(u),o=n(5),m=(n(15),function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(r.a)(this,Object(c.a)(t).call(this))).state={data:[],isLoading:!0},e}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({data:t,isLoading:!1})}).catch(i.a.createElement("h1",null,"Loading"))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Users ",this.state.isLoading?i.a.createElement("span",null,"Loading"):null," "),this.state.data.map(function(e,t){return i.a.createElement("div",{className:"container"},i.a.createElement("p",{className:"name tooltip"},e.name,i.a.createElement("span",{class:"tooltiptext"},"Street",i.a.createElement("span",null," ",e.address.street),i.a.createElement("br",null),"Suite ",i.a.createElement("span",null,e.address.suite),i.a.createElement("br",null),"City ",i.a.createElement("span",null,e.address.city),i.a.createElement("br",null),"Zip ",i.a.createElement("span",null,e.address.zipcode),i.a.createElement("br",null))),i.a.createElement("p",{className:"username"},"(",e.username,")"))}))}}]),t}(u.Component));Object(o.render)(i.a.createElement(m,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.abf735b2.chunk.js.map