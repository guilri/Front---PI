import { useState } from 'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import BarraInfo from '../../components/BarraInfo/BarraInfo'
import Favoritos from '../../components/Favoritos/Favoritos'
import Cardapio from '../../components/Cardapio/Cardapio'
import Footer from '../../components/Footer/Footer'
import './Inicio.css'

function Inicio() {
  const [itens, setItens] = useState(0)

  return (
    <div className="pagina-inicio">
      <Header itens={itens} />
      <Banner />
      <BarraInfo />

      <div className="inicio-conteudo">
        <Favoritos aoAdicionar={() => setItens(itens + 1)} />
        <Cardapio aoAdicionar={() => setItens(itens + 1)} />
      </div>

      <Footer />
    </div>
  )
}

export default Inicio
