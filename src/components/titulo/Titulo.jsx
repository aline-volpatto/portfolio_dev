import styles from './Titulo.module.css'


function Titulo() {
  return (
    <div className={styles.titulo}>
      <h1 className={styles.nome}>WELCOME</h1>
      <p className={styles.tagline}>Me chamo Aline Volpatto, sou desenvolvedora Front-End em formação, com base em React e JavaScript.</p>
    </div>
  )
}

export default Titulo   
