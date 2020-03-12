(this["webpackJsonptilt-client"]=this["webpackJsonptilt-client"]||[]).push([[0],{103:function(e,t,n){e.exports=n(145)},124:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),s=n.n(r),c=n(17),i=n(8),l=n(9),u=n(10),d=n(11),p=n(12),h=n(37),g=n.n(h),m=new(function(){function e(){Object(i.a)(this,e),this.auth=g.a.create({baseURL:"http://localhost:5000",withCredentials:!0})}return Object(l.a)(e,[{key:"signup",value:function(e){var t=e.username,n=e.password;return this.auth.post("/auth/signup",{username:t,password:n}).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.username,n=e.password;return this.auth.post("/auth/login",{username:t,password:n}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),f=o.a.createContext(),b=f.Consumer,v=f.Provider,E=function(e){return function(t){function n(){return Object(i.a)(this,n),Object(u.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,t),Object(l.a)(n,[{key:"render",value:function(){var t=this;return o.a.createElement(b,null,(function(n){var a=n.login,r=n.signup,s=n.logout,c=n.user,i=n.isLoggedIn;return o.a.createElement(e,Object.assign({user:c,isLoggedIn:i,login:a,signup:r,logout:s},t.props))}))}}]),n}(a.Component)},O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={isLoggedIn:!1,user:null,isLoading:!0},n.signup=function(e,t){m.signup({username:e,password:t}).then((function(e){return n.setState({isLoggedIn:!0,user:e})})).catch((function(e){return console.log(e)}))},n.login=function(e,t){m.login({username:e,password:t}).then((function(e){return n.setState({isLoggedIn:!0,user:e})})).catch((function(e){return console.log(e)}))},n.logout=function(){m.logout().then((function(){return n.setState({isLoggedIn:!1,user:null})})).catch((function(e){return console.log(e)}))},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.me().then((function(t){return e.setState({isLoggedIn:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.isLoggedIn,a=e.user,r=this.login,s=this.logout,c=this.signup;return o.a.createElement(v,{value:{isLoading:t,isLoggedIn:n,user:a,login:r,logout:s,signup:c}},this.props.children)}}]),t}(o.a.Component),j=(n(67),n(124),n(28)),y=n(176),w=n(73),S=n.n(w),D=n(75),C=n.n(D),k=n(77),I=n.n(k);var x=E((function(e){e.user,e.logout;var t=e.isLoggedIn;return e.classes,e.history,o.a.createElement(y.a,{position:"sticky"},o.a.createElement("div",{className:"nav-bar"},o.a.createElement(C.a,{className:"power-icon",fontSize:"large",onClick:function(){return function(e){console.log(e),e.history.push("/")}(e)}}),o.a.createElement("div",null,o.a.createElement(c.b,{to:"/randomEpisode"},o.a.createElement("img",{src:S.a,alt:"",width:"300",height:"48px",className:"logo"}))),t?o.a.createElement(o.a.Fragment,null,o.a.createElement(c.b,{className:"nav-links",to:"/logout"},o.a.createElement(I.a,{fontSize:"large",className:"power-icon"}))):o.a.createElement(o.a.Fragment,null,o.a.createElement(c.b,{to:"/login"},o.a.createElement("h4",null,"Login")),o.a.createElement(c.b,{to:"/signup"},o.a.createElement("h4",null,"Sign Up")))))})),L=n(15),P=E(function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={username:"",password:""},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.username,o=t.password;n.props.signup(a,o)},n.handleChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(L.a)({},a,o))},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return o.a.createElement("div",null,o.a.createElement("h1",null,"Sign Up"),o.a.createElement("form",{onSubmit:this.handleFormSubmit},o.a.createElement("label",null,"Username:"),o.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),o.a.createElement("label",null,"Password:"),o.a.createElement("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),o.a.createElement("input",{type:"submit",value:"Signup"})),o.a.createElement("p",null,"Already have account?"),o.a.createElement(c.b,{to:"/login"}," Login"))}}]),t}(a.Component)),R=E(function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={username:"",password:""},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.username,o=t.password;n.props.login(a,o)},n.handleChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(L.a)({},a,o))},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return o.a.createElement("div",null,o.a.createElement("h1",null,"Login"),o.a.createElement("form",{onSubmit:this.handleFormSubmit},o.a.createElement("label",null,"Username:"),o.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),o.a.createElement("label",null,"Password:"),o.a.createElement("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),o.a.createElement("input",{type:"submit",value:"Login"})))}}]),t}(a.Component)),N=n(189),T=n(188),B=n(185),A=function(e){return o.a.createElement("div",null,o.a.createElement(N.a,{id:"demo-simple-select-label"}),o.a.createElement(B.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",onClick:e.dropDownHandler,value:e.sortBydate?"Sort By Date":"Sort by Relevance"},o.a.createElement(T.a,{value:10},"Relevance"),o.a.createElement(T.a,{value:20},"Date")))};n(70).config();var U=new function e(){var t=this;Object(i.a)(this,e),this.getAllLangs=function(){return t.api.get("/languages")},this.getAllGenres=function(){return t.api.get("/genres")},this.getRandomEpisodeObj=function(){return t.api.get("/just_listen")},this.getSearchResults=function(e){return t.api.get("/search?q=".concat(e))},this.getTypeaheadResults=function(e){return t.api.get("/typeahead/?q=".concat(e))},this.getOnePodcast=function(e){return t.api.get("podcasts/".concat(e))},this.getOneEpisode=function(e){return t.api.get("episodes/".concat(e))},this.getBestPodcast=function(e){return t.api.get("/best_podcasts/".concat(e))},this.getPodcastRecommendation=function(e){return t.api.get("/podcasts/".concat(e,"/recommendations"))},this.getEpisodesRecommendation=function(e){return t.api.get("/episodes/".concat(e,"/recommendations"))},this.api=g.a.create({baseURL:"https://listen-api.listennotes.com/api/v2",headers:{get:{"X-ListenAPI-Key":"dd01821f613448138275bab37a338427"}}})},Q=n(190),M=n(80),_=n.n(M),F=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={searchQuery:"",type:"podcast",sortByDate:!1,title:!0,description:!1,genres:[],suggestedPodcasts:[]},n.setQueryResult=function(e){(0,n.props.returnData)(e)},n.handleChange=function(e){var t=e.target.value;n.setState((function(e,n){return{searchQuery:t}})),U.getTypeaheadResults(t.toLowerCase()).then((function(e){var t=e.data.terms.map((function(e){return e}));n.setState({suggestedPodcasts:t})})).catch((function(e){console.log("err",e)}))},n.handleSortByDate=function(e){var t=e.target.value;n.setState({sortByDate:t})},n.handleSubmit=function(e){if(e.preventDefault(),0!==n.state.searchQuery.length){var t=n.state.searchQuery.replace(" ","%20").concat("&type=".concat(n.state.type)).concat("&sortbyDate=".concat(n.state.sortByDate?"1":"0")).concat("$only_in=\n      ".concat(n.state.title?"title":""+n.state.description?"description":""));console.log("formQuery :",t),U.getSearchResults(t).then((function(e){return e.data})).then((function(e){n.setQueryResult(e)})).catch((function(e){return console.log("err",e)}))}},n.dropDownHandler=function(e){"Relevance"===e.target.innerText?n.setState({sortByDate:!1}):"Date"===e.target.innerText&&n.setState({sortByDate:!0})},n.handleSuggestClick=function(e){e.preventDefault(),n.setState({suggestedPodcasts:[],searchQuery:e.target.innerText}),U.getSearchResults(e.target.innerText).then((function(e){return e.data})).then((function(e){n.setQueryResult(e)})).catch((function(e){return console.log("err",e)}))},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"search-container",width:"100%"},o.a.createElement(Q.a,{fullWidth:"true",id:"filled-basic",placeholder:"Search ",autoComplete:"off",type:"text",name:"searchBar",value:this.state.searchQuery,onChange:this.handleChange}),o.a.createElement(_.a,{onClick:this.handleSubmit}),o.a.createElement(A,{sortState:this.state.sortByDate,dropDownHandler:this.dropDownHandler}),o.a.createElement("br",null)),0===this.state.suggestedPodcasts.length?null:o.a.createElement("div",{className:"dropdown"},o.a.createElement("div",{className:"dropdown-content-search "},o.a.createElement("ul",null,this.state.suggestedPodcasts.map((function(t,n){return o.a.createElement("li",{onClick:e.handleSuggestClick},t)}))))))}}]),t}(a.Component),H=n(180),q=n(181),z=n(183),J=n(182),W=n(31),G=n.n(W),K=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={dataToRender:n.props.data},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){if(e!==this.props){var t=this.props.data;this.setState((function(e,n){return{dataToRender:t}}))}}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.dataToRender.map((function(e){return void 0===e.description&&console.log(e),o.a.createElement(c.b,{key:"".concat(e.id),to:"/podcastResult/".concat(e.id)},o.a.createElement(H.a,{"border-bottom":1,"box-shadow":1,className:"shadow"},o.a.createElement(q.a,null,o.a.createElement(J.a,{title:G()(e.title_highlighted||e.title)},o.a.createElement("img",{src:e.image,height:"300",width:"300",alt:"",srcset:"",className:"card-image"})),o.a.createElement(z.a,null,G()(e?e.description_highlighted||e.description:"")))))})))}}]),t}(a.Component),X=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).getSearchData=function(t){e.setState({searchData:t.results,isQueryRecieved:!0})},e.state={searchData:[],isQueryRecieved:!1},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;U.getBestPodcast("").then((function(t){var n=t.data.podcasts;e.setState({searchData:n})})).catch((function(e){console.log("err :",e)}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(F,{returnData:this.getSearchData}),o.a.createElement(K,{data:this.state.searchData}))}}]),t}(a.Component),$=n(48),V=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={episodeObj:{},runTime:0},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.episodeObj,t=Object($.convertSecondsToDisplay)(e.audio_length_sec);this.setState({episodeObj:e,runTime:t})}},{key:"render",value:function(){return this.state.episodeObj?o.a.createElement("div",null,o.a.createElement(c.b,{to:"/episode/".concat(this.state.episodeObj.id)},o.a.createElement(H.a,{className:"shadow margin-top"},o.a.createElement(q.a,null,o.a.createElement(J.a,{title:this.state.runTime||null},o.a.createElement("br",null),o.a.createElement("img",{src:this.state.episodeObj.image,height:"300",width:"300",alt:"",srcset:"",className:"card-image"})),o.a.createElement(z.a,null,G()(this.state.episodeObj.description?this.state.episodeObj.description:"loading")))))):null}}]),t}(a.Component),Y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={podcastObj:{}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;U.getOnePodcast(t).then((function(t){var n=t.data;e.setState({podcastObj:n})})).catch((function(e){console.log("err :",e)}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,this.state.podcastObj.title),this.state.podcastObj.episodes?this.state.podcastObj.episodes.map((function(e){return o.a.createElement(V,{episodeObj:e,key:e.id})})):"loading")}}]),t}(a.Component),Z=n(91);n(144);n(70).config();var ee=new function e(){var t=this;Object(i.a)(this,e),this.getById=function(e){return t.listenedEpisode.get("/".concat(e))},this.setNewListenedEpisode=function(e){return t.listenedEpisode.post("/",{episodeID:e})},this.setEpisodeProgress=function(e,n){return t.listenedEpisode.put("/",{progress:n,id:e})},this.listenedEpisode=g.a.create({baseURL:"".concat("https://tilt-pod.herokuapp.com","/listenedEpisode"),withCredentials:!0})},te=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={id:null,episodeObj:null,nextEpID:null},n.getCurrentEp=function(){var e=n.props.match.params.id;void 0===e&&(e=n.props.episodeId,console.log("this.state.id :",n.props)),n.setState((function(t,n){return{id:e}})),U.getOneEpisode(e).then((function(e){var t=e.data;n.setState({episodeObj:t})})).catch((function(e){console.log("err",e)}))},n.getNextEpID=function(){var e=n.state.episodeObj.podcast.id,t=n.state.id,a=null;U.getOnePodcast(e).then((function(e){e.data.episodes.forEach((function(n,o){console.log(n.id),n.id===t&&(a=e.data.episodes[o+1].id)})),console.log("nextEpisodeID",a),n.handleNext(a)})).catch((function(e){console.log("err :",e)}))},n.getPrevEpID=function(){var e=n.state.episodeObj.podcast.id,t=n.state.id,a=null;U.getOnePodcast(e).then((function(e){e.data.episodes.forEach((function(n,o){console.log(n.id),n.id===t&&(a=e.data.episodes[o-1].id)})),n.handlePrev(a)})).catch((function(e){console.log("err :",e)}))},n.handleNext=function(e){console.log("nextEpID :",e),e&&(n.getCurrentEp(),n.props.history.push("/episode/".concat(e)))},n.handlePrev=function(e){console.log("nextEpID :",e),e&&(n.getCurrentEp(),n.props.history.push("/episode/".concat(e)))},n.handlePlay=function(e){var t=n.state.id;ee.getById(t).then((function(t){0===t.data.length?n.saveToUser():e.target.currentTime=t.data[0].progress})).catch((function(e){console.log("err",e)}))},n.saveToUser=function(){ee.setNewListenedEpisode(n.state.id)},n.updateProgress=function(e){ee.setEpisodeProgress(n.state.id,e.target.currentTime)},n.Player=function(){return o.a.createElement(Z.a,{src:n.state.episodeObj.audio,showSkipControls:!0,onClickNext:n.getNextEpID,onClickPrevious:n.getPrevEpID,onPlay:n.handlePlay,onPause:n.updateProgress})},n.newRandom=function(){n.props.reload&&n.props.reload()},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getCurrentEp()}},{key:"componentDidUpdate",value:function(e,t){e.episodeId!==this.props.episodeId&&this.getCurrentEp()}},{key:"render",value:function(){return console.log("this.state :",this.state),this.state.episodeObj?o.a.createElement("div",null,o.a.createElement(H.a,{className:"shadow",onClick:this.newRandom},o.a.createElement(q.a,null,o.a.createElement(J.a,{title:G()(this.state.episodeObj.title)},o.a.createElement("img",{src:this.state.episodeObj.image,alt:"",height:"300",width:"300",className:"card-image"})),o.a.createElement(z.a,null,Object($.convertSecondsToDisplay)(this.state.episodeObj.audio_length_sec),G()(this.state.episodeObj.description?this.state.episodeObj.description.substring(0,320).concat("..."):"loading")))),this.Player()):null}}]),t}(a.Component),ne=Object(j.g)(te),ae=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={id:null},n.getRandomEpisodeID=function(){U.getRandomEpisodeObj().then((function(e){var t=e.data.id;n.setState({id:t})})).catch((function(e){console.log("err",e)}))},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getRandomEpisodeID()}},{key:"render",value:function(){return this.state.id?o.a.createElement("div",null,o.a.createElement(ne,{episodeId:this.state.id,reload:this.getRandomEpisodeID})):null}}]),t}(a.Component),oe=Object(j.g)(ae),re=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={currentUser:{}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.me().then((function(t){e.setState({currentUser:t}),console.log("this.state",e.state)})).catch((function(e){console.log("err",e)}))}},{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(a.Component),se=n(187),ce=n(184),ie=n(2);var le=E((function(e){var t=e.component,n=e.isLoggedIn,a=Object(ie.a)(e,["component","isLoggedIn"]);return(o.a.createElement(j.b,Object.assign({},a,{render:function(e){return n?o.a.createElement(j.a,{to:"/"}):n?void 0:o.a.createElement(t,e)}})))}));var ue=E((function(e){var t=e.component,n=e.isLoggedIn,a=Object(ie.a)(e,["component","isLoggedIn"]);return o.a.createElement(j.b,Object.assign({},a,{render:function(e){return n?o.a.createElement(t,e):n?void 0:o.a.createElement(j.a,{to:"/"})}}))})),de=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).toggleIndex=function(){return n.setState({showIndex:!0})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(se.a,null,o.a.createElement(x,{history:this.props.history}),o.a.createElement(ce.a,{maxWidth:"sm"},o.a.createElement(j.d,null,o.a.createElement(le,{exact:!0,path:"/signup",component:P}),o.a.createElement(le,{exact:!0,path:"/login",component:R}),o.a.createElement(ue,{exact:!0,path:"/",component:X}),o.a.createElement(ue,{exact:!0,path:"/podcastResult/:id",component:Y}),o.a.createElement(ue,{exact:!0,path:"/episode/:id",component:ne}),o.a.createElement(ue,{exact:!0,path:"/profile",component:re}),o.a.createElement(ue,{exact:!0,path:"/randomEpisode",component:oe}))))}}]),t}(a.Component),pe=Object(j.g)(de);s.a.render(o.a.createElement(c.a,null,o.a.createElement(O,null,o.a.createElement(pe,null))),document.getElementById("root"))},48:function(e,t){e.exports.convertSecondsToDisplay=function(e){var t=function(e){return 1===e.toString().length?"0".concat(e):e},n=t(Math.floor(e/3600)),a=t(Math.floor(e/60)%60),o=t(Math.floor(e%60));return"".concat(n,":").concat(a,":").concat(o)}},73:function(e,t,n){e.exports=n.p+"static/media/logo.532226fc.png"}},[[103,1,2]]]);
//# sourceMappingURL=main.4aa6dccb.chunk.js.map