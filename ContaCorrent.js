export class ContaCorrente {
    agencia; 
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
}