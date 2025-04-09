import React from 'react';
import { useState } from 'react';

import UseState_07a from './UseState_07a';

export default () => {
    const [valor,setValor] = useState([0,0,0]);

    function atualizaValor(indece, numero) {
        const tmp = [...valor];
        tmp[indece] = tmp[indece] + numero;

        setValor(tmp);
    }

    function aumentarValor1() {
        atualizaValor(0,1);
    }
    function diminuirValor1() {
        atualizaValor(0,-1);
    }
    function aumentarValor2() {
        atualizaValor(1,1);
    }
    function diminuirValor2() {
        atualizaValor(1,-1);
    }
    function aumentarValor3() {
        atualizaValor(2,1);
    }
    function diminuirValor3() {
        atualizaValor(2,-1);
    }

    return(
        <>
            <h3>Exercício - 05</h3>
            <p>Valor: <strong>{valor[0]}</strong></p>
            <UseState_07a funcao1={aumentarValor1} funcao2={diminuirValor1} />
            <p>Valor: <strong>{valor[1]}</strong></p>
            <UseState_07a funcao1={aumentarValor2} funcao2={diminuirValor2} />
            <p>Valor: <strong>{valor[2]}</strong></p>
            <UseState_07a funcao1={aumentarValor3} funcao2={diminuirValor3} />

            <p>Soma dos Valores: <strong>{valor[0]+valor[1]+valor[2]}</strong></p>
        </>
    )
}