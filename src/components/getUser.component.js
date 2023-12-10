import { dbService } from "../services/db.service";
export class GetUser {
  constructor() {
    this.template = `<div class="row" id="info">
    <form class="col s7">
      <div class="row">
        <div class="input-field col s5">
          <input id="icon_prefix" type="text" class="validate">
          <label for="icon_prefix">ID</label>
        </div>
      </div>
      <a class="waves-effect waves-light brown lighten-3 btn-small left" data-name="get_info">Get info</a>
    </form>
  </div>`;
  }
  init() {}

  render() {
    document.getElementById("content").innerHTML = `<div class="row" id="info">
    <form class="col s7">
      <div class="row">
        <div class="input-field col s6">
          <input id="icon_prefix" type="text" class="validate">
          <label for="icon_prefix">ID</label>
        </div>
      </div>
      <a class="waves-effect waves-light brown lighten-3 btn-small left" data-name="get_info">Get info</a>
    </form>
  </div>`;

    document
      .getElementById("content")
      .addEventListener("click", getInfo.bind(this));
  }
}

async function getInfo(event) {
  if (event.target.dataset.name === "get_info") {
    const id = document.getElementById("icon_prefix").value;
    if (Number.isInteger(+id)) {
      const res = await dbService.getUser(id);
      document.getElementById("content").innerHTML = this.template;
      if (`${res.segment}` != "null") {
        document.getElementById("info").insertAdjacentHTML(
          "beforeend",
          `
          <div class="col s4 m5">
            <div class="card-panel right" style="background-color: #6E7D75">
              <span class="white-text">User with id ${id}
                     is in the following segments: ${res.segment.map(
                       (segment) => segment
                     )}
              </span>
            </div>
          </div>
            `
        );
      } else {
        document.getElementById("info").insertAdjacentHTML(
          "beforeend",
          `
          <div class="col s4 m5">
            <div class="card-panel right" style="background-color: #6E7D75">
              <span class="white-text">User with id ${id}
              is not a member of any segment
              </span>
            </div>
          </div>
            `
        );
      }
    }
  }
}
