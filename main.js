const age = parseInt( prompt("Inserire l'età del viaggiatore") );
const distance = parseInt( prompt("Inserire la distanza del viaggio in km") );
const element = document.getElementById("message");
const costoPerKm = 0.21;
let message = "";
let btn = document.querySelector("#bottoneGenera")
let risultato = document.getElementById("#risultato")
let valore = document.querySelector("#nomeCognome")
let nomeDellUtente = document.getElementById("nomeDellUtente")


if( Number.isFinite(age) && Number.isFinite(distance) ) {
    

    let costo = distance * costoPerKm;
    console.log("Costo iniziale: ", costo);


    if(age < 18) {
        costo = costo * 0.8;
        message = `Scontato del 20% `;


    } else if(age >= 65) {
        costo = costo * 0.6;      
        message = `Scontato del 40% `;
    }


    message += `Costo biglietto: ${costo.toFixed(2)} €`;

}
element.innerHTML = message;
btn.addEventListener("click", function() {
    //Questo codice verrà eseguito solo quando l'utente cliccherà sul button
    //E mostrerà il valore che abbiamo nell'input IN QUEL MOMENTO
    risultato = ("nome utente: " + valore.value);
    nomeDellUtente.innerHTML = risultato
});