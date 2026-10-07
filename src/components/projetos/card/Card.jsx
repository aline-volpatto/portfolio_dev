import { useState } from 'react'
import Modal from '../../modal/Modal'
import styles from './Card.module.css'

function Card({ titulo, imagem, videoUrl, descricao }) {
  const [modalAberto, setModalAberto] = useState(null)

  const abrir = (tipo) => setModalAberto(tipo)
  const fechar = () => setModalAberto(null)

  return (
    <article className={styles.card}>
      <div className={styles.imagemWrapper}>
        {imagem ? (
          <img src={imagem} alt={titulo} className={styles.imagem} />
        ) : (
          <div className={styles.placeholder}>
            <span>Adicione a capa do projeto</span>
          </div>
        )}
      </div>

      <h3 className={styles.titulo}>{titulo}</h3>

      <div className={styles.botoes}>
        <button
          type="button"
          className={styles.botao}
          onClick={() => abrir('video')}
        >
          Demonstração
        </button>
        <button
          type="button"
          className={`${styles.botao} ${styles.botaoSecundario}`}
          onClick={() => abrir('texto')}
        >
          Sobre
        </button>
      </div>

      <Modal
        aberto={modalAberto !== null}
        aoFechar={fechar}
        tipo={modalAberto}
        titulo={titulo}
        videoUrl={videoUrl}
        texto={descricao}
      />
    </article>
  )
}

export default Card