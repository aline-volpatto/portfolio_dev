import styles from './Titulo.module.css'


function Titulo() {
  return (
    <div className={styles.titulo}>
      <h1 className={styles.nome}>Aline Volpatto</h1>
      <p className={styles.tagline}>Desenvolvedora Full Stack Júnior · React · Node.js · PostgreSQL · Azure DevOps</p>
      <div className={styles.botoes}>
        <a className={styles.botao} href="#projetos">Ver projetos</a>
        <a className={`${styles.botao} ${styles.botaoContorno}`} href="#contato">Contato</a>
      </div>
    </div>
  )
}

export default Titulo   
