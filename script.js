let family = {entrada: [2000,3000,450],
              saida: [1500,850]}

var entradaTotal = 0;
var saidaTotal = 0;

for (i=0; i<family.entrada.length; i++) {
 var entradaTotal = family.entrada[i] + entradaTotal;
}
for (i=0; i<family.saida.length; i++) {
 var saidaTotal = family.saida[i] + saidaTotal;
}
var receita = entradaTotal - saidaTotal

console.log ("O saldo disponível é de R$" + receita + "." )

 /* outra forma, mais simples, com o metodo sum 

var family = {receita: [2033,105,300,500],
              despesa: [203,83,248,1500]
              }

rendaOutraforma ()
function rendaOutraforma () {
  
  var ganhos = sum(family.receita)
  var gastos = sum(family.despesa)
  var receita = ganhos - gastos
  console.log (receita) 
}
*/

// fazendo agora como se o usuário fosse fornecer os valores (o programa faz apenas uma subtração, muito simples)

function saldo() {
  var receita = document.getElementById ("entrada").value
  var despesa = document.getElementById ("saida").value
  var saldo = Number(receita) - Number(despesa)
  
  var texto = "O saldo mensal é de " + saldo + " reais.";  
  var resultado = document.getElementById ("resultado")
  resultado.innerHTML = texto
 
}