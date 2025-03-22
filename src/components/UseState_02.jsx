import { useState } from "react";

export default () => {
    
    const [valor, setValor] = useState(0);

    function aumentar() {
        setValor(v => v + 1);
    }

    function diminuir() {
        setValor(v => v - 1);
    }

    function diminuir_valor(a) {
        setValor(v => v - a);
    }

    return (
        <>
            <h4>Valor: {valor}</h4>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
            <button onClick={() => diminuir_valor(10)}>Diminuir+</button>
        </>    
    )
}