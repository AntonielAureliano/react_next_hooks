import retrato from '../assets/luffy.jpg';

import styles from './UseState_12.module.css';

function UseState_12a() {

    return (
        <>
        <div className={styles.bg}>

            <h2 className={styles.tittle}>Monkey D. Luffy</h2>
            <div className={styles.flex}>
                <p className={styles.paragrafo}>Monkey D. Luffy, mais conhecido como "Luffy Chapéu de Palha" ou simplesmente "Chapéu de Palha", 
                    é o fundador, capitão e combatente mais forte dos cada vez mais infames e 
                    poderosos Piratas do Chapéu de Palha. Ele busca destemidamente o 
                    lendário tesouro do falecido Gol D. Roger para se tornar o novo 
                    Rei dos Piratas, e realizar um sonho ainda não revelado 
                    (atualmente conhecido apenas por sua tripulação e amigos mais 
                    próximos). Ele acredita que ser o Rei dos Piratas 
                    significa ter a maior liberdade do mundo.</p>
                <img src={retrato} alt="photo of the anime character Luffy" />
            </div>
        </div>
        </>
    )
}

export default UseState_12a;