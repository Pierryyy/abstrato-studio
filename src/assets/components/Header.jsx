import styles from './Header.module.css'
import logo from '../imgs/logo.png';
import logoroxa from '../imgs/loggo_abstrato_roxa.png';
import logoTexto from '../imgs/logo_com_texto.png';
export function Header() {
    return(
    <>
        <header className={styles.header}>
        <div className={styles.logo}>
        <img src={logoroxa} />
        <strong>Abstrato Studio</strong>
        </div>
        <div className={styles.menus}>
           <a href=''>Inicio</a> 
           <a href=''>Sobre Nós</a> 
           <a href=''>Equipe</a> 
           <a href=''>História</a> 
        </div>
        <div className={styles.contato}>
            <button>Orçamento</button>
        </div>
        
        </header>
    </>
    )
}