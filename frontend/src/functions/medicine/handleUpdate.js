import axios from "axios"
import { api } from "../../lib/api"

export default async function handleUpdate( route, navigation, image, name, category, description, bula, price ){
    const { medicineId } = route.params || {}

    try {
        const response = await api.put(`/medicine/${medicineId}`, {image, name,category, description, bula, price})
        if (response.status === 200) {
            alert('Remédio atualizado com sucesso!')
            navigation.goBack()
        }
        else {
            throw new Error('Erro ao atualizar remédio')
        }
    }
    catch (error) {
        console.error('Erro ao atualizar remédio: ', error)
    }
}