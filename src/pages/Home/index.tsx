import { useEffect, useState } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'

function Home() {
  const [categorias, setCategorias] = useState([])

  async function getCategorias(){
    const categoriasFromApi = await api.get('/categorias')

    setCategorias(categoriasFromApi.data)
    console.log(categorias)
  }

  useEffect(() => {    // tudo que tiver dentro daq quando iniciar a pagina vai iniciar sozinho
    getCategorias()
  }, [])



  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Categorias</h1>
        <input placeholder='Codigo' name='codigo' type='text' />
        <input placeholder='Nome' name='nome' type='text' />
        <input placeholder='Descrição' name='descrição' type='text' />
        <input placeholder='Status' name='status' type='text' />
        <button type='button'>Cadastrar</button>
      </form>

      {categorias.map(categoria => (
        <div key={categoria.id} className='card'>
          <div>
            <p>Codigo: <span>{categoria.codigo}</span></p>
            <p>Nome: <span>{categoria.nome}</span></p>
            <p>Descrição: <span>{categoria.descrição}</span></p>
            <p>Status: <span>{categoria.status}</span></p>
          </div>
          <button>
            <img src={Trash} style={{width:'45px', height: 'auto'}}/>
          </button>
        </div>
      ))}


    </div>

  )
}

export default Home
