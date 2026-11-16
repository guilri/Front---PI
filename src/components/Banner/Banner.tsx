import './Banner.css';
import bannerfoto from '../../assets/bannerfoto.jpg'

function Banner() {
  return (
    <section className="banner">
      <div className="banner-esquerdo">
        <div>
          <small className="aberto">● ABERTO AGORA · ATÉ AS 23H</small>
          <h2>Pastel quentinho.<br />Sabor de casa.</h2>
          <p>Massa crocante, recheio caprichado e caldo de cana feito na hora.</p>
          <a href="#cardapio" className="btn-escolher">Escolher meu pastel</a>
        </div>
        <img src={bannerfoto} alt="Pastel" />
      </div>

      <div className="banner-info">
        <h3>Tem gosto de encontro no bairro.</h3>
        <p>Na Ze Mario, cada pastel sai fresquinho e cada cliente é de casa.</p>
        <div className="onde">
          <strong>Vem pra Ze Mario</strong>
          <p>Rua dos Andradas, 180 · Centro, SP</p>
          <small>Seg a sáb, das 11h às 23h</small>
        </div>
      </div>
    </section>
  );
}
export default Banner