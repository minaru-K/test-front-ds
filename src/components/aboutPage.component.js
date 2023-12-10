export class AboutPage {
    init(){
            
    }
    renderPage(){
        const content = document.getElementById('content')
        content.innerHTML = `<p class="white-text flow-text">This is a simple page that allows you to create users and segments, add and remove users from segments, delete segments themselves, and also get statistics. Let's try!</p>`
    }
}