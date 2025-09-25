


import { api } from "../../lib/api"

export default async function handleDelete(route, navigation){
    const { medicineId } = route.params || {}

    api.delete(`/medicine/${medicineId}`).then(response => { // Pega o ID do usuário
        alert('Remédio deletado com sucesso!')
        navigation.goBack() // Volta para a página "inicial"
    })
    .catch(error => {
        console.error('Erro ao deletar remédio: ', error)
    })
}