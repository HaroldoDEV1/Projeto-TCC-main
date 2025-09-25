import { Alert } from 'react-native'
import { api } from "../../lib/api"
import axios from 'axios'

export default async function handleRegister(navigation, image, name, category, description, bula, price) {
    if (!name || !category || !description || !price) {
        Alert.alert('Por favor, preencha todos os campos.')
        return
    }

    const formData = new FormData()

    formData.append('name', name)
    formData.append('category', category)
    formData.append('description', description)
    formData.append('price', price.toString())
    formData.append('image', {
        uri: image.uri,
        type: 'image/jpeg',
        name: image.name || 'image.jpg',
    })
    formData.append('bula', {
        uri: bula.uri,
        type: 'application/pdf',
        name: bula.name || 'bula.pdf',
    })

    try {
        const response = await api.post('/medicine/create', {
            name,
            category,
            description,
            price,
        }, {
            image, 
            headers: {
                'Content-Type': 'application/json',
            },
        })
  
          if (response.ok) {
              Alert.alert('Remédio cadastrado com sucesso')
              navigation.goBack() // Navegue para a tela de login ou outra tela conforme necessário
          }
          else {
              Alert.alert('Erro ao cadastrar remédio')
              console.log('Erro ao cadastrar remédio: ', result.msg)
          }
      }
      catch(error){
      console.log('Erro ao conectar ao servidor:', error)
      Alert.alert('Erro ao conectar ao servidor')
      }
}
