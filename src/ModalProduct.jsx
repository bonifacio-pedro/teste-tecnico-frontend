import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



function ModalProduct({modal,toogle}) {
    // Método post, cadastrar um novo produto
    return (
        <div>
            <Modal isOpen={modal} toogle={toogle}>
                <ModalHeader toogle={toogle}>Cadastrar um produto</ModalHeader>
                <ModalBody>
                    <p>p</p>
                </ModalBody>
                <ModalFooter>
                    <Button  color="danger" onClick={toogle} >Cancelar</Button>
                    <Button  color="primary" >Cadastrar</Button>
                </ModalFooter>
            </Modal>
        </div>
  );
}

export default ModalProduct;