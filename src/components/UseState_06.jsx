import React from 'react';
import { useState } from 'react';

import UseState_06a from './UseState_06a';

export default () => {
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);

     function aumentarValor1() {
         setValor1(v => v + 5);
     }

     function diminuirValor1() {
         setValor1(v => v - 5);
     }
     
     function aumentarValor2() {
         setValor2(v => v + 10);
     }

     function diminuirValor2() {
         setValor2(v => v - 10);
     }

    return(
        <>
            <h3>Exercício - 04</h3>
            <p>Valor 1: <strong>{valor1}</strong></p>
            <UseState_06a funcao1={aumentarValor1} funcao2={diminuirValor1} />
            <p>Valor 2: <strong>{valor2}</strong></p>
            <UseState_06a funcao1={aumentarValor2} funcao2={diminuirValor2} />
            <h4>Total: {valor1 + valor2}</h4>
        </>
    )
}