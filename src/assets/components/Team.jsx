import styles from '../components/Team.module.css'
import Integrant1 from '../imgs/Jeff.jpg'
import Integrant2 from '../imgs/Vitoria.jpg'

export function Team() {
    return (
        <>
            <section className={styles.team}>
                <div className={styles.title}>
                    <div className={styles.line}></div><h1>Equipe</h1>
                </div>
                <div className={styles.content}>
                    <div className={styles.aboutTeam}>
                        <div className={styles.teamMoldura}>
                            <img src={Integrant1} />
                        </div>
                        <div className={styles.textProfile}>
                            <p>Conheça <a target='_blank' href='https://www.instagram.com/jeffbrunotattoo/'>@jeffbrunotattoo</a>, a mente criativa por trás do Abstrato Tattoo Studio. Vindo diretamente do mundo do design, Jeff se tornou tatuador há 1 ano e 7 meses e desde então tem se especializado no estilo Blackwork.

                                Sua paixão pelo design e sua criatividade levaram Jeff a explorar novas técnicas e a experimentar diferentes estilos artísticos em suas obras. Seu talento lhe rendeu reconhecimento no cenário da tatuagem, já colecionando algumas premiações.

                                No Abstrato Tattoo Studio, Jeff oferece aos seus clientes não apenas um trabalho excepcionalmente detalhado e preciso, mas também uma experiência única e personalizada. Cada tatuagem é cuidadosamente planejada e executada de acordo com as preferências e desejos individuais do cliente, garantindo resultados impressionantes e duradouros.</p>
                        </div>
                    </div>
                    <div className={styles.aboutTeam}>
                        <div className={styles.teamMoldura}>
                            <img src={Integrant2} />
                        </div>
                        <div className={styles.textProfile}>
                            <p>Conheça <a target='_blank' href='https://www.instagram.com/vbuenoink/'>@vbuenoink</a>, a mais nova tatuadora do nosso estúdio. Vinda de Caxias do Sul, ela possui uma história inspiradora, aprendeu a tatuar sozinha em casa e se dedicou durante um ano para aperfeiçoar suas técnicas. Com um talento inegável, Vitória possui uma paixão especial por tatuagens coloridas e está ansiosa para aprender e se especializar nesse estilo.

                                Aqui no Abstrato, Vitória encontrará um ambiente inspirador e uma equipe que valoriza a criatividade e o profissionalismo.

                                Ela está ansiosa para aprender com os artistas do estúdio e compartilhar suas próprias ideias inovadoras.</p>
                        </div>
                    </div>
                    <div className={styles.aboutTeam}>
                        <div className={styles.teamMoldura}>
                            <img src='https://media.istockphoto.com/id/1309023728/video/cinematic-intro-of-the-coming-soon-lettering-from-the-dark.jpg?s=640x640&k=20&c=6ywPVAi06d-ODrrEYERKmgC7CBbGeZeLaJXhwklfzDk=' />
                        </div>
                        <div className={styles.textProfile}>
                            <p></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}