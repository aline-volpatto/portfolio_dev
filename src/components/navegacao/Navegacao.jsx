import { useEffect, useState } from 'react'
import styles from './Navegacao.module.css'

function Navegacao() {
  const [temaEscuro, setTemaEscuro] = useState(() => {
    try {
      const temaSalvo = localStorage.getItem('tema')
      if (temaSalvo) return temaSalvo === 'dark'
    } catch {
      // Usa a preferência do sistema quando o armazenamento não está disponível.
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const tema = temaEscuro ? 'dark' : 'light'
    document.documentElement.dataset.theme = tema

    try {
      localStorage.setItem('tema', tema)
    } catch {
      // A alternância continua funcionando mesmo sem acesso ao armazenamento.
    }
  }, [temaEscuro])

  const fecharMenu = () => {
    const menu = document.getElementById("navbarNav");
    if (menu && menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  }

  return (
    <nav className={`${styles.nav} navbar navbar-expand-lg`}>
      <div className="container-fluid">


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Abrir menu"
        >
          <span className={`navbar-toggler-icon ${styles.menuIcon}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#sobre" onClick={fecharMenu}>
                Sobre
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#habilidades" onClick={fecharMenu}>
                Habilidades
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projetos" onClick={fecharMenu}>
                Projetos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contato" onClick={fecharMenu}>
                Contato
              </a>
            </li>
          </ul>
          <button
            type="button"
            className={styles.tema}
            onClick={() => setTemaEscuro((temaAtual) => !temaAtual)}
            aria-label={temaEscuro ? 'Ativar tema claro' : 'Ativar tema escuro'}
            title={temaEscuro ? 'Ativar tema claro' : 'Ativar tema escuro'}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {temaEscuro ? <path d="M21 15.2A8.5 8.5 0 0 1 8.8 3a8.5 8.5 0 1 0 12.2 12.2Z" fill="currentColor" /> : <path d="M12 3V1m0 22v-2m9-9h2M1 12h2m15.36-6.36 1.42-1.42M4.22 19.78l1.42-1.42m0-12.72L4.22 4.22m15.56 15.56-1.42-1.42M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navegacao;
