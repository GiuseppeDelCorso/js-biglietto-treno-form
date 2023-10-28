let element = document.getElementById("message");
let btn = document.querySelector("#bottoneGenera")
let risultatoNC = document.getElementById("risultatoNC")
let risultatoKM = document.getElementById("risultatoKM")
let risultatoEta = document.getElementById("risultatoEta")
let valoreNC = document.querySelector("#nomeCognome")
let valoreKM = document.querySelector("#kmDaPercorrere")
let valoreEta = document.getElementById("Eta")
let nomeDellUtente = document.getElementById("nomeDellUtente")
let CP = document.querySelector("#codiceCP")
let numeroCP = 92134;
const costoPerKm = 0.21;
const age = document.querySelector("#Eta").value;
const distance = document.querySelector("#kmDaPercorrere").value;  
let costo = distance * costoPerKm;


btn.addEventListener("click", function() {
    //Questo codice verrà eseguito solo quando l'utente cliccherà sul button
    //E mostrerà il valore che abbiamo nell'input IN QUEL MOMENTO
    risultatoNC = valoreNC.value;
    nomeDellUtente.innerHTML = risultatoNC
    risultatoKM = valoreKM.value;
    costoBiglietto.innerHTML = risultatoKM
    risultatoEta = valoreEta.value;
    EtaViaggiatore.innerHTML = risultatoEta
    CP.innerHTML = numeroCP
    element.innerHTML = message;
    
    
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
    
});


