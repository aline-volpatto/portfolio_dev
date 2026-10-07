import Titulo from '../titulo/Titulo'
import Navegacao from '../navegacao/Navegacao'
import HeaderBackground from '../headerBackground/HeaderBackground'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <Navegacao />
      <Titulo />
      <HeaderBackground />     
    </header>
  )
}

export default Header