(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();class l{init(){}renderPage(){const e=document.getElementById("content");e.innerHTML=`<p class="white-text flow-text">This is a simple page that allows you to create users and segments, add and remove users from segments, delete segments themselves, and also get statistics. Let's try!</p>`}}class m{constructor(e){this.url=e}async createUser(){try{const e=new Request(this.url+"/newuser",{method:"post"});return d(e)}catch(e){console.error(e)}}async getUser(e){try{const t=new Request(`${this.url}/${e}`,{method:"get"});return d(t)}catch(t){console.log(t)}}async addUserToSegment(e,t){try{return(await fetch(`${this.url}/editing`,{body:`{
                "id":${e},
                "addsegments":[{"segment":"${t}", "interval":"1"}]
            }`,method:"POST"})).text()}catch(s){console.log(s)}}async delUserFromSegment(e,t){try{return(await fetch(`${this.url}/editing`,{body:`{
                "id":${e},
                "delsegments":["${t}"]
            }`,method:"POST"})).text()}catch(s){console.log(s)}}async createSegment(e,t){try{return(await fetch(`${this.url}/create`,{body:`{
                "segment":"${e}",
                "percent":${t}
            }`,method:"POST"})).text()}catch(s){console.log(s)}}async deleteSegment(e){try{const t=new Request(`${this.url}/delete/${e}`,{method:"DELETE"});return d(t)}catch(t){console.log(t)}}async getReport(e){try{return`${this.url}/download?date=${e}`}catch(t){console.log(t)}}}async function d(n){return await(await fetch(n)).json()}const i=new m("http://192.168.128.128:8080");function o(n,e){return!!(!n.includes(" ")&&Number.isInteger(+e))}class g{render(){document.getElementById("content").innerHTML=`
    <div class="left">    
    <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s4">
          <input id="segment_name" type="text" class="validate">
          <label for="segment_name">Segment Name</label>
        </div>
        <div class="input-field col s2">
          <input id="percent" type="text" class="validate">
          <label for="percent">Percent</label>
        </div> 
      </div>
      <a class="waves-effect waves-light brown lighten-3 btn" data-name='create_segment'>Create Segment</a>
       </div> `,document.getElementById("content").addEventListener("click",u.bind(this))}}async function u(n){if(n.target.dataset.name==="create_segment"){const e=document.getElementById("segment_name").value,t=document.getElementById("percent").value;o(e,t)?(await i.createSegment(e,t)).includes("msg")?alert("Something going wrong, give another name and try again..."):alert("Segment created!"):alert("Input correct data!")}}class f{init(){}render(){const e=document.getElementById("content");e.innerHTML=`<div class="center"> <p class="white-text flow-text">If you want to add user, click this button.</p><button class="btn waves-effect waves-light brown lighten-3" type="submit" name="action" data-name="addUser_button">Add
        <i class="material-icons right"></i>
      </button></div>`,document.getElementById("content").addEventListener("click",v.bind(this))}}async function v(n){if(n.target.dataset.name==="addUser_button"){const e=await i.createUser();alert(`Conguration! You create user with id ${e.id}`)}}class h{render(){document.getElementById("content").innerHTML=`
        <div class="row center">
        <div class="col s9 m5">
        <div class="row">
        <a class="waves-effect waves-light brown lighten-3 btn" data-name="add">Add User to Segment</a>
        <a class="waves-effect waves-light brown lighten-3 btn" data-name="remove">Delete User from Segment</a>
        <a class="waves-effect waves-light brown lighten-3 btn" data-name="delete_segment">Delete Segment</a>
        </div>
        </div>
        </div>
        `,document.getElementById("content").addEventListener("click",w.bind(this))}}function w(n){switch(n.target.dataset.name){case"add":p();break;case"remove":b();break;case"delete_segment":I();break}}function p(){document.getElementById("content").innerHTML=`
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s4">
          <input id="segment_name" type="text" class="validate">
          <label for="segment_name">Segment Name</label>
        </div>
        <div class="input-field col s2">
          <input id="id" type="text" class="validate">
          <label for="id">USER ID</label>
        </div> 
      </div>
      <a class="waves-effect waves-light brown lighten-3 btn" id="add_btn">Add</a>
        `,document.getElementById("add_btn").addEventListener("click",y.bind(this))}async function y(n){const e=document.getElementById("segment_name").value,t=document.getElementById("id").value;o(e,t)?(await i.addUserToSegment(t,e)).includes("msg")?alert("Something going wrong, give another name or id and try again..."):alert("Success"):alert("Input correct data!")}function b(){document.getElementById("content").innerHTML=`
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s4">
          <input id="segment_name" type="text" class="validate">
          <label for="segment_name">Segment Name</label>
        </div>
        <div class="input-field col s2">
          <input id="id" type="text" class="validate">
          <label for="id">USER ID</label>
        </div> 
      </div>
      <a class="waves-effect waves-light brown lighten-3 btn" id="del_btn">Remove</a>
        `,document.getElementById("del_btn").addEventListener("click",E.bind(this))}async function E(n){const e=document.getElementById("segment_name").value,t=document.getElementById("id").value;o(e,t)?(await i.delUserFromSegment(t,e)).includes("msg")?alert("Something going wrong, give another name or id and try again..."):alert("Success"):alert("Input correct data!")}function I(){document.getElementById("content").innerHTML=`
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s4">
          <input id="segment_name" type="text" class="validate">
          <label for="segment_name">Segment Name</label>
        </div>
      </div>
      <a class="waves-effect waves-light brown lighten-3 btn" id="del_btn">Delete</a>
        `,document.getElementById("del_btn").addEventListener("click",S.bind(this))}async function S(n){const e=document.getElementById("segment_name").value;e.includes(" ")?alert("Input correct data!"):(await i.deleteSegment(e)).includes("msg")?alert("Something going wrong, give another name and try again..."):alert("Success")}class _{render(){document.getElementById("content").innerHTML=`
    <div class="center col s12">
        <input type="text" class="datepicker" placeholder="Choose date" id='date'>
        <a class="waves-effect waves-light brown lighten-3 btn" data-name='get_report' id="download">Get report</a>
    </div> `;const e=document.querySelectorAll(".datepicker");M.Datepicker.init(e,{format:"yyyy-m",async onClose(){const t=document.getElementById("date").value,s=await i.getReport(t);document.getElementById("download").setAttribute("href",`${s}`)}})}}class B{constructor(){this.template=`<div class="row" id="info">
    <form class="col s7">
      <div class="row">
        <div class="input-field col s5">
          <input id="icon_prefix" type="text" class="validate">
          <label for="icon_prefix">ID</label>
        </div>
      </div>
      <a class="waves-effect waves-light brown lighten-3 btn-small left" data-name="get_info">Get info</a>
    </form>
  </div>`}init(){}render(){document.getElementById("content").innerHTML=`<div class="row" id="info">
    <form class="col s7">
      <div class="row">
        <div class="input-field col s6">
          <input id="icon_prefix" type="text" class="validate">
          <label for="icon_prefix">ID</label>
        </div>
      </div>
      <a class="waves-effect waves-light brown lighten-3 btn-small left" data-name="get_info">Get info</a>
    </form>
  </div>`,document.getElementById("content").addEventListener("click",L.bind(this))}}async function L(n){if(n.target.dataset.name==="get_info"){const e=document.getElementById("icon_prefix").value;if(Number.isInteger(+e)){const t=await i.getUser(e);document.getElementById("content").innerHTML=this.template,`${t.segment}`!="null"?document.getElementById("info").insertAdjacentHTML("beforeend",`
          <div class="col s4 m5">
            <div class="card-panel right" style="background-color: #6E7D75">
              <span class="white-text">User with id ${e}
                     is in the following segments: ${t.segment.map(s=>s)}
              </span>
            </div>
          </div>
            `):document.getElementById("info").insertAdjacentHTML("beforeend",`
          <div class="col s4 m5">
            <div class="card-panel right" style="background-color: #6E7D75">
              <span class="white-text">User with id ${e}
              is not a member of any segment
              </span>
            </div>
          </div>
            `)}}}const U=new l,x=new B,$=new g,k=new f,T=new h,q=new _;document.getElementById("navigation").addEventListener("click",R.bind(void 0));function R(n){switch(n.preventDefault(),n.target.dataset.name){case"aboutPage":U.renderPage();break;case"getUser":x.render();break;case"addUser":k.render();break;case"addSegment":$.render();break;case"edit":T.render();break;case"getReport":q.render();break}}
