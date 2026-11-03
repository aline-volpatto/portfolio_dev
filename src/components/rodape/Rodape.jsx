import styles from './Rodape.module.css'

function Rodape() {
  const ano = new Date().getFullYear()

  return (
    <footer className={styles.rodape}>
      <div className={styles.container}>
        <p className={styles.texto}>
          &copy; {ano} Aline Volpatto · Desenvolvido com React
        </p>
      </div>
    </footer>
  )
}

export default Rodape
