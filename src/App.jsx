import './styles/variables.css'
import Header from './components/header/Header'
import SobreMim from './components/sobreMim/SobreMim'
import Habilidades from './components/habilidades/Habilidades'
import Projetos from './components/projetos/Projetos'
import Contato from './components/contato/Contato'
import Rodape from './components/rodape/Rodape'
function App() {
  return (
    <>
      <Header />
      <SobreMim />
      <Habilidades />
      <Projetos />
      <Contato />
      <Rodape />
    </>
  )
}

export default App
