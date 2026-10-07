import styles from "./Navegacao.module.css";

function Navegacao() {
  const fecharMenu = () => {
    const menu = document.getElementById("navbarNav");
    if (menu && menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  };

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
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#sobre" onClick={fecharMenu}>
                Sobre
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
        </div>
      </div>
    </nav>
  );
}

export default Navegacao;
