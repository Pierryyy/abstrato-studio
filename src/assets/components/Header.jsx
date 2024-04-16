import styles from './Header.module.css'
import logo from '../imgs/logo.png';
export function Header() {
    return(
    <>
        <header className={styles.header}>
        <div className={styles.logo}>
        <img src={logo} />
        <strong >Abstrato Studio</strong>
        </div>
        <div className={styles.menus}>
           <a href=''>Home</a> 
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