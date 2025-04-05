import React from 'react';
import './UseState_04.css';

import UseState_04a from './UseState_04a';

export default () => {

    return (
        <>
        <h2>Exercício - 02</h2>
        <div className="layout">
            <UseState_04a n={1} />
            <UseState_04a n={5} />
            <UseState_04a n={10} />
        </div>
        </>
    )
}