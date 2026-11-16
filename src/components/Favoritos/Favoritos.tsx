import './Favoritos.css'

const listaFavoritos = [
  { id: 1, tag: 'O queridinho do bairro', nome: 'Pastel de carne', desc: 'Carne bem temperada e recheio generoso.', preco: 'R$ 14,00', img: 'https://unsplash.com' },
  { id: 2, tag: 'Clássico de verdade', nome: 'Pastel de queijo', desc: 'Muçarela derretida por dentro.', preco: 'R$ 13,00', img: 'https://unsplash.com' },
  { id: 3, tag: 'A dupla perfeita', nome: 'Caldo de cana 400 ml', desc: 'Moído na hora e bem geladinho.', preco: 'R$ 10,00', img: 'https://unsplash.com' },
]

function Favoritos({ aoAdicionar }) {
  return (
    <aside className="favoritos">
      <h3>Os favoritos da casa</h3>

      {listaFavoritos.map((item) => (
        <div key={item.id} className="fav-card">
          <img src={item.img} alt={item.nome} />
          <div className="fav-texto">
            <small>{item.tag}</small>
            <h4>{item.nome}</h4>
            <p>{item.desc}</p>
            <div className="fav-preco">
              <strong>{item.preco}</strong>
              <button type="button" onClick={aoAdicionar}>+ Adicionar</button>
            </div>
          </div>
        </div>
      ))}
    </aside>
  )
}

export default Favoritos
