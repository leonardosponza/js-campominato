var array = [];
var random = Randomnum(1,100);

while(array.length < 16){

    var random = randomnum(1,100);

    if(!array.includes(random)){
        Array.push(random);
    }
}

function Randomnum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}