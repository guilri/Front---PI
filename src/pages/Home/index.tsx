import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'

function Home() {
  const [categorias, setCategorias] = useState([])

  const inputCodigo = useRef()
  const inputNome = useRef()
  const inputDescricao = useRef()
  const inputStatus = useRef()

  useEffect(() => {    // tudo que tiver dentro daq quando iniciar a pagina vai iniciar sozinho
    getCategorias()
  }, [])

  async function getCategorias() {
    const categoriasFromApi = await api.get('/categorias')

    setCategorias(categoriasFromApi.data)
  }

  async function createCategorias() {
    await api.post('/categorias', {
      codigo: inputCodigo.current.value,
      nome: inputNome.current.value,
      descricao: inputDescricao.current.value,
      status: inputStatus.current.value
    })
    getCategorias()  // ele repetido aqui vai ser para quando adicionar uma nova categoria a pagina ja recarregar sozinha com a categoria nova la sem precisar ficar recarregando manualmente
  }

  async function deleteCategorias(id) {
    await api.delete(`/categorias/${id}`)  // aqui ao contrario dos outros usa a crase `` pois assim pode passar o parametro que é usado assim : ${parametro}
    getCategorias()  // ele repetido aqui vai ser para quando adicionar uma nova categoria a pagina ja recarregar sozinha com a categoria nova la sem precisar ficar recarregando manualmente
  }

  async function updateCategorias(categoria) {
    const codigo = prompt('Novo codigo:', categoria.codigo)
    const nome = prompt('Novo nome:', categoria.nome)
    const descricao = prompt ('Nova descrição:', categoria.descricao)
    const status = prompt ('Novo status:', categoria.status)

    if (codigo === null || nome === null || descricao === null || status === null) return
    await api.put(`/categorias/${categoria._id}`, {
      codigo,
      nome,
      descricao,
      status
    })
    getCategorias()
  }


  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Categorias</h1>
        <input placeholder='Codigo' name='codigo' type='text' ref={inputCodigo} />
        <input placeholder='Nome' name='nome' type='text' ref={inputNome} />
        <input placeholder='Descrição' name='descrição' type='text' ref={inputDescricao} />
        <input placeholder='Status' name='status' type='text' ref={inputStatus} />
        <button type='button' onClick={createCategorias}>Cadastrar</button>
      </form>

      {categorias.map((categoria) => (
        <div key={categoria._id} className='card'>
          <div>
            <p>Codigo:    <span>{categoria.codigo}</span></p>
            <p>Nome:      <span>{categoria.nome}</span></p>
            <p>Descrição: <span>{categoria.descricao}</span></p>
            <p>Status:    <span>{categoria.status}</span></p>
          </div>
          <button onClick={() => deleteCategorias(categoria._id)}>
            <img src={Trash} style={{ width: '45px', height: 'auto' }} />
          </button>
          <button type='button' onClick={() => updateCategorias(categoria)}>
            Editar
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home
