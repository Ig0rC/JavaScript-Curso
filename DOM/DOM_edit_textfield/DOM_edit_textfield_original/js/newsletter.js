const txtEmail = document.getElementById("txtEmail");



function editarEmail(){
    txtEmail.disabled = false; // habilitar
    txtEmail.focus(); //foca o campo
}

function disableEmail(){
    txtEmail.disabled = true; // desabilitar
}


