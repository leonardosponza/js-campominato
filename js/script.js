// faccio 16 numeri che vanno da 1  a  100
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

var numeroutente = parseInt(prompt('inserisci numero'));

// if(array.includes(numeroutente)== true){

//    console.log('hai perso')

// }else{
//     console.log('hai vinto')
// }


// funzione per regolare che il numero sia compreso tra 1 e 100
function checkRange(min,max,valore){
    return valore >= min && valore <= max;
}

var Min = 1;
var Max = 100;
var Bombe = 16;

while(array.length < Max - Bombe && !fine){

}if()

