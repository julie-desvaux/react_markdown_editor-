(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(22)},17:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);n(11);var a=n(0),o=n.n(a),i=n(3),s=n.n(i),c=(n(17),n(4)),r=n(5),l=n(8),u=n(6),m=n(9),d=n(1),h=(n(19),n(7)),v=n.n(h),p='# Julie Desvaux\n## D\xe9veloppeuse Full-Stack MERN \n### Recherche de stage (4 \xe0 6 mois) \xe0 partir du 19 octobre 2020\n \nLes paragraphes sont s\xe9par\xe9s\npar une ligne vide.\n\nLaiss\xe9 deux espaces \xe0 la fin d\'une ligne pour  \naller \xe0 la ligne.\n\nAttributs *italique*, **gras**, \n`monospace`, ~~ray\xe9~~.\n\nListe:\n\n  * HTML/CSS\n  * JS\n  * React\n\nListe num\xe9rot\xe9e:\n\n  1. NodeJS\n  2. MongoDB\n  3. ExpressJS\n 4.Java\n\n *[Julie Desvaux](https://www.http://julie-desvaux.com/)* \n\n Lien automatique : https://www.linkedin.com/in/julie-desvaux/ \n\n ![Visuel](https://avatars2.githubusercontent.com/u/59824710?s=460&u=37997c75abe2ae59ce99653652c61417225824a4&v=4 "Visuel") ',w=function(e){var t=e.children,n=e.onClick;return o.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:n},t)},x=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value;n.setState({text:t})},n.renderText=function(e){return{__html:v()(e,{sanitize:!0})}},n.onClick=function(){n.setState({text:p})},n.state={text:p},n.onClick=n.onClick.bind(Object(d.a)(Object(d.a)(n))),n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("text");e?this.setState({text:e}):this.setState({text:p})}},{key:"componentDidUpdate",value:function(){var e=this.state.text;localStorage.setItem("text",e)}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"text-center mb-5 title"},"Markedown Editor"),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement(w,{onClick:this.onClick},"Refresh"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("textarea",{onChange:this.handleChange,value:this.state.text,className:"form-control",rows:"35"})),o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("div",{dangerouslySetInnerHTML:this.renderText(this.state.text)}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.56e08251.chunk.js.map