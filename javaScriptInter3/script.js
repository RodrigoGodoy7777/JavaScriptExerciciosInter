let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function(evento){
    evento.preventDefault()

    let temErro = false

    let inputNome = document.forms['formCadastro']['nome']

    if(!inputNome.value){
        let temErro = true
        inputNome.classList.add('inputError')

        let span = inputNome.nextSibling.nextSibling
        span.innerText = 'Digite seu nome'
    } else if (inputNome.value){
        inputNome.classList.remove('inputError')

        let span = inputNome.nextSibling.nextSibling
        span.innerText = ''

        
    }

    let inputMail = document.forms['formCadastro']['email']

    if(!inputMail.value){
        let temErro = true
        inputMail.classList.add('inputError')

        let span = inputMail.nextSibling.nextSibling
        span.innerText = 'Digite seu email'
    } else if(inputMail.value){
        inputMail.classList.remove('inputError')

        let span = inputMail.nextSibling.nextSibling
        span.innerText = ''
    }

    let inputSelect = document.forms['formCadastro']['cidade']

    if(!inputSelect.value){
        let temErro = true
        inputSelect.classList.add('inputError')

        let span = inputSelect.nextSibling.nextSibling
        span.innerText = 'Selecione sua cidade'
    } else if(inputSelect.value){
        inputSelect.classList.remove('inputError')

        let span = inputSelect.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!temErro){
        formulario.submit()
    }

}