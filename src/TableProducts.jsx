import {Table} from 'reactstrap'

function TableProducts({data}){
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
                            <td>{products.price}</td>
                        </tr>
                    ))
                }
                    
                </tbody>
            </Table>
        </div>
    )
}

export default TableProducts