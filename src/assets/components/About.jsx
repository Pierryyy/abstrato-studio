import styles from '../components/About.module.css'
import aboutImage from '../imgs/about2.jpg'

export function About() {
    return (
        <>
            <section className={styles.about}>
                <div className={styles.title}>
                    <div className={styles.line}></div><h1>Quem Somos<strong>?</strong></h1>
                </div>
                <div className={styles.content}>
                <div className={styles.text}>
                    <p>Seja bem-vindos ao nosso novo pedaço de paraíso para arte na pele. </p>

                    <p>Acredite em nós, nosso estúdio de tatuagens não é apenas mais um estabelecimento que abre as portas. É a realização de um sonho palpável, esculpido na dedicação e na paixão pelo que fazemos.
                    Cada linha, cada sombra, cada pigmento em suas peles será fruto de uma visão, cada detalhe meticulosamente inspirado nos seus desejos e expectativas. Sonhou com aquela tatuagem que vai além da estética, que carrega uma história, um sentimento, uma lembrança? Então, você chegou ao lugar certo.</p>

                        <p>Venha mergulhar no universo da tatuagem conosco, explorar um mundo onde a arte encontra a pele para deixar uma marca eterna.
                        Mais do que um estúdio de tatuagem, queremos criar um espaço onde as pessoas sintam-se ouvidas, respeitadas e acima de tudo, orgulhosas de suas escolhas e de suas marcas pessoais. Estamos aqui para transformar suas histórias em arte, respeitando seus medos, suas dúvidas e, acima de tudo, respeitando você.</p>

                       <p> Agora é a hora! Venha conhecer nosso estúdio e saiba que ao passar por estas portas, você estará tornando-se parte da nossa história.
                        Estamos prontos para deixar nossa marca no mundo da tatuagem. E você, está pronto para deixar sua marca conosco? Esperamos você!</p>
                </div>
                    <div className={styles.aboutMoldura}>
                        <img src={aboutImage} />
                    </div>
                </div>
            </section>
        </>
    )
}