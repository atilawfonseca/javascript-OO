import { Cliente } from "./Cliente.js";

export class ContaCorrente {    
    agencia; 
    _cliente;
    
    //tu protege a variavel de receber valores aleatórios. 
    set cliente(novoCliente) {
        if(novoCliente instanceof Cliente) {
            this._cliente = novoCliente; 
        }
    }

    /* separação das variaveis privadas*/
    _saldo = 0; 

    depositar(valor) {
        if(valor<=0) return; 
        this._saldo += valor; 
    }
    sacar(valor) {
        if(valor<=0) return; 
        if(this._saldo<valor) return;

        this._saldo -= valor; 
      
        
    }
    transferir(valor, conta) {
        this.sacar(valor);
        conta.depositar(valor);
    }
}