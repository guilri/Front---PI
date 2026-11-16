import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'

function Produtos() {
    const [produtos, setProdutos] = useState([])
    const [subCategorias, setSubCategorias] = useState([])

    const inputNome = useRef(null)
    const inputDescricao = useRef(null)
    const inputPreco = useRef(null)
    const inputStatus = useRef(null)
    const selectSubCategoria = useRef(null)

    useEffect(() => {
        getProdutos()
        getSubCategorias()
    }, [])

    async function getSubCategorias() {
        const subCategoriasFromApi = await api.get('/subCategorias')
        setSubCategorias(subCategoriasFromApi.data)
    }

    async function getProdutos() {
        const produtosFromApi = await api.get('/produtos')
        setProdutos(produtosFromApi.data)
    }

    async function createProdutos() {
        await api.post('/produtos', {
            nome: inputNome.current.value,
            descricao: inputDescricao.current.value,
            preco: Number(inputPreco.current.value),
            status: inputStatus.current.value,
            subCategoria: selectSubCategoria.current.value
        })
        getProdutos()
    }

    async function deleteProdutos(id) {
        await api.delete(`/produtos/${id}`)
        getProdutos()
    }

    async function updateProdutos(produto) {
        const nome = prompt('Novo nome:', produto.nome)
        const descricao = prompt('Nova descrição:', produto.descricao)
        const preco = prompt('Novo preço:', produto.preco)
        const status = prompt('Novo status:', produto.status)

        if (nome === null || descricao === null || preco === null || status === null) return

        await api.put(`/produtos/${produto._id}`, {
            nome,
            descricao,
            preco: Number(preco),
            status,
            subCategoria: produto.subCategoria?._id
        })
        getProdutos()
    }

    return (
        <div className='container'>
            <form>
                <h1>Cadastro de Produtos</h1>
                <input placeholder='Nome do produto' name='nome' type='text' ref={inputNome} />
                <input placeholder='Descrição do produto' name='descricao' type='text' ref={inputDescricao} />
                <input placeholder='Preço' name='preco' type='number' step='0.01' ref={inputPreco} />
                <input placeholder='Status' name='status' type='text' ref={inputStatus} />

                <select ref={selectSubCategoria}>
                    <option value="">Selecione uma Sub-Categoria</option>
                    {subCategorias.map((subCategoria) => (
                        <option key={subCategoria._id} value={subCategoria._id}>
                            {subCategoria.nome}
                        </option>
                    ))}
                </select>

                <button type='button' onClick={createProdutos}>Cadastrar</button>
            </form>

            {produtos.map((produto) => (
                <div key={produto._id} className='card'>
                    <div>
                        <p>Nome:          <span>{produto.nome}</span></p>
                        <p>Descrição:     <span>{produto.descricao}</span></p>
                        <p>Preço:         <span>R$ {produto.preco}</span></p>
                        <p>Status:        <span>{produto.status}</span></p>
                    </div>

                    <button type='button' onClick={() => updateProdutos(produto)}>
                        Editar
                    </button>

                    <button type='button' onClick={() => deleteProdutos(produto._id)}>
                        <img src={Trash} style={{ width: '45px', height: 'auto' }} />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Produtos
