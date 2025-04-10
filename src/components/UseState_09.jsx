import React, { useState } from 'react';

import './UseState_09.css'

export default function UseSate_09() {
    const [login, setLogin] = useState(false);
    const [btnText, setBtnText] = useState('Login');

    return(
        <>
            <h3>Conditional rendering - Fake Login</h3>
            <button className='btn' onClick={() => {
                setLogin(!login);
                setBtnText(login ? 'Login' : 'Logout');
            }}>{btnText}</button>

            {login && <p className='status'>Usuário Logado!</p>}
        </>
    )
}