import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashBoard from "./pages/DashBoard/DashBoard"
import Inicio from "./pages/Inicio/Inicio"

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/admin" element={<DashBoard />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
