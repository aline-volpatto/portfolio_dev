import styles from './Contato.module.css'

function Contato() {
  return (
    <section id="contato" className={styles.contato}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>Contato</h2>
        <p className={styles.subtitulo}>
          Vamos conversar? Entre em contato por um dos canais abaixo.
        </p>

        <ul className={styles.lista}>
          <li className={styles.item}>
            <a
              className={styles.link}
               href="https://github.com/aline-volpatto"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
            >
              <svg
                className={styles.icone}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.69-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.15v3.18c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              <span className={styles.texto}>GitHub</span>
            </a>
          </li>

          <li className={styles.item}>
            <a
              className={styles.link}
               href="https://www.linkedin.com/in/aline-volpatto-95b991294"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
            >
              <svg
                className={styles.icone}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
              </svg>
              <span className={styles.texto}>LinkedIn</span>
            </a>
          </li>

          <li className={styles.item}>
            <a
              className={styles.link}
              href="mailto:acvolpatto@gmail.com"
              aria-label="Email"
            >
              <svg
                className={styles.icone}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5h16Zm0 12H4V10l8 5 8-5v10Z" />
              </svg>
              <span className={styles.texto}>acvolpatto@gmail.com</span>
            </a>
          </li>
        </ul>
        <a
          className={styles.curriculo}
          href="/curriculo-aline-volpatto.pdf"
          download="Aline-Volpatto-Curriculo.pdf"
          type="application/pdf"
        >
          Baixar currículo
        </a>
      </div>
    </section>
  )
}

export default Contato
