import { useEffect, useState } from 'react'
import api from '../../services/api'
import './Cardapio.css'

function Cardapio({ aoAdicionar }) {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    getProdutos()
  }, [])

  async function getProdutos() {
    const produtosFromApi = await api.get('/produtos')
    setProdutos(produtosFromApi.data)
  }

  return (
    <section id="cardapio" className="cardapio">
      <h3>Qual vai ser o seu pedido?</h3>

      <div className="produtos-grid">
        {produtos.map((produto) => (
          <div key={produto._id} className="fav-card">
            <img
              src={produto.imagem || 'https://unsplash.com'}
              alt={produto.nome}
            />
            <div className="fav-texto">
              <small>{produto.categoria?.nome}</small>
              <h4>{produto.nome}</h4>
              <p>{produto.descricao}</p>
              <div className="fav-preco">
                <strong>R$ {produto.preco}</strong>
                <button type="button" onClick={aoAdicionar}>+ Adicionar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Cardapio
