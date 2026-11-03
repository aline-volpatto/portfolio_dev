import styles from './Habilidades.module.css'

const grupos = [
  {
    titulo: 'Front-End',
    habilidades: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'CSS Modules', 'Bootstrap'],
  },
  {
    titulo: 'Ferramentas',
    habilidades: ['Git', 'GitHub', 'Ferramentas de IA', 'MCP', 'Netlify'],
  },
  {
    titulo: 'Em aprendizado',
    habilidades: ['Node.js', 'SQL', 'Python'],
  },
]

function Habilidades() {
  return (
    <section id="habilidades" className={styles.habilidades}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>Habilidades</h2>
        {grupos.map((grupo) => (
          <div className={`${styles.grupo} ${grupo.titulo === 'Em aprendizado' ? styles.aprendizado : ''}`} key={grupo.titulo}>
            <h3 className={styles.subtitulo}>{grupo.titulo}</h3>
            <div className={styles.grade}>
              {grupo.habilidades.map((habilidade) => (
                <div className={styles.item} key={habilidade}>
                  <span className={styles.icone} aria-hidden="true">&lt;/&gt;</span>
                  <span>{habilidade}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Habilidades
