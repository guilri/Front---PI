import "./Header.css"

const Header = () => {
    return (
        <div className="header-container">
            <img src="./Marca.png" alt="" className="marca-img"/>          
            <p className="btn-cardapio">Cardápio</p>
            <p className="btn-entrarcriarconta">Entrar / Criar conta</p>
            <p className="btn-carrinho">Carrinho</p>
        </div>
    )
}
export default Header