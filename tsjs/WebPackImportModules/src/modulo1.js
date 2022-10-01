export const nome = 'Igor';
export const sobrenome = 'Cardoso';
export const idade = 30;


export function sum(x, y){
    return x + y;
};


export class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}