/*import { useState } from "react";

export default () => {
    
    let [valor, setValor] = useState(0);

    function aumentar() {
        setValor(v => v + 10);
    }

    function diminuir() {
        setValor(v => v - 10);
    }

    return(
        <>
            <h1>Valor: {valor}</h1>
            <button onClick={aumentar}>Aumentar valor</button>
            <button onClick={diminuir}>Diminir valor</button>
        </>
    )
}*/


import React from 'react';

import HookState01 from './components/UseState_01';

export default () => {
    return (
        <>
            <h1>REACT HOOKS</h1>
            <HookState01 />
        </>
    )
}