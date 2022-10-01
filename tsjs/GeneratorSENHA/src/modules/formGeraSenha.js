import geraSenha from './geradores.js';


const senhaGerada = document.querySelector('.geradorSenhas');
const qdCaracteres = document.querySelector('.qdCaracteres');

const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const checkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerarSenha')

export default () => {
    gerarSenha.addEventListener('click', () => {

       senhaGerada.innerHTML = gera();
    });
}

function gera(){
    const senha = geraSenha(
        qdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        checkNumeros.checked,
        chkSimbolos.checked
    );
        console.log(senha)
    return senha || 'Nada Selecionado';
}