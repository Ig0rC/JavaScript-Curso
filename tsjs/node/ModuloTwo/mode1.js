
// Function
// module.exports = function sum(numberOne, numberTwo){
//     return numberOne + numberTwo;
// }

//Arrow
// module.exports =  (numberOne, numberTwo) => numberOne + numberTwo;

//Variável
// const $name = 'Igor Cardoso'
// module.exports = $name;


//numeros e string
// module.exports = 'Igor Cardoso'; 
// module.exports = 22;


//class

module.exports = class Cachorro {
    constructor(name){
        this.name = name;
    }

    latir () {
        console.log(`${this.name}: auau`);
    }
}

