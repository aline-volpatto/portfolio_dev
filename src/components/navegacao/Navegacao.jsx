import styles from './Navegacao.module.css'

function Navegacao(){

    return(
        <nav className={styles.nav}>
            <ul>
                <li><a className={styles.link} href="#sobre">Sobre</a></li>
                <li><a className={styles.link} href="#habilidades">Habilidades</a></li>
                <li><a className={styles.link} href="#projetos">Projetos</a></li>
                <li><a className={styles.link} href="#contato">Contato</a></li>
            </ul>
        </nav>
    )
}

export default Navegacao