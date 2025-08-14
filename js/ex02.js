/*variáveis em js*/ 
var frase
frase = "Aqui temos uma string"
alert(frase)

/* Fazendo entrada de dados para uma variável */
var nome 
nome=prompt("Digite o seu nome: ") /*Com prompt o valor da variável é submetido ao que o usuário digitar */
alert("Bem vindo "+nome) /*Mostra mensagem na tela */

var idade
idade=prompt("Digite sua idade: ")
alert("Sua idade é "+idade)

/* Operações aritméticas com JS */
var n1, n2, r
n1=14
n2=20

r= n1+n2
alert("O resultado da soma entre "+n1+" e "+n2+" é "+r)

/*Considere que os valores n1 e n2 sejam digitados pelo usuário*/

var n1, n2, r
n1=parseInt(prompt("Digite o primeiro valor: "))
n2=parseInt(prompt("Digite o segundo valor: ")) /*Gera concatenação usado sem () */

r=n1+n2
alert("O resultado é: "+r)
