
/*
Função utilizada para verificar o login do usuário.
*/
function verifyLogin (){
    if(localStorage.getItem('username') != '' && localStorage.getItem('token') != ''){
        return true
    }
    else
    {
        return false
    }
}

export default verifyLogin
