import config from './config.js';
import lightbox from "./lightbox.js";
//import gallery from "./gallery";
//import gallery_ui from "./gallery_ui";

function show(){
    let l = document.querySelector('#lightbox_container')
    l.classList.remove('lightbox_container--hidden')
    l.classList.add('lightbox_container--visible')
}

function hide(){
    let l = document.querySelector('#lightbox_container')
    l.classList.add('lightbox_container--hidden')
    l.classList.remove('lightbox_container--visible')
}


function display_lightbox(data){
    let container = document.querySelector('#lightbox_container')
    container.innerHTML = `
<div id="lightbox">
    <div id="lightbox-head">
        <p id="lightbox_close">-X-</p>
        <h1 id="lightbox_title">${data.photo.titre}</h1>
    </div>
    <div id="lightbox-img">
        <div id="lightbox_prev"> <h2> << </h2> </div>
        <div id="lightbox_next"> <h2> >> </h2> </div>
        <img id="lightbox_full_img" src=${config.serveur + data.photo.url.href}>
        <div id="informations">
            <h4>informations photo :</h4>
            <p>description : ${data.photo.descr}</p>
            <p>format : ${data.photo.format}</p>
            <p>type : ${data.photo.type}</p>
            <p>width : ${data.photo.width} x ${data.photo.height}</p>
            <p>file : ${data.photo.file}</p>
            <p>taille : ${data.photo.size}</p>
        </div>
    </div>
</div>`

    container.querySelector('#lightbox_close').addEventListener('click', e=>{
        hide()
    })
    show()

    document.querySelector("#lightbox_prev")
        .addEventListener('click', e=>{
            console.log(lightbox.prev())
            /*console.log(lightbox.next())*/
            lightbox.prev().then(display_lightbox)
        })
}



export default {
    display_lightbox: display_lightbox,
}