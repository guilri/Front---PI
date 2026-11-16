import './BarraInfo.css'

function BarraInfo() {
  return (
    <section className="barra-info">
      <div className="info-item">
        <span>🕒</span>
        <div>
          <strong>Entrega em 35–45 min</strong>
          <small>Taxa de entrega: R$ 6,00</small>
        </div>
      </div>

      <div className="info-item">
        <span>📍</span>
        <div>
          <strong>Entregar em qual endereço?</strong>
          <small>Informe seu CEP para conferir</small>
        </div>
      </div>

      <div className="info-item">
        <span>⭐</span>
        <div>
          <strong>4,9 · Mais de 500 avaliações</strong>
          <small>O sabor que o bairro já conhece</small>
        </div>
      </div>

      <div className="info-item">
        <span>🛍️</span>
        <div>
          <strong>Prefere retirar?</strong>
          <small>Seu pedido pronto no balcão</small>
        </div>
      </div>
    </section>
  )
}

export default BarraInfo
