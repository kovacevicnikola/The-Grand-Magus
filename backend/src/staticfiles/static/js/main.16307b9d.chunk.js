(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,r){e.exports=r.p+"static/media/plus2.6e218844.svg"},22:function(e,t,r){e.exports=r.p+"static/media/minus2.a855dde6.svg"},23:function(e,t,r){e.exports=r(50)},29:function(e,t,r){},49:function(e,t,r){},50:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(19),i=r.n(o),c=(r(29),r(12)),s=r.n(c),u=r(20),l=r(8),h=r(1),p=r(2),f=r(4),d=r(3),m=r(7),v=r(5),y=r(9),b=r.n(y),g=(r(49),r(10)),O=function(e){function t(){var e,r;Object(h.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).handleClick=function(e){r.props.selectedHero(e)},r}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.hero;return a.a.createElement("div",{onClick:function(){return e.handleClick(t)},className:"single-hero"},a.a.createElement("h2",null,t.name),a.a.createElement("img",{src:t.image,alt:"hero"}))}}]),t}(n.Component),j=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.heroes;return a.a.createElement("div",null,a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}},t.map(function(t){return a.a.createElement(O,{selectedHero:e.props.selectedHero,key:t.pk,hero:t})})))}}]),t}(n.Component),C=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(f.a)(this,Object(d.a)(t).call(this))).state={counterSort:[]},e}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.heroes;return a.a.createElement("div",{className:"search-wrapper"},a.a.createElement("div",{className:"found-div"},t.map(function(t){return a.a.createElement(O,{selectedHero:e.props.deselectedHero,key:t.pk,hero:t})})))}}]),t}(n.Component),w=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(f.a)(this,Object(d.a)(t).call(this))).filterHeroes=function(t){return e.props.heroes.filter(function(e){return-1!==e.name.toString().toLowerCase().indexOf(t.toLowerCase())})},e.handleChange=function(t){var r,n=t.target,a=n.name,o=n.value,i=e.filterHeroes(o);e.setState((r={},Object(g.a)(r,a,o),Object(g.a)(r,"queryHeroes",i),Object(g.a)(r,"firstRender",!1),r))},e.selectedHero=function(t){e.state.finderList.length<5&&!e.state.finderList.includes(t)?e.setState(function(e){return{finderList:[].concat(Object(l.a)(e.finderList),[t])}}):console.log("hero already in list")},e.deselectedHero=function(t){e.state.finderList.length>0?e.setState(function(e){return{finderList:e.finderList.filter(function(e){return e!==t})}}):console.log(e.state.finderList)},e.state={queryHeroes:[],query:"",firstRender:!0,finderList:[]},e}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"input-bar"},a.a.createElement("form",null,a.a.createElement("label",null,"Hero Name:",a.a.createElement("input",{type:"text",name:"query",placeholder:"Hero Name",onChange:this.handleChange,value:this.state.query,className:"search-input"}))),a.a.createElement("input",{type:"submit",className:"search-submit",value:"Submit",onClick:function(){return e.props.getCounters(e.state.finderList)}})),a.a.createElement(C,{counterData:this.props.counterData,getCounters:this.props.getCounters,heroes:this.state.finderList,deselectedHero:this.deselectedHero,changeView:this.props.changeView,renderCounters:this.props.renderCounters,createCounterScore:this.props.createCounterScore}),a.a.createElement(j,{selectedHero:this.selectedHero,heroes:this.state.queryHeroes,changeView:this.props.changeView,renderCounters:this.props.renderCounters}))}}]),t}(n.Component),k=r(21),E=r.n(k),S=r(22),H=r.n(S),x=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(f.a)(this,Object(d.a)(t).call(this))).callMultiple=function(t,r){e.props.updateDB(e.props.pk,t),e.setState(function(e){return{modifier:e.modifier+r}})},e.state={modifier:0},e}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("div",{style:{position:"relative"}},a.a.createElement("img",{style:{verticalAlign:"middle"},src:this.props.hero.image,title:this.props.hero.name,alt:"hero"}),a.a.createElement("div",{style:{position:"absolute",right:"0",bottom:"0"}},a.a.createElement("img",{src:E.a,style:{width:"30px",height:"30px",backgroundColor:"rgb(43, 175, 10)",borderRadius:"7px"},onClick:function(){return e.callMultiple(e.props.score+1,1)}}),a.a.createElement("img",{src:H.a,style:{width:"30px",height:"30px",backgroundColor:"rgb(43, 175, 10)",borderRadius:"7px"},onClick:function(){return e.callMultiple(e.props.score-1,-1)}}))),a.a.createElement("h2",null,"Score: ",this.props.score+this.state.modifier))}}]),t}(n.Component),V=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(f.a)(this,Object(d.a)(t).call(this))).getHero=function(){var t=[],r=!0,n=!1,a=void 0;try{for(var o,i=e.props.relations[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var c=o.value,s=!0,u=!1,l=void 0;try{for(var h,p=e.props.heroes[Symbol.iterator]();!(s=(h=p.next()).done);s=!0){var f=h.value;c.ct1===f.pk&&t.push(f)}}catch(d){u=!0,l=d}finally{try{s||null==p.return||p.return()}finally{if(u)throw l}}}}catch(d){n=!0,a=d}finally{try{r||null==i.return||i.return()}finally{if(n)throw a}}e.setState(function(e){return{heroes:e.concat(t)}})},e.getHeroScore=function(){},e.state={heroes:[]},e}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{style:{display:"flex",position:"absolute",left:"330px",top:"0",alignItems:"center",justifyContent:"space-between",textAlign:"center"}},this.props.relations.map(function(t){var r=!0,n=!1,o=void 0;try{for(var i,c=e.props.heroes[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var s=i.value;if(t.ct1===s.pk)return a.a.createElement(x,{key:t.pk,pk:t.pk,hero:s,score:t.score,changeView:e.props.changeView,updateDB:e.props.updateDB})}}catch(u){n=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(n)throw o}}}))}}]),t}(n.Component),D=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(f.a)(this,Object(d.a)(t).call(this))).getImage=function(t){var r=t[0],n=!0,a=!1,o=void 0;try{for(var i,c=e.props.heroes[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var s=i.value;if(r.ct2===s.pk)return s.image}}catch(u){a=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}},e.getName=function(t){var r=t.heroCounters[0],n=!0,a=!1,o=void 0;try{for(var i,c=e.props.heroes[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var s=i.value;if(r.ct2===s.pk)return s.name}}catch(u){a=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}},e.changeView=function(){Object(m.a)(e).setState(function(e){return{mouseOver:!e.mouseOver}})},e.state={mouseOver:!1},e}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.getImage(this.props.counteringHero.heroCounters),r=this.getName(this.props.counteringHero);return a.a.createElement("div",{style:{position:"relative"}},a.a.createElement("img",{src:t,alt:"hero",title:r,onClick:function(){return e.changeView()}}),a.a.createElement("h2",null,"Value is ",this.props.value),this.state.mouseOver?a.a.createElement(V,{relations:this.props.counteringHero.heroCounters,changeView:this.changeView,heroes:this.props.heroes,updateDB:this.props.updateDB}):a.a.createElement(a.a.Fragment,null))}}]),t}(n.Component),L=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.a.createElement("input",{type:"submit",className:"heroValue-submit",value:"Retry",onClick:function(){return e.props.changeView()}})),a.a.createElement("div",{style:{width:"100%"}},this.props.foundHero.slice(0,10).map(function(t){return a.a.createElement(D,{counteringHero:t,value:t.value,key:t.key,heroes:e.props.heroes,updateDB:e.props.updateDB})})))}}]),t}(n.Component),B=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(f.a)(this,Object(d.a)(t).call(this))).getCounters=function(t){var r=Object(m.a)(e),n=t.map(function(e){return e.pk}).map(function(e){return"http://127.0.0.1:8000/api/herocounters/".concat(e,"/counter_list/")}).map(function(e){return b.a.get(e)});b.a.all(n).then(function(t){var n=t.map(function(e){return e.data}),a=[];n.forEach(function(e){a=[].concat(Object(l.a)(a),Object(l.a)(e))}),r.setState({counterData:a},function(){return e.createCounterScore(a)})})},e.createCounterScore=function(t){var r=Object(m.a)(e),n=[],a=0;if(void 0!==t&&0!==t.length){var o=!0,i=!1,c=void 0;try{for(var s,u=function(){var e=s.value,r={heroCounters:[],value:0,key:a+=1},o=!0,i=!1,c=void 0;try{for(var u,h=t[Symbol.iterator]();!(o=(u=h.next()).done);o=!0){var p=u.value;p.ct2===e.ct2&&(r.heroCounters.push(p),r.value=r.value+p.score)}}catch(f){i=!0,c=f}finally{try{o||null==h.return||h.return()}finally{if(i)throw c}}n.some(function(t){return t.heroCounters[0].ct2===e.ct2})||(n=[].concat(Object(l.a)(n),[r])).sort(function(e,t){return e.value>t.value?-1:1})},h=t[Symbol.iterator]();!(o=(s=h.next()).done);o=!0)u()}catch(p){i=!0,c=p}finally{try{o||null==h.return||h.return()}finally{if(i)throw c}}}r.setState(function(e){return{counterSort:e.counterSort.concat(n)}},function(){return e.changeView()})},e.changeView=function(){Object(m.a)(e).setState(function(e){return{renderCounters:!e.renderCounters}})},e.updateDB=function(e,t){b.a.patch("http://127.0.0.1:8000/api/herocounters/"+e+"/counter_list/",{score:t})},e.state={heroes:[],counterData:[],counterSort:[],renderCounters:!1},e}return Object(v.a)(t,e),Object(p.a)(t,[{key:"getHeroes",value:function(){var e=Object(u.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("http://127.0.0.1:8000/api/heroes/");case 3:t=e.sent,this.setState({heroes:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getHeroes()}},{key:"render",value:function(){return a.a.createElement("div",{className:"app-wrapper"},this.state.renderCounters?a.a.createElement(L,{foundHero:this.state.counterSort,changeView:this.changeView,heroes:this.state.heroes,updateDB:this.updateDB}):a.a.createElement(w,{counterData:this.state.counterData,getCounters:this.getCounters,heroes:this.state.heroes,changeView:this.changeView,renderCounters:this.state.renderCounters,createCounterScore:this.createCounterScore}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.16307b9d.chunk.js.map