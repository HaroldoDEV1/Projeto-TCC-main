import axios from "axios"
import { api } from "../../lib/api"

export default async function handleUpdate( route, navigation, name, email, password ){
    const { userId } = route.params || {}

    api.put(`/users/${userId}`, { name, email, password }).then(response => { // Pega o ID do usuário e seus parâmetros
        alert('Usuário atualizado com sucesso!')
        navigation.goBack() // Volta para a página "inicial"
    })
    .catch(error => {
        console.error('Erro ao atualizar usuário: ', error)
    })
}