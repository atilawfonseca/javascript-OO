/*

Isso pode ser feito usando a combinação Alt + Botão principal do mouse.

Isso vai criando um cursor por linha clicada, segurando o botão do mouse e arrastando para selecionar, permite selecionar várias linhas.

Ou então, é possível usar a combinação Ctrl + Shift + Alt + (↑ ou → ou ↓ ou ←).

Onde, as setas pra cima e pra baixo são usadas para subir/descer linhas e as setas pra esquerda e pra direita para selecionar parte do texto pro respectivo lado.

*/

import {Cliente} from "./Client.js";
import {ContaCorrente} from "./ContaCorrent.js";

const client1 = new Cliente();
client1.nome  = "Ricardo";

 const contaCorrenteRicardo = new ContaCorrente();
 contaCorrenteRicardo.depositar(300); 
 contaCorrenteRicardo.agencia = 1234;

 console.log(contaCorrenteRicardo);


