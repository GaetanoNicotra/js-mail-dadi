// SECONDO ESERCIZIO: DADI

let numberUtente = prompt('Inserisci un numero da 1 a 6');
console.log(numberUtente + ' ' + "Numero dell'utente");

let numberComputer = Math.floor(Math.random() * 6) + 1;
console.log(numberComputer + ' ' + "Numero del computer");

let vittoria;

if (numberUtente >= 1 && numberUtente <= 6) {

}

else {
    alert('ERRORE: Devi inserire un numero compreso tra 1 e 6, Ritenta!');
    console.log('ERRORE: Devi inserire un numero compreso tra 1 e 6, Ritenta!');
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
