const QTD_PARA_UM_ADULTO = 400
const QTD_PARA_UMA_CRIANCA = 150
const QTD_BEBIDA_PARA_UM_ADULTO = 5 

function calcular() {
//1 LEr nº de Adultos
var numeroAdultos = document.getElementById("numeroAdultos").value

//2 Ler nº de crianças
var numeroCriancas = document.getElementById("numeroCriancas").value

//3 Calcular qnt de carne p/ adultos
var qtdCarneParaAdultos = QTD_PARA_UM_ADULTO * parseInt(numeroAdultos)

//4 Calcular qnt de carne p/ crianças
var qtdCarneParaCrianca = qtdCarneParaCrianca * parseInt(numeroCriancas)

//5 Calcular qnt de bebida p/ adultos
var qtdBebidaParaAdulto = QTD_BEBIDA_PARA_UM_ADULTO * parseInt (numeroAdultos)

//mostrar resultados

document.getElementById("resultado").innerHTML = `
<ul>
<li>QTD Carne Adultos: ${qtdCarneParaAdultos}</li>
<li>QTD Carne Crincas: ${qtdCarneParaCrianca}</li>
<li>QTD Bebida p/ Adultos: ${qtdBebidaParaAdulto}</li>
</ul>

}