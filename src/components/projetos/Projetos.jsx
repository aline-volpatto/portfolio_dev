import Card from './card/Card'
import styles from './Projetos.module.css'

const projetos = [
  {
    id: 'skillmatch',
    titulo: 'SkillMatch',
    imagem: '',
    videoUrl: '',
    descricao:
      'Plataforma que conecta profissionais a oportunidades compatíveis com seu perfil técnico, usando correspondência de habilidades.',
  },
  {
    id: 'acrolog',
    titulo: 'Acrolog',
    imagem: '',
    videoUrl: '',
    descricao:
      'Sistema focado em gestão de acervos e logística, com interface clara para cadastro, busca e acompanhamento de itens.',
  },
  {
    id: 'checkout-express',
    titulo: 'Checkout express',
    imagem: '',
    videoUrl: '',
    descricao:
      'Fluxo de checkout simplificado para e-commerce, com etapas objetivas, validação de dados e finalização rápida do pedido.',
  },
  {
    id: 'lista-de-tarefas',
    titulo: 'Lista de tarefas',
    imagem: '',
    videoUrl: '',
    descricao:
      'Aplicação de lista de tarefas com criação, edição, conclusão e remoção de itens, persistindo os dados localmente.',
  },
  {
    id: 'nika-cafes',
    titulo: 'Nika Cafés',
    imagem: '',
    videoUrl: '',
    descricao:
      'Landing page para a cafeteria Nika Cafés, com apresentação dos produtos, da marca e canais de contato.',
  },
]

function Projetos() {
  return (
    <section id="projetos" className={styles.projetos}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>Projetos</h2>
        <p className={styles.subtitulo}>
          Alguns dos projetos que desenvolvi para praticar e consolidar
          minhas habilidades em Front-End.
        </p>

        <div className={styles.grid}>
          {projetos.map((projeto) => (
            <Card
              key={projeto.id}
              titulo={projeto.titulo}
              imagem={projeto.imagem}
              videoUrl={projeto.videoUrl}
              descricao={projeto.descricao}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projetos