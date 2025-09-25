import axios from 'axios';
import { api } from "../../lib/api"
import { Alert } from 'react-native'

export default async function handleRegister(navigation, image, name, category, description, bula, price) {
    if (!name || !category || !description || !price || !image || !bula) {
        Alert.alert('Por favor, preencha todos os campos e selecione os arquivos');
        return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', {
        uri: image.uri,
        type: image.mimeType,
        name: image.name,
    });
    formData.append('bula', {
        uri: bula.uri,
        type: bula.mimeType,
        name: bula.name,
    });

    try {
        const response = await api.post('/medicine/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.status === 201) {
            Alert.alert('Medicamento cadastrado com sucesso');
            navigation.goBack();
        } else {
            const errorMsg = response.data?.error || 'Erro ao cadastrar medicamento';
            Alert.alert('Erro ao cadastrar medicamento', errorMsg);
            console.log('Resposta inesperada ao cadastrar medicamento:', {
                status: response.status,
                data: response.data,
            });
        }
    } catch (error) {
        console.log('Erro ao conectar ao servidor:', {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data,
        });
        Alert.alert('Erro ao conectar ao servidor', error.response?.data?.error || error.message);
    }
}
