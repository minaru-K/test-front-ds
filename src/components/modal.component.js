export default function renderModal(title, text, button){
    return `
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>${title}</h4>
        <p>${text}</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">${button}</a>
      </div>
    </div>`
}