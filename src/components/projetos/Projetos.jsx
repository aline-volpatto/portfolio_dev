import Card from './card/Card'
import styles from './Projetos.module.css'

import skillmatchImagem from '../../assets/imagens/skillmatch.png'
import skillmatchVideo from '../../assets/videos/skillmatch.mp4'

import acroLogImagem from '../../assets/imagens/acrolog.png'
import acroLogVideo from '../../assets/videos/acrolog.mp4'

import closetExpressImagem from '../../assets/imagens/closetexpress.png'
import closetExpressVideo from '../../assets/videos/closetexpress.mp4'

import listaTarefasImagem from '../../assets/imagens/listatarefas.png'
import listaTarefasVideo from '../../assets/videos/listatarefas.mp4'

import nikaCafesImagem from '../../assets/imagens/nikacafes.png'
import nikaCafesVideo from '../../assets/videos/nikacafe.mp4'

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
            'Sistema de gestão de uma escola de acrobacia aérea. Inclui cadastro de alunos, gerenciamento de horas de voos, avaliação de voos, briefing e debriefing. Por ser uma aplicação totalmente front-end, os dados persistem com uso de localStorage e são extraídos manualmente para uma pasta local. Sistema em aperfeiçoamento.',
    },
    {
        id: 'checkout-express',
        titulo: 'Closet Express',
        imagem: closetExpressImagem,
        videoUrl: closetExpressVideo,
        descricao:
            'Simulação de um checkout de uma loja virtual, com etapas objetivas, validação de dados e finalização ráida do pedido',
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
