import axios from "axios"
import { api } from "../../lib/api"

export default async function handleDelete(route, navigation){
    const { userId } = route.params || {}

    api.delete(`/users/${userId}`).then(response => { // Pega o ID do usuário
        alert('Usuário deletado com sucesso!')
        navigation.goBack() // Volta para a página "inicial"
    })
    .catch(error => {
        console.error('Erro ao deletar usuário: ', error)
    })
}