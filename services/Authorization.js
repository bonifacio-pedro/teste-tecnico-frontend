 /* 
Código padrão para conseguir entrar com a autenticação, busco ela no
local storage e a guardo em um dict.
*/
const token = localStorage.getItem('token')
const authorization = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}

export default authorization