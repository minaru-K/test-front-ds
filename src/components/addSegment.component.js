import { dbService } from "../services/db.service";
import checkData from "../core/validator";
export class AddSegment {
  render() {
    document.getElementById("content").innerHTML = `
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
       </div> `;

    document
      .getElementById("content")
      .addEventListener("click", addSegment.bind(this));
  }
}

async function addSegment(event) {
  if (event.target.dataset.name === "create_segment") {
    const name = document.getElementById("segment_name").value;
    const percent = document.getElementById("percent").value;
    if (checkData(name, percent)) {
      const res = await dbService.createSegment(name, percent);
      if (res.includes("msg")) {
        alert("Something going wrong, give another name and try again...");
      } else {
        alert("Segment created!");
      }
    } else {
      alert("Input correct data!");
    }
  }
}
