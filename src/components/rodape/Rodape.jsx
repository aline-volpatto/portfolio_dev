import styles from './Rodape.module.css'

function Rodape() {
  const ano = new Date().getFullYear()

  return (
    <footer className={styles.rodape}>
      <div className={styles.container}>
        <p className={styles.texto}>
          &copy; {ano} Aline Volpatto. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Rodape