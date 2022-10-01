import GeraCPF from './modules/GerarCPF';

import './assets/css/style.css';

(() => {
    const divCPF = document.querySelector('.geradorCPF');
    const autoCPF = new GeraCPF();
    divCPF.innerHTML =  autoCPF.geraNovoCPF();
})();