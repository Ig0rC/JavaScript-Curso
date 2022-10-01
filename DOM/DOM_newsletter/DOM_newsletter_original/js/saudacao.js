const txtEmail = document.getElementById("txtEmail");
const msgFeedBack = document.getElementById("newsletterFeedback");


function cadastrarEmail(){
    const email = txtEmail.value;
    msgFeedBack.innerHTML = 
        `O e-mail ${email} foi cadastrado com sucesso`
}
