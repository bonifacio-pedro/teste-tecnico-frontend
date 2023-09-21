import { useState, useEffect } from "react"
import NavbarComponent from "./Navbar"
import TableProducts from "./TableProducts"
import SearchInputs from "./SearchInputs"
import api from '../services/Api';


function App(){
  // Data da tabela que é pega na response do get
  const [data, setData] = useState([])


  // Conexão get
  const productGet = async()=>{
    await api.get("/api/products")
    .then(response => {
      setData(response.data) // aqui é preenchido o array de data
    }).catch(error=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    productGet()
  })


  return (
    <div>
      <NavbarComponent/>
      <SearchInputs />
      <TableProducts data={data}/>
    </div>
  )
}

export default App