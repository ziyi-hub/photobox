import gallery from './lib/gallery.js';
import gallery_ui from './lib/gallery_ui.js';


document.querySelector('#load_gallery')
    .addEventListener('click',  e => {
        gallery.load().then(gallery_ui.display_galerie)
  })


document.querySelector("#next")
    .addEventListener('click', e=>{
        gallery.next().then(gallery_ui.display_galerie)
    })


document.querySelector("#previous")
    .addEventListener('click', e=>{
        gallery.prev().then(gallery_ui.display_galerie)
    })


document.querySelector('#last')
    .addEventListener('click', e=>{
        gallery.last().then(gallery_ui.display_galerie)
    })


document.querySelector('#first')
    .addEventListener('click', e=>{
        gallery.first().then(gallery_ui.display_galerie)
    })



