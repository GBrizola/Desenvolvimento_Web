const usuarioPermitido = "Newgate"
const senhaPermitida = "Newgate"

const tema = document.getElementById("divlogin")

const mudatema = document.querySelector('#BotaoNoturno')
const botao = document.querySelector('#enviar');

botao.addEventListener("click", (evento)=>{

    evento.preventDefault()

    const usuario = document.getElementById('usuario').value
    const senha = document.querySelector('#senha').value

    if(usuario === usuarioPermitido && senha === senhaPermitida){
        alert("Bem vindo")
        window.location.assign("redirect.html")
    }
    else if(usuario === usuarioPermitido && senha != senhaPermitida){
        alert("Senha incorreta")
        window.location.assign("aula.html")
    }
    else{
        alert("o user: Newgate ja ta on")
        window.location.assign("aula.html")
    }

})

mudatema.addEventListener("click", (evento)=>{
    tema.classList.remove('Login')
    tema.classList.add('LoginNoturno')

})
