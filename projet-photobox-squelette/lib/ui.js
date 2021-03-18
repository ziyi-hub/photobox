import config from './config.js';

function displayPicture(objet) {
    document.querySelector('#la_photo').innerHTML = `
    <img src="${config.serveur+objet.photo.url.href}">
    <h4>${objet.photo.titre}</h4>
    <p>${objet.photo.descr}</p>
    <p>${objet.photo.typr}, ${objet.photo.width} x ${objet.photo.height}</p>
    <h4 id="la_categorie">categorie : categorie de l'image</h4>
    <h4>commentaires : </h4>
    <ul id="les_commentaires">
      <li>pseudo : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, vitae.</li>
      <li>pseudo : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, recusandae.</li>
    </ul>`
}

function displayCategorie(objet) {
    document.querySelector('#la_categorie').innerHTML = `
    categorie : ${objet.categorie.nom} (${objet.categorie.descr})`
}

function displayCommentaire(objet) {
    let ul = document.querySelector('#les_commentaires')
    ul.innerHTML = ''
    objet.comments.forEach(element => {
        let li = document.createElement('li')
        li.innerHTML = element.pseudo + ' : ' + element.content
        ul.append(li)
    })
}

export default {
    displayPicture: displayPicture,
    displayCategorie: displayCategorie,
    displayCommentaire: displayCommentaire 
}