const $name = 'Igor';
const $surname = 'Cardoso';


const falaNome = () => `${$name} ${$surname}`


module.exports.name = $name;
exports.surname = $surname;
module.exports.falaNome = falaNome


class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

module.exports = {
    Pessoa
}