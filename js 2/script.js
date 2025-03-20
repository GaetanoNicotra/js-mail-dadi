// SECONDO ESERCIZIO: DADI

let numberUtente = prompt('Inserisci un numero da 1 a 6')
console.log(numberUtente + ' ' + "Numero dell'utente")

let numberComputer = Math.random();
console.log(Math.floor(Math.random() * 6) + 1 + ' ' + "Numero del computer")

let vittoria = ['Vittoria', 'Sconfitta', 'Pareggio'];
if (numberUtente >= 1 && numberUtente <= 6) {

    if (numberUtente > Math.floor(Math.random() * 6) + 1) {
        vittoria = 'Vittoria';
        console.log(vittoria + ' ' + ': l\'utente ha VINTO!')
    }

    else if (numberUtente < Math.floor(Math.random() * 6) + 1) {
        vittoria = 'Sconfitta';
        console.log(vittoria + ' ' + ': Il computer ha VINTO!')
    }
    else
    //if (numberUtente === Math.floor(Math.random() * 6) + 1)
    {
        vittoria = 'Pareggio';
        console.log(vittoria);
    }
}

else {
    console.log('ERRORE: Hai inserito un numero maggiore di 6, Ritenta!')
}


/*if(vittoria === 'vittoria'){
    console.log('L\'utente ha vinto');
}
else{
     console.log('Il computer ha vinto')
}*/
