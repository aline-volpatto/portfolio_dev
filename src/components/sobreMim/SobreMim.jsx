import styles from './SobreMim.module.css'

function SobreMim() {
  return (
    <section id="sobre" className={styles.sobre}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>Sobre mim</h2>
        <p className={styles.texto}>
          Sou Aline Volpatto, desenvolvedora Front-End com base em React e
          JavaScript. Concluí a formação Desenvolvedor Web Front-End do SENAI/SC
          e estou na reta final do curso de Análise e Desenvolvimento de
          Sistemas, com conclusão prevista para 2027.
        </p>
        <p className={styles.texto}>
          Antes da tecnologia, passei mais de 11 anos no setor aeronáutico,
          trabalhando com controle técnico de manutenção, auditoria de
          documentos e compliance. Foi nesse ambiente, onde atenção aos
          detalhes não é opcional, que aprendi a valorizar processos bem
          definidos, documentação clara e qualidade em cada entrega. Hoje levo
          isso para o código: gosto de criar interfaces claras, acessíveis e
          bem organizadas, pensando sempre em quem vai usar.
        </p>
        <p className={styles.texto}>
          No meu dia a dia de desenvolvimento, utilizo ferramentas de
          Inteligência Artificial, integrações via MCP (Model Context Protocol)
          e GitHub para versionamento e colaboração. Também estou ampliando
          minha base com estudos em back-end e IA, e sigo desenvolvendo projetos
          com React, consumo de APIs e boas práticas de UI/UX.
        </p>
      </div>
    </section>
  )
}

export default SobreMim
