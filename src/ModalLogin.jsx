import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import api from '../services/Api';
import reload from '../services/reload';

function ModalLogin({modal, toogle}) {
    const [name, setName] = useState('')

    // Função principal que é utilizada para enviar a requisição de login ao backend
    async function login(event){
        // Manter o padrão de SPA
        event.preventDefault()

        const data = { name }

        try {
            const response = await api.post('/api/auth/login', {"Name": data.name})

            // Armazenando no local storage
            localStorage.setItem('username',name)
            localStorage.setItem('token', response.data.tokenAuth)

            reload()
        }
        catch(error){
            alert("Esse usuário não existe em nosso sistema")
        }
    }

    // Método post, entrar e conseguir o token
    return (
        <div>
            <Modal isOpen={modal} toogle={toogle}>
                <ModalHeader toogle={toogle}>Entrar:</ModalHeader>
                <form onSubmit={login}>
                <ModalBody>
                    <Input value={name} onChange={e=>setName(e.target.value)} placeholder='Nome do usuário' />
                </ModalBody>
                <ModalFooter>
                    <p className='al'>Para teste: Admin ou Admin2</p>
                    <Button  color="danger" onClick={toogle} >Cancelar</Button>
                    <Button  color="primary" type='submit' onClick={toogle}>Entrar</Button>
                </ModalFooter>
                </form>
            </Modal>
        </div>
  );
}

export default ModalLogin;