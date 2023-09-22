import { useState, useEffect } from "react"
import NavbarComponent from "./Navbar"
import TableProducts from "./TableProducts"
import api from '../services/Api';
import {Input, Button } from 'reactstrap'


function App(){
  // Data da tabela que é pega na response do get
  const [data, setData] = useState([])
  const [name, setName ] = useState('')


  // Conexão get
  const productGet = async()=>{
    await api.get("/api/products")
    .then(response => {
      setData(response.data) // aqui é preenchido o array de data
    }).catch(error=>{
      console.log(error)
    })
  }

  // Use effect com um array, usando apenas na primeira vez que inicia a aplicação
  useEffect(()=>{
    productGet()
  }, [])

  // Função para procurar algo na barra de pesquisa
  async function search(event){
    // SPA
    event.preventDefault()
    const data = { name }

    // Comunicando com a API para procurar
    try {
      const response = await api.post('/api/products/search', {"Name": data.name, "price": 0})

      setData(response.data)

      // Limpando o input de pesquisa
      setName('') 
    }
      catch(error){
        if(data.name == ''){
          return // Limpando caixas de erros desnecessárias
        }
        alert("Erro ao procurar")
        setName('')
      }
    } 
  return (
    <div>
      <NavbarComponent/>

      <div name="Caixa de pesquisa" class="container-sm mt-5">
        <form onSubmit={search}>
          <div className="row">
            <div className="col-8">
              <Input value={name} onChange={e=>setName(e.target.value)} placeholder="Pesquisar produto"/>
            </div>
            <div className="col-2">
              <Button type='submit' color="primary" >Ok</Button>
            </div>
            <div className="col-1">
              <Button onClick={()=>{productGet()}} color="primary" >↩</Button>
            </div>
          </div>
        </form>
      </div>

      <TableProducts data={data}/>
    </div>
  )
}

export default App