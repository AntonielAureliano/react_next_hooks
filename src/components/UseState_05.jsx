import React from "react";
import { useState } from 'react';
import UseState_05a from "./UseState_05a";
import UseState_05b from "./UseState_05b";


export default () => {
    const [valor, setValor] = useState(0);
    
    function atualizaValor() {
            setValor(1000);
    }

    function zeraValor() {
        setValor(0);
    }

    return(
        <>
        <h3>Exercício - 03</h3>
        <p>Valor: <strong>{valor}</strong></p>
        <UseState_05a funcao={atualizaValor} />
        <UseState_05b funcao={zeraValor} />
        </>
    )
}