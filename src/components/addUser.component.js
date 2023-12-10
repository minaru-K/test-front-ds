import { dbService } from "../services/db.service";

export class AddUser {
  init() {}
  render() {
    const content = document.getElementById("content");
    content.innerHTML = `<div class="center"> <p class="white-text flow-text">If you want to add user, click this button.</p><button class="btn waves-effect waves-light brown lighten-3" type="submit" name="action" data-name="addUser_button">Add
        <i class="material-icons right"></i>
      </button></div>`;
    document
      .getElementById("content")
      .addEventListener("click", newUser.bind(this));
  }
}
async function newUser(event) {
  if (event.target.dataset.name === "addUser_button") {
    const response = await dbService.createUser();
    alert(`Conguration! You create user with id ${response.id}`);
  }
}
