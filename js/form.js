let botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function (evento){

    evento.preventDefault () //anula estrutura padrão, nesse caso em especifico anula a atualização

    let form = document.querySelector('#form-adiciona')  //primeiro é o evento que vai ser exectado, 2 é a funcao que vai escutar

    let paciente = obterValoresDoForm(form)

    let erros = validaPaciente(paciente)

    if(erros.length > 0){
        exibeMensagemDeErro(erros)
        return
    }

    adicionaPacienteNaTabela(paciente)

})

function validaPaciente(paciente){
    // vetor vazio
    let erros = []

    if(paciente.nome.length == 0){
        erros.push('O nome não pode estar em branco')
    }
    if(paciente.gordura.legth == 0){
        erros.push('O gordura não pode estar em branco')
    }
    if(paciente.peso.length == 0){
        erros.push('O peso não pode estar em branco')
    }
    if(paciente.altura.length == 0){
        erros.push('a altura não pode estar em branco')
    }
    if(!validaPeso(paciente.peso)){
        erros.push('Peso Invalido')
    }
    if(!validaAltura(paciente.altura)){
        erros.push('Altura invalida')
    }

    return erros

}
function exibeMensagemDeErro(erros){
    let ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''


    erros.forEach(function(erro) {
        let li= document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })
}

function adicionaPacienteNaTabela(paciente) {
    let pacienteTr = montarTr(paciente)
    let tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)
}

function montarTr(paciente) {
    let pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montarTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montarTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montarTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montarTd(paciente.imc, 'info-imc'))

    return pacienteTr
}

function montarTd(dado, classe) {
    //criando uma td 
    let td = document.createElement('td')
    //criando um elemento td
    td.textContent = dado
    //classlist define a classe do elemento HTML
    td.classList.add(classe)

    return td
}

function obterValoresDoForm(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

































