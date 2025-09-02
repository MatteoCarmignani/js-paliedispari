

console.log(polidroma());



// FUNZIONE PER TROVARE LA PAROLA PALINDROMA

function polidroma() {
  // Scelta della parola dall'utente
  const parolaUtente = prompt("Scegli una parola");

  // Parola al contrario
  parolaInvertita = "";

  for (let i = parolaUtente.length - 1; i >= 0; i--) {

    parolaInvertita += parola[i];
  }

  // Condizioni di funzione
  if (parolaUtente === parolaInvertita) {

    console.log("La tua parola, è una parola polindroma")
    
  } else {

    console.log("La tua parola, non è una parola polindroma, essendo che al contrario si legge " + parolaInvertita);
    
  }

}



// FUNZIONE PER TROVARE SE LA SOMMA è PARI O DISPARI

function gioco() {
  // Numero deciso dall'utente 
  const sceltaUtente = prompt("Scegli 'pari' o 'dispari'");
  const numUtente = parseInt(prompt("Scegli un numero da 1 a 5:"));
  console.log("Il tuo numero è " + numUtente);

  // Numero creato dal computer
  const numComputer = Math.floor(Math.random() * 5) + 1;
  console.log("Invece il numero del computer è " + numComputer);

  // Somma dei 2 numeri
  const somma = numUtente + numComputer;

  // Lettura se pari o dispari e varie condizioni
  if (sceltaUtente.toLowerCase() === "pari") {
    if (somma % 2 === 0) {
      console.log("Che fortuna, hai vinto! " + somma + " è pari");
    } else {
      console.log("Che sfortuna, il computer ha vinto! " + somma + " è dispari, andrà meglio la prossima volta");
    }
  } else if (sceltaUtente.toLowerCase() === "dispari") {
    if (somma % 2 === 0) {
      console.log("Che sfortuna, il computer ha vinto! " + somma + " è pari, andrà meglio la prossima volta");
    } else {
      console.log("Che fortuna, hai vinto! " + somma + " è dispari");
    }
  } else {
    console.log("Scelta non valida. Devi inserire 'pari' o 'dispari'.");
  }
}

