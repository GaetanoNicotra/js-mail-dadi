// SECONDO ESERCIZIO: DADI

let numberUtente = prompt('Inserisci un numero da 1 a 6');
console.log(numberUtente + ' ' + "Numero dell'utente");

let numberComputer = Math.floor(Math.random() * 6) + 1;
console.log(Math.floor(Math.random() * 6) + 1 + ' ' + "Numero del computer");

let vittoria = ['Vittoria', 'Sconfitta', 'Pareggio'];

if (numberUtente >= 1 && numberUtente <= 6) {

}

else {
    console.log(alert('ERRORE: Hai inserito un numero maggiore di 6, Ritenta!'));
    console.log('ERRORE: Hai inserito un numero maggiore di 6, Ritenta!');
}

if (numberUtente > numberComputer) {
    vittoria = 'Vittoria';
    console.log(vittoria + ' ' + ': l\'utente ha VINTO!');
}

else if (numberUtente < numberComputer) {
    vittoria = 'Sconfitta';
    console.log(vittoria + ' ' + ': Il computer ha VINTO!');
}
else {
    vittoria = 'Pareggio';
    console.log(vittoria);
}


/*if (vittoria == 'Vittoria') {
    console.log('L\'utente ha vinto');
}
else if (vittoria == 'Sconfitta') {
    console.log('Il computer ha vinto')
}

else if ((vittoria == 'Pareggio')) {
    console.log('P')
}*/