import { useEffect } from 'react'
import styles from './Modal.module.css'

function Modal({ aberto, aoFechar, tipo, titulo, videoUrl, texto }) {

    useEffect(() => {
        if (!aberto) return

        const aoPressionarTecla = (evento) => {
            if (evento.key === 'Escape') {
                aoFechar()
            }
        }

        document.addEventListener('keydown', aoPressionarTecla)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', aoPressionarTecla)
            document.body.style.overflow = ''
        }
    }, [aberto, aoFechar])

    if (!aberto) return null

    return (
        <div
            className={styles.overlay}
            onClick={aoFechar}
            role="dialog"
            aria-modal="true"
            aria-label={titulo}
        >
            <div
                className={styles.conteudo}
                onClick={(evento) => evento.stopPropagation()}
            >
                <button
                    type="button"
                    className={styles.botaoFechar}
                    onClick={aoFechar}
                    aria-label="Fechar"
                >
                    &times;
                </button>

                <h3 className={styles.titulo}>
                    {titulo}
                </h3>

                {tipo === 'video' && (
                    <div className={styles.videoWrapper}>
                        <video
                            className={styles.video}
                            controls
                            playsInline
                        >
                            <source
                                src={videoUrl}
                                type="video/mp4"
                            />
                            Seu navegador não suporta a reprodução de vídeos.
                        </video>
                    </div>
                )}

                {tipo === 'texto' && (
                    <p className={styles.texto}>
                        {texto}
                    </p>
                )}
            </div>
        </div>
    )
}

export default Modal