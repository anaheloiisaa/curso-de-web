let carro="volvo";
alert("alô mundo!")
let a=10;
let b=5;
//alert(a+b);

function clique botão(){
   alert("hello");
}

let cliques=0;
function ContarCliques(){
    cliques++;
    document.getElementById("resultado").innerHtml-"O contador está com <mark>"+cliques+"</mark> clique";
}
let nom  = window.prompt('Qual é o nome do aluno?')
let n1 = Number (window.prompt('Qual foi a primeira nota de ${nom}?'))
let n2 = Number (window prompt('Além de ${n1}, qual foi a outra nota'))
med = (n1 + n2)/2

let msg //criar uma variavel e deixa ela vazia
if (med >= 6) { // Se por acaso a medía for 6.0 ou mais...
    msg = 'meus parabéns!'}
else { // senão...
    msg = 'Estude um pouco mais!'
}
const form = document .getElementById("form");
const username = document .getElementById("username");
const email = document .getElementById("email");
const password = document .getElementById("password");
const passwordconfirmation = document .getElementById("password-confirmation");

from.addEventListener("submit", (e)=>(e.preventDefault; checkinputs();));
function checkinputs(){
    const usernamevalue =usarname.value;
    const emailvalue =email.value;
    const passwordvalue =password.value;
    const passwordconfirmationvalue =passwordconfirmation.value;
    if(usernamevalue===""){
        seterrorfor(username,"o nome de usuario é obrigatório");
    }else{
        setsucessfor(username);
    }
    if(emailvalue===""){
        seterrorfor(email,"o email é obrigatório");
    }else
        setsucessfor(email);
}
if(passawordvalue===""){
    seterrorfor(password,"a senha é obrigatória");
}else if (passawordvalue.length<7){
    seterrorfor(password,"a senha precisa ter no mínimo 7 caracteres");
}
else{
    setsucessfor(passwordconfirmation);
}
const formcontrols =form.queryselectorall(".form-control");
const formisvalid = [...formcontrols].every((formcontrols)=>{ 
    return formcontrols.classname==="form-control sucess";
});
if(formisvalid){
    console.log("o formularioesta 100% valido");
}
function seterrorfor(input,message){
    const formcontrol = input.parentelement;
    const small = formcontrol.queryselector("small");
    //adicionar a mensagem de erro
    small.innertext = menssage;
    //adicionar a classe de erro
    formcontrol.classname="form-control erro";
}
function setsucessfor(input){
    const formcontrol = input.parentelement;
    //adicionar a classe de sucesso
    formcontrol.classname= "form-control sucess";
}
function checkemail(email){
    retun /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+)?$/if.test(email;)
}

