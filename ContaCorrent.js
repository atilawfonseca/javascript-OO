import { Cliente } from "./Cliente.js";

export class ContaCorrente {    
    static numerocc = 0; 
    agencia; 

    /* separação das variaveis privadas*/
    _cliente;
    _saldo = 0; 

    constructor(agencia, novocliente) {
        this.agencia = agencia; 
        //quando define dessa forma ao atribuir o novo cliente ele já faz a validação usando o método set. 
        this.cliente = novocliente;
        ContaCorrente.numerocc++;
    }
    

    //tu protege a variavel de receber valores aleatórios e define que ela recebe só do tipo Cliente.
    set cliente(novocliente) {
        if(novocliente instanceof Cliente) {
            this._cliente = novocliente; 
        }
    }
    get cliente() {
        return this._cliente; 
    }

   

    get saldo() {
        return this._saldo; 
    }

   


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