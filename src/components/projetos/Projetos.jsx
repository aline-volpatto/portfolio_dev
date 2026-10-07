import Card from './card/Card'
import styles from './Projetos.module.css'

import skillmatchImagem from '../../assets/imagens/skillmatch.png'
import skillmatchVideo from '../../assets/videos/skillmatch.mp4'

import acroLogImagem from '../../assets/imagens/acroLog.png'
import acroLogVideo from '../../assets/videos/acroLog.mp4'

import closetExpressImagem from '../../assets/imagens/closetExpress.png'
import closetExpressVideo from '../../assets/videos/closetExpress.mp4'

import listaTarefasImagem from '../../assets/imagens/listaTarefas.png'
import listaTarefasVideo from '../../assets/videos/listaTarefas.mp4'

import nikaCafesImagem from '../../assets/imagens/nikaCafes.png'
import nikaCafesVideo from '../../assets/videos/nikaCafe.mp4'

const projetos = [
    {
        id: 'skillmatch',
        titulo: 'SkillMatch',
        imagem: skillmatchImagem,
        videoUrl: skillmatchVideo,
        descricao:
            'Plataforma que conecta profissionais a oportunidades compatíveis com seu perfil técnico, usando correspondência de habilidades.',
    },
    {
        id: 'acrolog',
        titulo: 'Acrolog',
        imagem: acroLogImagem,
        videoUrl: acroLogVideo,
        descricao:
            'Sistema focado em gestão de acervos e logística, com interface clara para cadastro, busca e acompanhamento de itens.',
    },
    {
        id: 'checkout-express',
        titulo: 'Checkout Express',
        imagem: closetExpressImagem,
        videoUrl: closetExpressVideo,
        descricao:
            'Fluxo de checkout simplificado para e-commerce, com etapas objetivas, validação de dados e finalização rápida do pedido.',
    },
    {
        id: 'lista-de-tarefas',
        titulo: 'Lista de tarefas',
        imagem: listaTarefasImagem,
        videoUrl: listaTarefasVideo,
        descricao:
            'Aplicação de lista de tarefas com criação, edição, conclusão e remoção de itens, persistindo os dados localmente.',
    },
    {
        id: 'nika-cafes',
        titulo: 'Nika Cafés',
        imagem: nikaCafesImagem,
        videoUrl: nikaCafesVideo,
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