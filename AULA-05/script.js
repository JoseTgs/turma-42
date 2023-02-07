/* Podemos escrever funções dessa forma tbm
Arrow Function
const adicionarCarro = () => {
    
} */

const LISTA_CARROS = []

function perguntarValor() {
  let valorSalvoAntes = localStorage.getItem('valorHora')
  if(!valorSalvoAntes) {
  let valor = prompt('Qual o valor hora')
  localStorage.setItem('valorHora', valor)
  }
}

function limparCampos() {
    document.getElementById('placa').value = ''
    document.getElementById('modelo').value = ''
    document.getElementById('marca').value = ''
    document.getElementById('cor').value = ''
}


function adicionarCarro(){
  let placaInput = document.getElementById('placa').value
  let modeloInput = document.getElementById('modelo').value
  let marcaInput = document.getElementById('marca').value
  let corInput = document.getElementById('cor').value

  if(placaInput == "" || placaInput==null || placaInput == undefined) {
    alert('A placa é obrigatoria!!!!!!')
    return
  }

  const carro = {
    placa: placaInput,
    modelo: modeloInput,
    marca: marcaInput,
    cor: corInput,
    horaEntrada: new Date()
  }

  LISTA_CARROS.push(carro)
  
  limparCampos()

  montarLista()
}


function montarLista() {
    if(LISTA_CARROS.length > 0) {
        const elementoLista = document.getElementById('listaCarros')
        elementoLista.innerHTML = ''
        for (let index = 0; index < LISTA_CARROS.length; index++) {
            const carro = LISTA_CARROS[index];
            const item = `<div>Placa: ${carro.placa} - Cor: ${carro.cor} - Marca: ${carro.marca} - Modelo: ${carro.modelo} </div>`
            elementoLista.innerHTML += item 
        }
    }
}


function cobrarCarro() {
  // criar um input
  // ler valor do input
  let placaInput = document.getElementById('placaParaCobrar').value
  // se input estiver vazio -> soltar um alerta e encerrar
  if(!placaInput) {
    alert('Placa Obrigatória')
    return
  }
  // buscar no array/lista -> LISTA_CARROS
  for (let index = 0; index < LISTA_CARROS.length; index++) {
    const element = LISTA_CARROS[index];
    // verificar se o carro está na lista
    if(carro.placa == placaInput) {
      // se ele tiver -> efetuar cobrança
      let horaSaida = new Date ()
      let horasEmMiliSegundos = horaSaida - carro.horaEntrada

      //converter de milisegundo para segundo
      let horaEmSegundos = horasEmMiliSegundos

      //converter de segundo para minutos
      let horaEmMinutos = horaEmSegundos / 60

      //converter de minutos para horas
      let hora = hora 
    }
  } 
  // se não estiver -> soltar um alerta
  // se ele tiver -> efetuar cobrança
}