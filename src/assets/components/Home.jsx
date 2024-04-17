import styles from './Home.module.css'
import dragon from '../imgs/dragon.jpg';
import globo from '../imgs/globo.png'
import inker from '../imgs/inker.png'
import details from '../imgs/details.png'


export function Home() {
    return (
        <>
            <section className={styles.home}>
            <div className={styles.textoPrincipal}>
                <h1>Uma Forma<strong>.</strong></h1>
                <h1>Abstrata<strong>.</strong></h1>
                <h1>De tatuar<strong>.</strong></h1>
            </div>

            <div>
                {/* <img src={dragon}/> */}
            </div>

            <div className={styles.textoSecundario}>
            <img className={styles.inker} width={100} src={inker}/>
            <p>Descubra uma nova dimensão na arte da tatuagem. No Abstrato Studio, não apenas tatuamos, transformamos. Cada linha, cada sombra, é uma expressão única de sua individualidade, uma narrativa visual que transcende o convencional.</p>
            <img className={styles.details} width={100} src={details}/>
            <img className={styles.globo} width={200} src={globo}/>
            </div>
            </section>
        </>
    )
}