import React from "react";
import { useState } from "react";

function UseState_08() {
    const tmp = {
        name: '',
        surname: '',
        city: '',
        email: ''
    }

    const [client, setClient] = useState(tmp);

    return(
        <>
        <h3>Exercício - 06</h3>
        <p>Nome: {client.name}</p>
        <button onClick={()=> {
            const c = {...client};
            c.name = 'Antoniel';
            setClient(c); 
            }}>Alterar</button>
        <p>Sobrenome: {client.surname}</p>
        <button onClick={()=>{
             const c = {...client}
             c.surname = 'Aureliano';
             setClient(c);
             }}>Alterar</button>
        <p>Cidade: {client.city}</p>
        <button onClick={()=>{
            const c = {...client};
            c.city = 'Colinas-TO';
            setClient(c);
            }}>Alterar</button>
        <p>Email: {client.email}</p>
        <button onClick={()=>{
            const c = {...client}
            c.email = 'antoniel@email.com';
            setClient(c);
            }}>Alterar</button>
            <hr />
        <button onClick={()=>{
            const c = {...client}
            c.name = '';
            c.surname = '';
            c.city = '';
            c.email = '';
            setClient(c);

        }}>Limpar</button>
        </>
    )
}

export default UseState_08;

