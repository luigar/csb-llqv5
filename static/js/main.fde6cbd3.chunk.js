(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),r=a.n(l),s=a(1),o=a(2),i=a(4),u=a(3),m=(a(14),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"preloader",value:function(){var e=document.querySelector(".preloader");setTimeout(function(){e.style.opacity="0",setTimeout(function(){e.style.display="none"},1e3)},3e3)}},{key:"componentDidMount",value:function(){this.preloader()}},{key:"render",value:function(){return c.a.createElement("div",{className:"preloader"},c.a.createElement("div",{class:"spinner_wrap"},c.a.createElement("div",{class:"spinner"})))}}]),a}(n.Component)),d=a(5),E=(a(15),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).count=n.count.bind(Object(d.a)(n)),n.state={days:0,minutes:0,hours:0,secounds:0,time_up:""},n.x=null,n.deadline=null,n}return Object(o.a)(a,[{key:"count",value:function(){var e=(new Date).getTime(),t=this.deadline-e,a=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5),c=Math.floor(t%36e5/6e4),l=Math.floor(t%6e4/1e3),r=a<10?"0"+a:a,s=n<10?"0"+n:n,o=c<10?"0"+c:c,i=l<10?"0"+l:l;this.setState({days:r,minutes:o,hours:s,seconds:i}),t<0&&(clearInterval(this.x),this.setState({days:0,minutes:0,hours:0,seconds:0,time_up:"TIME IS UP"}))}},{key:"componentDidMount",value:function(){this.deadline=new Date("Oct 08, 2022 21:00:00").getTime(),this.x=setInterval(this.count,1e3)}},{key:"render",value:function(){var e=this.state,t=e.days,a=e.seconds,n=e.hours,l=e.minutes;return c.a.createElement("div",{id:"countdown"},c.a.createElement("div",{className:"col-4"},c.a.createElement("div",{className:"box"},c.a.createElement("p",{id:"day"},t),c.a.createElement("span",{className:"text"},"Days"))),c.a.createElement("div",{className:"col-4"},c.a.createElement("div",{className:"box"},c.a.createElement("p",{id:"hour"},n),c.a.createElement("span",{className:"text"},"Hours"))),c.a.createElement("div",{className:"col-4"},c.a.createElement("div",{className:"box"},c.a.createElement("p",{id:"minute"},l),c.a.createElement("span",{className:"text"},"Minutes"))),c.a.createElement("div",{className:"col-4"},c.a.createElement("div",{className:"box"},c.a.createElement("p",{id:"second"},a),c.a.createElement("span",{className:"text"},"Seconds"))))}}]),a}(n.Component)),p=(a(16),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"modal",value:function(){var e=document.getElementById("modal");e.classList.toggle("is_open")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"optin"},c.a.createElement("p",null,"Want to be the first to know when we launch?"),c.a.createElement("button",{onClick:function(){return e.modal()}},"Click Me"),c.a.createElement("div",{id:"modal"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("h3",null,"Enter Your Email"),c.a.createElement("div",{className:"clearfix"},c.a.createElement("div",{className:"col-8"}),c.a.createElement("div",{className:"col-3"})))))}}]),a}(n.Component));a(17);function v(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Website",c.a.createElement("br",null),"Coming Soon"),c.a.createElement(E,null),c.a.createElement(p,null),c.a.createElement(m,null)))}var h=document.getElementById("root");r.a.render(c.a.createElement(v,null),h)}],[[8,1,2]]]);
//# sourceMappingURL=main.fde6cbd3.chunk.js.map