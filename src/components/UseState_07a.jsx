import React from 'react';

export default ({funcao1, funcao2}) => {
    return(
        <>
            <button onClick={funcao1}>+</button>
            <button onClick={funcao2}>-</button>
        </>
    )
}