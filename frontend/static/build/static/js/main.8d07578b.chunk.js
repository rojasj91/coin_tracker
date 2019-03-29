(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a(62)},47:function(e,t,a){},48:function(e,t,a){},51:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),i=(a(47),a(14)),o=a(15),s=a(21),u=a(16),h=a(22),m=a(7),d=a(33),p=(a(48),a(68)),E=a(35),b=a(64),g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={visible:!1,low_alert:"",high_alert:""},e.handleClick=e.handleClick.bind(Object(m.a)(Object(m.a)(e))),e.setAlert=e.setAlert.bind(Object(m.a)(Object(m.a)(e))),e.handleInput=e.handleInput.bind(Object(m.a)(Object(m.a)(e))),e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(e){var t=this.state.visible;this.setState({visible:!t})}},{key:"handleInput",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"setAlert",value:function(e){e.preventDefault();var t={low_alert:this.state.low_alert,high_alert:this.state.high_alert,currency_id:this.props.currencyId};console.log("i am firing",alert),this.props.setAlert(t)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(b.a,{onClick:this.handleClick,className:"alerts-button",variant:"outline-dark"},"Alert"),this.state.visible?l.a.createElement("form",{onSubmit:this.setAlert},l.a.createElement(p.a.Group,{className:"forms"},l.a.createElement(p.a.Row,null,l.a.createElement(E.a,null,l.a.createElement(p.a.Control,{value:this.state.low_alert,name:"low_alert",placeholder:"$ Low",onChange:this.handleInput})),l.a.createElement(E.a,null,l.a.createElement(p.a.Control,{value:this.state.high_alert,name:"high_alert",placeholder:"$ High",onChange:this.handleInput}))),l.a.createElement(b.a,{variant:"primary",type:"submit"},"Set"),l.a.createElement(b.a,{variant:"primary",type:"button"},"Cancel"))):null)}}]),t}(n.Component),f=a(66),v=a(67),y=a(34),j=a(65),O=(a(51),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={data:[],loaded:!1,placeholder:"Loading..."},a.setAlert=a.setAlert.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;try{fetch("/api/latest/").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({data:t.data})})}catch(t){console.log(t)}}},{key:"setAlert",value:function(e){console.log("alert data",e);fetch("/api/alerts/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.data.map(function(t){return l.a.createElement("tr",null,l.a.createElement("td",null,t.symbol),l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.quote.USD.price),l.a.createElement("td",null,t.circulating_supply),l.a.createElement("td",null,t.quote.USD.percent_change_1h),l.a.createElement("td",null,t.quote.USD.percent_change_24h),l.a.createElement("td",null,t.quote.USD.percent_change_7d),l.a.createElement("td",null,l.a.createElement(g,{currencyId:t.id,setAlert:e.setAlert})))});return l.a.createElement("div",{className:"App"},l.a.createElement(f.a,{bg:"light",variant:"light"},l.a.createElement(f.a.Brand,{href:"#home"},"Coin Tracker"),l.a.createElement(v.a,{className:"mr-auto"},l.a.createElement(v.a.Link,{href:"#home"},"Home"),l.a.createElement(v.a.Link,{href:"#features"},"Alerts"),l.a.createElement(v.a.Link,{href:"#pricing"},"Log Out")),l.a.createElement(p.a,{inline:!0},l.a.createElement(y.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),l.a.createElement(b.a,{variant:"outline-primary"},"Search"))),l.a.createElement("div",{className:"crypto-data col-md-8"},l.a.createElement(j.a,{size:"sm",className:"table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Symbol"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Price"),l.a.createElement("th",null,"Circulating Supply"),l.a.createElement("th",null,"% Change 1h"),l.a.createElement("th",null,"% Change 24h"),l.a.createElement("th",null,"% Change 7d"),l.a.createElement("th",null))),l.a.createElement("tbody",{className:"rows"},t))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.8d07578b.chunk.js.map