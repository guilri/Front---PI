import Categorias from "../../components/Categorias"
import SubCategorias from "../../components/Sub-Categorias"
import Produtos from "../../components/Produtos"

function DashBoard() {
    return (
        <div>
            <h1> DashBoard </h1>
            <Categorias/>
            <SubCategorias/>
            <Produtos/>
        </div>
        
    )
}
export default DashBoard