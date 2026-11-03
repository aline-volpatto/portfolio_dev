import { useCallback, useRef, useState } from 'react'
import Modal from '../../modal/Modal'
import styles from './Card.module.css'

function Card({ titulo, imagem, videoUrl, descricao, deployUrl, repoUrl, tecnologias }) {
    const [modalAberto, setModalAberto] = useState(null)
    const botaoQueAbriu = useRef(null)

    const abrir = useCallback((tipo, evento) => {
        botaoQueAbriu.current = evento.currentTarget
        setModalAberto(tipo)
    }, [])

    const fechar = useCallback(() => {
        setModalAberto(null)
    }, [])

    return (
        <article className={styles.card}>
            <div className={styles.imagemWrapper}>
                {imagem ? (
                    <img
                        src={imagem}
                        alt={`Tela inicial do projeto ${titulo}`}
                        className={styles.imagem}
                    />
                ) : (
                    <div className={styles.placeholder}>
                        <span>Adicione a capa do projeto</span>
                    </div>
                )}
            </div>

            <h3 className={styles.titulo}>
                {titulo}
            </h3>

            <div className={styles.tecnologias} aria-label={`Tecnologias usadas em ${titulo}`}>
                {tecnologias.map((tecnologia) => (
                    <span className={styles.tag} key={tecnologia}>{tecnologia}</span>
                ))}
            </div>

            {(deployUrl || repoUrl) && (
                <div className={styles.links}>
                    {deployUrl && (
                        <a className={styles.link} href={deployUrl} target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3ZM5 5h5v2H7v10h10v-3h2v5H5V5Z" fill="currentColor" /></svg>
                            Ver site
                        </a>
                    )}
                    {repoUrl && (
                        <a className={styles.link} href={repoUrl} target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.69-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.15v3.18c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" fill="currentColor" /></svg>
                            Código
                        </a>
                    )}
                </div>
            )}

            <div className={styles.botoes}>
                <button
                    type="button"
                    className={styles.botao}
                    onClick={(evento) => abrir('video', evento)}
                >
                    Demonstração
                </button>

                <button
                    type="button"
                    className={`${styles.botao} ${styles.botaoSecundario}`}
                    onClick={(evento) => abrir('texto', evento)}
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
                botaoQueAbriu={botaoQueAbriu}
            />
        </article>
    )
}

export default Card
