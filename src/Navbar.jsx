import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import ModalProduct from "./ModalProduct"
import ModalLogin from './ModalLogin';
import verifyLogin from '../services/VerifyLogin';
import reload from '../services/reload';
import './css/styles.css'
import authorization from '../services/Authorization';

/*
Componente da navbar, que muda perante o usuario estar logado ou não.
*/
function NavbarComponent() {
    // Para abrir e fechar os modais
    const [modal, setModal] = useState(false);
    const toogle = () => setModal(!modal);

    /* Além do verify login para visualizar se o usuário fez a autenticação JWT 
    utilizei um método para guardar o login no localStorage (possível visualizar no 
    ModalLogin.jsx), e adicionei uma forma simples de fazer log-out
    */
  return (
    <div>
      <Navbar color="primary" dark>
        <NavbarBrand href="/">Brechó</NavbarBrand>
          <Nav className="me-auto" navbar>
            <div className='row p-2'>
            <NavItem className='col'>
                <NavLink className='buttonNav' onClick={toogle}>
                    {
                        verifyLogin() ? "Cadastrar Produto" : "Login"
                    }
                    {
                        verifyLogin() ? <ModalProduct modal={modal} toogle={toogle} type={"Cadastrar"}/> :  <ModalLogin modal={modal} toogle={toogle}/>
                    }
                </NavLink>
            </NavItem>
            <NavItem className='col'>
                <NavLink className='buttonNav' onClick={
                    function(){
                        if(!verifyLogin()){
                            alert('Você não está logado!')
                            return;
                        }
                        localStorage.setItem('username','')
                        localStorage.setItem('token', '')
                        authorization.headers = ''
                        reload()
                }}>
                 Logout
                </NavLink>
            </NavItem>
            </div>
          </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;