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

import turegStoreVideo from '../../assets/videos/tuaregstore.mp4'

const projetos = [
    {
        id: 'skillmatch',
        titulo: 'SkillMatch',
        imagem: skillmatchImagem,
        videoUrl: skillmatchVideo,
        deployUrl: 'https://aline-volpatto.github.io/skillmatch-web/',
        repoUrl: 'https://github.com/aline-volpatto/skillmatch-web',
        tecnologias: ['React', 'JavaScript', 'CSS'],
        descricao:
            'Plataforma que conecta profissionais a oportunidades compatíveis com seu perfil técnico, usando correspondência de habilidades.',
    },
    {
        id: 'acrolog',
        titulo: 'Acrolog',
        imagem: acroLogImagem,
        videoUrl: acroLogVideo,
        deployUrl: '',
        repoUrl: 'https://github.com/aline-volpatto/tuaregllog',
        tecnologias: ['JavaScript', 'localStorage', 'CSS'],
        descricao:
            'Sistema de gestão de uma escola de acrobacia aérea. Inclui cadastro de alunos, gerenciamento de horas de voos, avaliação de voos, briefing e debriefing. Por ser uma aplicação totalmente front-end, os dados persistem com uso de localStorage e são extraídos manualmente para uma pasta local. Sistema em aperfeiçoamento.',
    },
    {
        id: 'checkout-express',
        titulo: 'Closet Express',
        imagem: closetExpressImagem,
        videoUrl: closetExpressVideo,
        deployUrl: '',
        repoUrl: '',
        tecnologias: ['HTML', 'JavaScript', 'CSS'],
        descricao:
            'Simulação de um checkout de uma loja virtual, com etapas objetivas, validação de dados e finalização rápida do pedido.',
    },
    {
        id: 'lista-de-tarefas',
        titulo: 'Lista de tarefas',
        imagem: listaTarefasImagem,
        videoUrl: listaTarefasVideo,
        deployUrl: 'https://aline-volpatto.github.io/listaTarefas/',
        repoUrl: 'https://github.com/aline-volpatto/listaTarefas',
        tecnologias: ['HTML', 'JavaScript', 'CSS'],
        descricao:
            'Aplicação de lista de tarefas com criação, edição, conclusão e remoção de itens, persistindo os dados localmente.',
    },
    {
        id: 'nika-cafes',
        titulo: 'Nika Cafés',
        imagem: nikaCafesImagem,
        videoUrl: nikaCafesVideo,
        deployUrl: 'https://aline-volpatto.github.io/nika-cafe-site/',
        repoUrl: 'https://github.com/aline-volpatto/nika-cafe-site',
        tecnologias: ['HTML', 'CSS', 'JavaScript'],
        descricao:
            'Landing page para a cafeteria Nika Cafés, com apresentação dos produtos, da marca e canais de contato.',
    },
    {
        id: 'tureg-store',
        titulo: 'Tureg Store',
        videoUrl: turegStoreVideo,
        deployUrl: '',
        repoUrl: '',
        tecnologias: ['React', 'JavaScript', 'CSS'],
        descricao:
            'Simulação de uma loja virtual desenvolvida com React durante o curso do SCTEC.',
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
              deployUrl={projeto.deployUrl}
              repoUrl={projeto.repoUrl}
              tecnologias={projeto.tecnologias}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projetos
