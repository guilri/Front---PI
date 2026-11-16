import DashBoard from "./pages/DashBoard/DashBoard"
import Categorias from "./components/Categorias"
import SubCategorias from "./components/Sub-Categorias"
import Produtos from "./components/Produtos"

function App() {
    return (
        <main>
            <DashBoard/>
            <Categorias/>
            <SubCategorias/>
            <Produtos/>
        </main>
    )
}
export default App