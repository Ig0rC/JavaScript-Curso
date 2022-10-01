(() => {
    const form = document.querySelector('.form');
    const peso = document.getElementById(`peso`);
    const altura = document.getElementById(`altura`);
    const response = document.querySelector('.resposta');

    function validationValues(peso , altura){
        if (!peso)      return invalidValues('Peso');
        if (!altura)    return invalidValues('Altura');    
        return true;
    };

    const invalidValues = (value) => {
        const p = createParagrafy();
        const validation = value === 'Peso' ? "Peso Inválido" : "Altura Inválida";
        response.innerHTML = ``;
        response.className = `invalido`;
        p.innerHTML = `${validation}`;
        response.appendChild(p);
    }

    function createParagrafy (){
        const p = document.createElement('p');
        return p;
    }

    const indicadorIMC = imc => { 
        const arr = [`Abaixo do peso`, `Peso Normal`, `Sobrepeso`, `Obesidade Grau 1`, `Obesidade Grau 2`, `Obesidade Grau 3`]
        if(imc < 18.5) {
            insertMsg(arr[0], imc);
        } else if (imc <= 24.9){
            insertMsg(arr[1], imc);
        } else if (imc <= 29.9){
            insertMsg(arr[2], imc);
        } else if (imc <= 34.9){
            insertMsg(arr[3], imc);
        } else if (imc <= 39.9){
            insertMsg(arr[4], imc);
        } else if (imc >= 40){
            insertMsg(arr[5], imc);
        }
    };

    const insertMsg = (msg, imc) => {
        response.className = `imc`;
        response.innerHTML = ``;
        const p = createParagrafy();
        p.innerHTML = `Seu IMC é ${msg} (${imc})`
        response.appendChild(p)
    }

    function calcIMC(peso, altura){
        const imc = peso / (altura ** altura);
        return indicadorIMC(imc);
    };

    function executar(evento){
        evento.preventDefault();

        const convertPeso = Number(peso.value);
        const convertAltura = Number(altura.value);

        const resultValidation = validationValues(convertPeso, convertAltura);

        if(resultValidation){
            return calcIMC(convertPeso, convertAltura);
        }
    };

    form.addEventListener('submit', executar);

})();
