// PRIMO ESERCIZIO: MAIL

const emailList = ['luca@gmail.com', 'marco@gmail.com', 'gaetano@gmail.com', 'filippo@gmail.com', 'antonio@gmail.com', 'andrea@gmail.com']

let tuaMail = prompt('Inserisci la tua email');

let presente = false;

for (let i = 0; presente == false && i <= emailList.length; i++) {
    if (emailList[i] === tuaMail) {
        presente = true;
    }
}

if (presente === true) {
    console.log('Sei presente nella lista, Puoi entrare!')
}
else {
    console.log('Non sei presente nella lista!')
}
