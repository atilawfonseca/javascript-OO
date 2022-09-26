/*

Isso pode ser feito usando a combinação Alt + Botão principal do mouse.

Isso vai criando um cursor por linha clicada, segurando o botão do mouse e arrastando para selecionar, permite selecionar várias linhas.

Ou então, é possível usar a combinação Ctrl + Shift + Alt + (↑ ou → ou ↓ ou ←).

Onde, as setas pra cima e pra baixo são usadas para subir/descer linhas e as setas pra esquerda e pra direita para selecionar parte do texto pro respectivo lado.

*/

import {Cliente} from  "./Cliente.js";
import {ContaCorrente} from "./ContaCorrent.js";

const client1 = new Cliente();
client1.nome  = "Ricardo";
client1.cpf = "00099988875";

const cliente2 = new Cliente();
cliente2.nome = "Ana";
cliente2.cpf = "12345678899"

 const contaCorrenteRicardo = new ContaCorrente();
 contaCorrenteRicardo.depositar(600); 
 contaCorrenteRicardo.agencia = 1234;
 contaCorrenteRicardo.cliente = client1;

 const contaCorrenteAna = new ContaCorrente();
 contaCorrenteAna.depositar(30);
 contaCorrenteAna.agencia = 11221; 
 contaCorrenteAna.cliente = cliente2;

contaCorrenteRicardo.transferir(150,contaCorrenteAna);

 console.log(contaCorrenteRicardo);
 console.log(contaCorrenteAna);


