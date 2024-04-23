import styles from '../components/Portifolio.module.css'

export function Portifolio() {
    return (
        <>
            <section className={styles.team}>
                <div className={styles.title}>
                    <div className={styles.line}></div><h1>Nossa Historia</h1>
                </div>
                <div className={styles.content}>
                    <div className={styles.aboutTeam}>
                        <div className={styles.teamMoldura}>
                            <img src='' />
                        </div>
                        <div className={styles.textProfile}>
                            <p>Conheça <a target='_blank' href='https://www.instagram.com/jeffbrunotattoo/'>@jeffbrunotattoo</a>, a mente criativa por trás do Abstrato Tattoo Studio. Vindo diretamente do mundo do design, Jeff se tornou tatuador há 1 ano e 7 meses e desde então tem se especializado no estilo Blackwork.

                                Sua paixão pelo design e sua criatividade levaram Jeff a explorar novas técnicas e a experimentar diferentes estilos artísticos em suas obras. Seu talento lhe rendeu reconhecimento no cenário da tatuagem, já colecionando algumas premiações.

                                No Abstrato Tattoo Studio, Jeff oferece aos seus clientes não apenas um trabalho excepcionalmente detalhado e preciso, mas também uma experiência única e personalizada. Cada tatuagem é cuidadosamente planejada e executada de acordo com as preferências e desejos individuais do cliente, garantindo resultados impressionantes e duradouros.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}