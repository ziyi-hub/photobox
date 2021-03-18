import photoloader from "./photoloader.js";

let panier = []

function load(node) {
    return photoloader.fetchURI(node.getAttribute('data-uri'));
}

function next() {
    return load(document.getElementsByTagName("img").item(0))
}

function prev(){
    for (var i = 0; i < document.getElementsByTagName("img").length; i++) {
        var res = document.getElementsByTagName("img")[i]
        panier.push(res)
    }
    return load(panier[7])
}

export default {
    load: load,
    prev: prev,
    next: next,
}