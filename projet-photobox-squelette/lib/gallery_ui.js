import config from "./config.js";
import lightbox from "./lightbox.js";
import lightbox_ui from "./lightbox_ui.js";

function display_galerie(galerie) {
    let container = document.querySelector('#gallery_container')
    container.innerHTML = galerie.photos.reduce( (acc, elem) => {
        return acc + `
        <div class="vignette" >
            <img data-uri="${elem.links.self.href}"
            src="${config.serveur + elem.photo.thumbnail.href}">
        </div>`
    }, '')
    container.querySelectorAll('.vignette').forEach( elem => {
        elem.addEventListener('click',  e => {
            lightbox.load(e.target).then(lightbox_ui.display_lightbox)
        })
    })
}



export default {
    display_galerie: display_galerie
}