import React, { useState } from 'react';
import {Table} from 'reactstrap'
import verifyLogin from '../services/VerifyLogin'
import './css/styles.css'
import deleteProduct from '../services/Delete'
import ModalUpdate from './ModalUpdate'

function TableProducts({data}){
    // Para abrir e fechar os modais
    const [modal, setModal] = useState(false);
    const toogle = () => setModal(!modal);

    // Função feita para salvar o id escolhido no localStorage
    function saveToogle(id){
        toogle()
        localStorage.setItem('idUpdate',id)
    }

    // Componente da tabela principal, faço um map no array que recebemos do App.jsx (data)
    return (
        <div class="container-sm mt-5">
            <Table bordered>
                <thead>
                    <tr>
                    <th>
                        Nome do produto
                    </th>
                    <th>
                        Preço
                    </th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map(products=>(
                        <tr key={products.id}>
                            <td>{products.name}</td>
                            <td>R$ {products.price}</td>
                            {
                                verifyLogin() ? <td
                                onClick={()=>deleteProduct(products.id)}>
                                   <p className='delete'>❌</p>
                                </td>  : " "
                            }
                            {
                                verifyLogin() ? <td >
                                   <p onClick={()=>{saveToogle(products.id)}} className='update'>✍</p>
                                   <ModalUpdate modal={modal} toogle={toogle}/>
                                </td>  : " "
                            }
                        </tr>
                    ))
                }
                    
                </tbody>
            </Table>
        </div>
    )
}

export default TableProducts