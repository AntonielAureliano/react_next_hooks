import UseState_12a from './UseState_12a';
import UseState_12b from './UseState_12b';

import styles from './UseState_12.module.css';
import { useState } from 'react';

function UseState_12() {

    const [state, setState] = useState(true);

    return (
        <>
            {state ? <UseState_12a /> : <UseState_12b />}
            <button className={styles.btn} onClick={() => setState(!state)}>Próxima ➞</button>
        </>
    )
}

export default UseState_12;