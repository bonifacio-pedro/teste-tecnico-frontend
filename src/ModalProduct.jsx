import React, { useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import api from '../services/Api';
import reload from '../services/reload';
import authorization from '../services/Authorization';

function ModalProduct({modal,toogle}) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)

    // Função para registrar um produto
    async function register(event){
        event.preventDefault()
        const data = { name, price }

        try {
            // Adicionando produto
            await api.post('/api/products/',
             {"name": data.name, "price": Number(data.price)}, authorization)

            reload()
        }
        catch(error){
            alert("Tivemos um problema ao adicionar o produto")
        }
    }
   

    // Método post, cadastrar um novo produto com um modal
    return (
        <div>
            <Modal isOpen={modal} toogle={toogle}>
                <ModalHeader toogle={toogle}>Cadastrar um produto</ModalHeader>
                <form onSubmit={register}>
                <ModalBody>
                    <div className="container p-3">
                        <div className="row mb-3">
                            <label className='mb-2'>Nome do produto: </label>
                            <Input required value={name} onChange={e=>setName(e.target.value)} />
                        </div>
                        <div className="row">
                            <label className='mb-2'>Preço do produto: </label>
                            <Input required value={price} type="number" step="0.01" min='0' onChange={e=>setPrice(e.target.value)} />
                        </div>
                    </div>
                   
                </ModalBody>
                <ModalFooter>
                    <Button  color="danger" onClick={toogle}>Cancelar</Button>
                    <Button  color="primary" type='submit' >Cadastrar</Button>
                </ModalFooter>
                </form>
            </Modal>
        </div>
  );
}

export default ModalProduct;