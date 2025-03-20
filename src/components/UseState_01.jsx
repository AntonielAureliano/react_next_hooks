import { useState } from "react";
export default () => {
    
    let [valor, setValor] = useState(0);

    function aumentar() {
        setValor(v => v + 10);
    }

    function diminuir() {
        setValor(v => v - 10);
    }
    return (
        <>
            <h4>Valor: {valor}</h4>
            <button onClick={diminuir}>Diminuir</button>
            <button onClick={aumentar}>Aumentar</button>
        </>
    )
}