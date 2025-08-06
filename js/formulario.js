const formulario = document.querySelector('form')


function formularioEnviado(response){
    if(response.ok){
        formulario.innerHTML = "<p class='font-2-l'; style='grid-column:1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'> <span style='color: #317A00'>Mensangem enviada<s/pan>, em breve entraremos em contato respondemos em ate 24hs</p>"
    }else{
        formulario.innerHTML = "<p class='font-2-l'; style='grid-column:1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'> <span style='color: #E00000'>Erro no envio</span>, voce pode enviar diretamente para o nosso email em: contato@bikecraft.net</p>"
    }
}

function enviarForm(event){
    event.preventDefault()
    const botao = document.querySelector('form button')
    botao.disabled = true
    botao.innerText = "Enviando..."

    const data = new FormData(formulario)
    console.log(data.get('email'))

    fetch('./enviar.php', {
        method: 'POST',
        body:data,
    }).then(formularioEnviado)
}


formulario.addEventListener('submit', enviarForm)