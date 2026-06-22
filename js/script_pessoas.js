//IMPORTANDO ARQUIVOD
 import { calcDesconto } from './script_calculos'

//PEGANDO ELEMENTOS DO DOM
const formPessoa = document.querySelector('#form-pessoa')
const divLista = document.querySelector('#div-lista-pessoas')


//CRIANDO ARRAY pessoas
const pessoas = []

//CAPTURAR O EVENTO submit DO FORMULÁRIO
formPessoa.addEventListener('submit', (evt) => {
    //INTERROMPER O EFEITO PADRÃO DE SUBMETER OS DADOS DO FORMULÁRIO
    evt.preventDefault()

    //CRIAR UM OBJETO FORMULÁRIO
    const dadosFormPessoa = new FormData(formPessoa)

    //CRIAR UM OBJETO LITERAL
    const pessoa = {
        nome: dadosFormPessoa.get('nome'),
       idade: dadosFormPessoa.get('idade'),
       renda: dadosFormPessoa.get('renda')
    }

    //CHAMANDO A FUNÇÃO addPessoa E A PASSANDO O OBJETO LITERAL pessoa
    addPessoa(pessoa)

    //LIMPAR O FORMULÁRIO
    formPessoa.reset()

})

//CRIANDO A FUNÇÃO ADICIONAR PESSOA 
const addPessoa = (objPessoa) => {
    //ADICIONANDO O OBJETO LITERAL NO ARRAY PESSOAS
    pessoas.push(objPessoa)

    //APÓS ADICIONAR O OBJETO LITERAL NO ARRAY CHAMA A FUNÇÃO listPessoas
    
    listPessoas()

}

//FUNÇÃO PARA LISTAR PESSOAS DO ARRAY
const listPessoas = () => {
    //PERCORRER O ARRAY pessoas COM O foreach
    pessoas.forEach((elem, i) => {
        divLista.innerHTML += `${i} - ${elem.nome} - ${elem.idade}, ${elem.renda} <br>`
   //PERCORRER O ARRAY pessoas COM O foreach
     pessoas.forEach((elem,i) => {
        divLista.innerHTML += `${i + 1} - ${elem.nome} - ${elem.idade}idade, ${parseFloat(elem.renda).toFixed(2).replace('.',',')} - ${calcDesconto(elem)}<br>`
     })

    })
}



