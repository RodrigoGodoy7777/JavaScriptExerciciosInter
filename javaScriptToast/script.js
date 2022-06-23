let toast = document.querySelector('.toast')
let tarefaCadastrada = document.querySelector('#tarefaCadastrada')
let dado = document.querySelector('#nome')


tarefaCadastrada.onclick = function (){
    toast.classList.add ('visible')
    toast.innerHTML = `Seu cadastro foi realizado com sucesso!`
    
    setTimeout(esconder, 5000)
}

function esconder(){
    toast.classList.remove('visible')
}