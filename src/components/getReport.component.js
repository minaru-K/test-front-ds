import { dbService } from "../services/db.service";
export class GetReport {
  render() {
    document.getElementById("content").innerHTML = `
    <div class="center col s12">
        <input type="text" class="datepicker" placeholder="Choose date" id='date'>
        <a class="waves-effect waves-light brown lighten-3 btn" data-name='get_report' id="download">Get report</a>
    </div> `;
    const $selects = document.querySelectorAll(".datepicker");
    M.Datepicker.init($selects, {
      format: "yyyy-m",
      async onClose() {
        const date = document.getElementById("date").value;
        const url = await dbService.getReport(date);
        document.getElementById("download").setAttribute("href", `${url}`);
      },
    });
  }
}
