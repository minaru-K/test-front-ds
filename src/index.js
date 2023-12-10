import { AboutPage } from "./components/aboutPage.component";
import { AddSegment } from "./components/addSegment.component";
import { AddUser } from "./components/addUser.component";
import { Edit } from "./components/edit.component";
import { GetReport } from "./components/getReport.component";
import { GetUser } from "./components/getUser.component";

const aboutPage = new AboutPage();
const getUser = new GetUser();
const addSegment = new AddSegment();
const addUser = new AddUser();
const edit = new Edit();
const getReport = new GetReport();

document
  .getElementById("navigation")
  .addEventListener("click", checkClick.bind(this));

function checkClick(event) {
  event.preventDefault()
  const dataset = event.target.dataset.name;
  switch (dataset) {
    case "aboutPage":
      aboutPage.renderPage();
      break;
    case "getUser":
      getUser.render();
      break;
    case "addUser":
      addUser.render();
      break;
    case "addSegment":
      addSegment.render();
      break;
    case "edit":
      edit.render();
      break;
    case "getReport":
      getReport.render();
      break;
    default:
      break;
  }
}
