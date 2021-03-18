
import config from './config.js';

function loadPicture(idPicture) {
    return fetch(config.serveur+config.chemin+'photos/'+idPicture,
        {credentials: 'include'}
    ).then(response => {
        if (response.ok) return response.json()
        else console.log('resp error'+response.status)
    }).catch(error => {
        console.log('network error : '+error);
    })
}

function fetchURI(uri) {
    return fetch(config.serveur+uri,
        {credentials: 'include'}
    ).then(response => {
        if (response.ok) return response.json()
        else console.log('resp error'+response.status)
    }).catch(error => {
        console.log('network error : '+error);
    })
}



export default {
    loadPicture: loadPicture,
    fetchURI: fetchURI 
}