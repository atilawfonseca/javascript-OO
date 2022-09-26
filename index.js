/*

Isso pode ser feito usando a combinação Alt + Botão principal do mouse.

Isso vai criando um cursor por linha clicada, segurando o botão do mouse e arrastando para selecionar, permite selecionar várias linhas.

Ou então, é possível usar a combinação Ctrl + Shift + Alt + (↑ ou → ou ↓ ou ←).

Onde, as setas pra cima e pra baixo são usadas para subir/descer linhas e as setas pra esquerda e pra direita para selecionar parte do texto pro respectivo lado.

*/

import {Cliente} from  "./Cliente.js";
import {ContaCorrente} from "./ContaCorrent.js";

const client1 = new Cliente("Ricardo", "00099988875");

const cliente2 = new Cliente("Ana", "12345678899");


console.log(client1);
console.log(cliente2);

const contaCorrenteRicardo = new ContaCorrente("1234",client1);
contaCorrenteRicardo.depositar(600); 

const contaCorrenteAna = new ContaCorrente("11221",cliente2);
contaCorrenteAna.depositar(30);

contaCorrenteRicardo.transferir(150,contaCorrenteAna);

console.log(contaCorrenteRicardo);
console.log(contaCorrenteAna);

console.log("Numero de contas correntes criadas: ", ContaCorrente.numerocc);



