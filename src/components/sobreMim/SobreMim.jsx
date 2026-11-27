import styles from './SobreMim.module.css'

function SobreMim() {
  return (
    <section id="sobre" className={styles.sobre}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>Sobre mim</h2>
        <p className={styles.texto}>
          Sou Aline Volpatto, Desenvolvedora Full Stack com experiência como
          Desenvolvedora de Software em startup de IA jurídica,
          atuando com CI/CD no Azure DevOps, Microsoft Azure e testes de
          pagamentos com Stripe. Uso IA, MCP e agentes no dia a dia.
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
          Concluí a formação Desenvolvedor Web Front-End do SENAI/SC e estou na
          reta final do curso de Análise e Desenvolvimento de Sistemas, com
          conclusão prevista para 2027. Em 2026, concluí SCTEC Aperfeiçoar:
          Segurança da Informação, pelo SENAI/SC, e Introduction to
          Cybersecurity, pela Cisco Networking Academy.
        </p>
      </div>
    </section>
  )
}

export default SobreMim
