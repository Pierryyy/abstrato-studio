import styles from './Home.module.css'

export function Home() {
    return (
        <>
            <section>
            <div className={styles.textoPrincipal}>
                <h1>Uma Forma<strong>.</strong></h1>
                <h1>Abstrata<strong>.</strong></h1>
                <h1>De tatuar<strong>.</strong></h1>
            </div>

            <div className={styles.textoSecundario}>
            <p>Descubra uma nova dimensão na arte da tatuagem. No Abstrato Studio, não apenas tatuamos, transformamos. Cada linha, cada sombra, é uma expressão única de sua individualidade, uma narrativa visual que transcende o convencional.</p>

            
            </div>
            </section>
        </>
    )
}