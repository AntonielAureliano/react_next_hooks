import React, { useState } from 'react';

import styles from './UseState_11.module.css';

function UseState_11() {

    const [estilo, setEstilo] = useState(true);
    const classe = '';

    return (
        <>
            <h3>Exercício - 09</h3>
            
            <p className={`${styles.texto} ${estilo ? styles.classUm : styles.classDois}`}>Estilizando com CSS</p>
            <button onClick={() => {
                setEstilo(!estilo);               
            }}>Alterar estilo</button>
            
        </>
    )
}

export default UseState_11;