import ValidaCPF from './ValidaCPF';



export default class GeraCPF {
    constructor (cpf){
        this.cpf = cpf;
    }
    
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min ) + min));
    }

    formatado(cpf){
        return(
            cpf.slice(0,3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9,11)
        );
    }

    geraNovoCPF () {
        const semDigitoCPF = this.rand();
        const digitoOne = ValidaCPF.calc(semDigitoCPF);
        const digitoTwo = ValidaCPF.calc(semDigitoCPF + digitoOne);
        return this.formatado(semDigitoCPF + digitoOne + digitoTwo);
    }
}