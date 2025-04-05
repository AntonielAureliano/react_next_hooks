import { useState } from "react";
import './UseState_04.css';

export default ({n}) => {

    const [valor, setValor] = useState(0);

    function aumentar() {
        setValor(v => v + n);
    }

    function diminuir() {
        setValor(v => v - n);
    }

    return (
        <>
            <hr />
            <button onClick={aumentar}>+</button>
            <p> <strong>{valor}</strong> </p>
            <button onClick={diminuir}>-</button>
            <hr />
        </>
    )
}