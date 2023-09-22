import api from "./Api";
import authorization from "./Authorization";
import reload from "./reload";

// Função para deletar produto
async function deleteProduct(id){
    try {
        // Deletando produto a partir do id recebido
        await api.delete(`/api/products/${id}`, authorization);
        reload()
    }
    catch(error){
        alert(error)
    }
}

export default deleteProduct