let menuMobile = document.querySelector ('.menuMobile')
let botaoMenu = document.querySelector('.botaoMenu')


let aberto = false

function abrirOuFecharMenu (){
    if(aberto === true){
        aberto = false
        menuMobile.classList.remove('abrir')
        botaoMenu.innerHTML = 'Abrir'
    }else if(aberto === false){
        aberto = true
        menuMobile.classList.add ('abrir')
        botaoMenu.innerHTML = 'Fechar'
    }
}

