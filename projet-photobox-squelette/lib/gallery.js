import config from './config.js';
import photoloader from "./photoloader.js";

let galerie = {}

function load() {
    return loadPage(config.chemin+'photos')
}

function loadPage(uri) {
    let pr = photoloader.fetchURI(uri)
    pr.then(gal => {
        galerie = gal
    })
    return pr
}

function next() {
    return loadPage(galerie.links.next.href);
}

function prev(){
    return loadPage(galerie.links.prev.href);
}

function last(){
    return loadPage(galerie.links.last.href);
}

function first(){
    return loadPage(galerie.links.first.href);
}

export default {
    load: load,
    next: next,
    loadPage: loadPage,
    prev: prev,
    last: last,
    first: first,
}