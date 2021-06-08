// faccio 16 numeri che vanno da 1  a  100 per le bombe!!!
var array = [];

while(array.length < 16){

    var random = randomnum(1,100);

    if(!array.includes(random)){
        array.push(random);
    }
}

function randomnum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(array);

// chiedo un numero da 1  a 100 e controllo che non sia ripetuto


// if(array.includes(numeroutente)== true){

//    console.log('hai perso')

// }else{
//     console.log('hai vinto')
// }


// funzione per regolare che il numero sia compreso tra 1 e 100
function checkRange(min,max,valore){
    return valore >= min && valore <= max;
}
var arrayutente = []
var Min = 1;
var Max = 100;
var Bombe = 16;
var fine = false

while(arrayutente.length < Max - Bombe && !fine){
var numeroutente = parseInt(prompt('inserisci numero'));
if (!arrayutente.includes(numeroutente) && !arrayutente.includes(numeroutente) && !isNaN(numeroutente) && checkRange(Min,Max,numeroutente)){
    arrayutente.push(numeroutente);
}
else if (arrayutente.includes(numeroutente)){
    alert('il numero scelto è già stato usato in precedenza')
}
else if (isNaN(numeroutente)){
    alert('il dato inserito non è un numero')
}
else if (!checkRange(Min,Max,numeroutente)){
    alert('il numero inserito non è tra i limiti imposti')
}
else{
    alert('hai perso')
    fine = true
}
}

console.log(arrayutente);

console.log('hai inserito'+numeroutente+'numeri');
