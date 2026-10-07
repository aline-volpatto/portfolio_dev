import styles from './SobreMim.module.css'

function SobreMim() {
  return (
    <section id="sobre" className={styles.sobre}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>Sobre mim</h2>
        <p className={styles.texto}>
          Me chamo Aline Volpatto e sou desenvolvedora Front-End em formação,
          com base em React e JavaScript. Gosto de transformar ideias em
          interfaces claras, funcionais e acessíveis, sempre buscando escrever
          um código limpo e bem organizado.
        </p>
        <p className={styles.texto}>
          Atualmente estudo e desenvolvo projetos pessoais para consolidar a
          base técnica em React, componentização, consumo de APIs e boas
          práticas de UI/UX. Estou em busca da minha primeira oportunidade
          profissional na área para continuar aprendendo e contribuir com
          times que valorizam qualidade e cuidado com o usuário.
        </p>
      </div>
    </section>
  )
}

export default SobreMim