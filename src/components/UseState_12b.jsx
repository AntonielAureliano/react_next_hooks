import retrato from '../assets/sanji.jpg';

import styles from './UseState_12.module.css';

function UseState_12b() {

    return (
        <>
            <div className={styles.bg}>
                
                <h2 className={styles.tittle}>Sanji</h2>
                <div className={styles.flex}>
                    <p className={styles.paragrafo}>"Perna Preta" Sanji, nascido como Vinsmoke Sanji, e também é 
                        o cozinheiro dos Piratas do Chapéu de Palha, assim como um 
                        antigo chefe de cozinha do Baratie. Ele também é o terceiro 
                        filho e a quarta criança da Família Vinsmoke, tornando-o um 
                        príncipe do Reino Germa, até que ele oficialmente os 
                        renunciou duas vezes. Apesar de Sanji renunciar ao seu 
                        sobrenome Vinsmoke, o Governo Mundial o rotula como parte 
                        de seu nome em seu pôster de procurado.</p>
                    <img src={retrato} alt="photo of the anime character Sanji" />
                </div>
            </div>
        </>
    )
}

export default UseState_12b;