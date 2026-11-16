import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'

function SubCategorias() {
    const [subCategorias, setSubCategorias] = useState([])
    const [categorias, setCategorias] = useState([])  // serve para guardar as categorias para ser usadas la no select

    const inputCodigo = useRef(null)
    const inputNome = useRef(null)
    const inputDescricao = useRef(null)
    const inputStatus = useRef(null)
    const selectCategoria = useRef(null)  // vai pegar o id da categoria escolhida

    useEffect(() => {
        getSubCategorias()
        getCategorias()   // ta aqui porque a subcategoria precisa da categoria
    }, [])

    async function getCategorias() {
        const categoriasFromApi = await api.get('/categorias')
        setCategorias(categoriasFromApi.data)
    }

    async function getSubCategorias() {
        const subCategoriasFromApi = await api.get('/subCategorias')
        setSubCategorias(subCategoriasFromApi.data)
    }

    async function createSubCategorias() {
        await api.post('/subCategorias', {
          codigo: inputCodigo.current.value,
          nome: inputNome.current.value,
          descricao: inputDescricao.current.value,
          status: inputStatus.current.value,
          categoria: selectCategoria.current.value
        })
        getSubCategorias()
    }

    async function deleteSubCategorias(id) {
        await api.delete(`/subCategorias/${id}`)  
        getSubCategorias()  
    }

    async function updateSubCategorias(subCategoria) {
        const codigo = prompt('Novo codigo:', subCategoria.codigo)
        const nome = prompt('Novo nome:', subCategoria.nome)
        const descricao = prompt ('Nova descrição:', subCategoria.descricao)
        const status = prompt ('Novo status:', subCategoria.status)
    
        if (codigo === null || nome === null || descricao === null || status === null) return
        await api.put(`/subCategorias/${subCategoria._id}`, {
          codigo,
          nome,
          descricao,
          status,
          categoria: subCategoria.categoria?._id   // vai manter sempre na mesma categoria
        })
        getSubCategorias()
    }


    return (
    <div className='container'>
      <form>
        <h1>Cadastro de Sub-Categorias</h1>
        <input placeholder='Codigo' name='codigo' type='text' ref={inputCodigo} />
        <input placeholder='Nome' name='nome' type='text' ref={inputNome} />
        <input placeholder='Descrição' name='descrição' type='text' ref={inputDescricao} />
        <input placeholder='Status' name='status' type='text' ref={inputStatus} />

        <select ref={selectCategoria}>
          <option value="">Selecione uma Categoria</option>
          {categorias.map((categoria) => (
            <option key={categoria._id} value={categoria._id}>
              {categoria.nome}
            </option>
          ))}
        </select>

        <button type='button' onClick={createSubCategorias}>Cadastrar</button>
      </form>

      {subCategorias.map((subCategoria) => (
        <div key={subCategoria._id} className='card'>
          <div>
            <p>Codigo:    <span>{subCategoria.codigo}</span></p>
            <p>Nome:      <span>{subCategoria.nome}</span></p>
            <p>Descrição: <span>{subCategoria.descricao}</span></p>
            <p>Status:    <span>{subCategoria.status}</span></p>
            <p>Categoria: <span>{subCategoria.categoria?.nome}</span></p>
          </div>

          <button type='button' onClick={() => updateSubCategorias(subCategoria)}>
            Editar
          </button>

          <button type='button' onClick={() => deleteSubCategorias(subCategoria._id)}>
            <img src={Trash} style={{ width: '30px', height: 'auto' }} />
          </button>
        </div>
      ))}
    </div>
  )
    
}
export default SubCategorias