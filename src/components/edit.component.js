import { dbService } from "../services/db.service";
import checkData from "../core/validator";
export class Edit {
  render() {
    document.getElementById("content").innerHTML = `
        <div class="row center">
        <div class="col s9 m5">
        <div class="row">
        <a class="waves-effect waves-light brown lighten-3 btn" data-name="add">Add User to Segment</a>
        <a class="waves-effect waves-light brown lighten-3 btn" data-name="remove">Delete User from Segment</a>
        <a class="waves-effect waves-light brown lighten-3 btn" data-name="delete_segment">Delete Segment</a>
        </div>
        </div>
        </div>
        `;
    document
      .getElementById("content")
      .addEventListener("click", selectFunc.bind(this));
  }
}

function selectFunc(event) {
  switch (event.target.dataset.name) {
    case "add":
      addUserToSegmentRender();
      break;
    case "remove":
      removeUserFromSegmentRender();
      break;
    case "delete_segment":
      deleteSegmentRender();
      break;
  }
}

function addUserToSegmentRender() {
  document.getElementById("content").innerHTML = `
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
        `
  document.getElementById('add_btn').addEventListener('click', postToServer.bind(this))
}

async function postToServer(event){
    const name = document.getElementById("segment_name").value
    const id = document.getElementById("id").value
    if (checkData(name, id)){
        const res = await dbService.addUserToSegment(id, name)
        if (res.includes("msg")) {
            alert("Something going wrong, give another name or id and try again...");
          } else {
            alert("Success");
          }
        } else {
          alert("Input correct data!");
        
    }
}

function removeUserFromSegmentRender(){
    document.getElementById("content").innerHTML = `
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
        `
  document.getElementById('del_btn').addEventListener('click', delFromServer.bind(this))

}

async function delFromServer(event){
    const name = document.getElementById("segment_name").value
    const id = document.getElementById("id").value
    if (checkData(name, id)){
        const res = await dbService.delUserFromSegment(id, name)
        if (res.includes("msg")) {
            alert("Something going wrong, give another name or id and try again...");
          } else {
            alert("Success");
          }
        } else {
          alert("Input correct data!");
        
    }
}

function deleteSegmentRender(){
    document.getElementById("content").innerHTML = `
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s4">
          <input id="segment_name" type="text" class="validate">
          <label for="segment_name">Segment Name</label>
        </div>
      </div>
      <a class="waves-effect waves-light brown lighten-3 btn" id="del_btn">Delete</a>
        `
  document.getElementById('del_btn').addEventListener('click', delSegment.bind(this))

}

async function delSegment(event){
    const name = document.getElementById("segment_name").value
    if (!name.includes(" ")){
        const res = await dbService.deleteSegment(name)
        if (res.includes("msg")) {
            alert("Something going wrong, give another name and try again...");
          } else {
            alert("Success");
          }
        } else {
          alert("Input correct data!");
    }
}