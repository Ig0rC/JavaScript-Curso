export default class ValidandoCPF {
    constructor(cpf){
        this.cpf = cpf.replace(/\D+/g, '');
    }
    verification(){
        if(!this.cpf) return false;
        if(this.cpf.length !== 11) return false;
        if(this.isSequencia()) return false;
    

        return this.Env();
    }

    isSequencia () {
        return this.cpf.charAt(0).repeat(11) === this.cpf;
    };

    noDigito () {
        const corteCPF = this.cpf.slice(0, -2);
        return corteCPF;
    }
    
    Env () {
        const semDigitos = this.noDigito();
        const verificadorDigitos = this.verificadorDigitos(semDigitos);
      
        return this.TrueOrFalse(verificadorDigitos);
    };

    verificadorDigitos (semDigitos) {
        const digitoOne = this.calc(semDigitos);
        const digitoTwo = this.calc(semDigitos + digitoOne);
        return semDigitos + digitoOne + digitoTwo;
    }

    static calc (CPF){
        const CPFarray = Array.from(CPF);
        let regressivo = CPFarray.length + 1;
        const result = CPFarray.reduce((ac, el) => {
            ac += Number(el) * regressivo
            regressivo--;     
            return ac;
        }, 0);
        const $digito = ValidandoCPF.maiorQueZero(result);
        return $digito;
    };

    static maiorQueZero (result) {
        const digito = 11 - ( result % 11 );
        if(digito > 9){
            return 0;
        }
        return digito;
    }

    TrueOrFalse (CPF) {
        if(this.cpf === CPF) return true
        return false
    }
}


console.log('Cheguei aqui')