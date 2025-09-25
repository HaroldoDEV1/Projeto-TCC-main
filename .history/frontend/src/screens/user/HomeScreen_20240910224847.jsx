import React, { useState, useEffect, useRef } from 'react'
import { View, FlatList, SafeAreaView, TouchableOpacity, Text, Button, Alert } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import { api } from '../../lib/api'
import styles from '../../constants/styles/stylesHome'
import TopArea from '../../components/TopArea/TopArea'
import Footer from '../../components/Footer/Footer'
import { Camera, useCameraDevices } from 'react-native-vision-camera'
import axios from 'axios' 

export default function HomeScreen({ navigation }) {
    // Estado para armazenar a lista de medicamentos
    const [medicines, setMedicines] = useState([]) 
    // Estado para armazenar se a permissão da câmera foi concedida
    const [hasPermission, setHasPermission] = useState(false) 
    // Referência para a câmera
    const camera = useRef(null) 
    // Obtém os dispositivos de câmera disponíveis
    const devices = useCameraDevices() 
    // Obtém o dispositivo de câmera traseira
    const device = devices.back 

    useEffect(() => {
        // Busca a lista de medicamentos da API
        api.get('/medicine/list')
            .then(response => {
                setMedicines(response.data) // Armazena os medicamentos no estado
            })
            .catch(error => {
                console.error('Erro ao buscar remédios:', error) 
            })

        // Solicita permissão para acessar a câmera
        (async () => {
            const status = await Camera.requestCameraPermission() 
            setHasPermission(status === 'authorized') // Atualiza o estado de permissão
        })()
    }, [])

    // Função para navegar para a tela de detalhes do medicamento
    const viewMedicineDetails = (medicineId, medicineImage, medicineName, medicineDescription, medicinePrice) => {
        navigation.navigate('Medicine', { medicineId, medicineImage, medicineName, medicineDescription, medicinePrice })
    }

    // Função para tirar uma foto com a câmera
    const takePhoto = async () => {
        if (!hasPermission) { 
            Alert.alert('Permissão de câmera negada!') // Alerta se a permissão não for concedida
            return
        }

        try {
            const photo = await camera.current.takePhoto() // Captura a foto
            recognizeMedicine(photo.uri) // Envia a foto para reconhecimento
        } catch (error) {
            console.error('Erro ao tirar foto:', error) 
        }
    }

    // Função para reconhecer o medicamento na imagem
    const recognizeMedicine = async (photoUri) => {
        try {
            // Obtém a imagem da URI e converte para base64
            const response = await fetch(photoUri)
            const blob = await response.blob()
            const reader = new FileReader()

            reader.onloadend = async () => {
                const base64data = reader.result.split(',')[1] // Obtém a parte base64 da string de dados

                // Chave de API do DeepAI
                const apiKey = '2e6dfc17-6832-42dc-8426-3684049506ee' // Substitua pela sua chave de API do DeepAI

                // Faz a requisição para o DeepAI
                const result = await axios.post(
                    'https://api.deepai.org/api/image-recognition',
                    {
                        image: `data:image/jpeg;base64,${base64data}` // Envia a imagem em base64
                    },
                    {
                        headers: {
                            'Api-Key': apiKey, // Cabeçalhos necessários para a requisição
                            'Content-Type': 'application/json'
                        }
                    }
                )

                // Pega as tags retornadas pela API
                const tags = result.data.output.tags.map(tag => tag.toLowerCase())
                console.log('Tags reconhecidas:', tags)

                // Verifica se algum rótulo reconhecido corresponde a algum nome de medicamento
                const matchedMedicine = medicines.find(medicine =>
                    tags.includes(medicine.name.toLowerCase())
                )

                if (matchedMedicine) {
                    // Se um medicamento correspondente for encontrado, navegue para a tela de detalhes
                    viewMedicineDetails(
                        matchedMedicine._id,
                        matchedMedicine.image,
                        matchedMedicine.name,
                        matchedMedicine.description,
                        matchedMedicine.price
                    )
                } else {
                    // Caso contrário, exibe um alerta informando que o medicamento não foi encontrado
                    Alert.alert('Remédio não encontrado!')
                }
            }

            reader.readAsDataURL(blob) // Converte o blob para uma URL de dados
        } catch (error) {
            console.error('Erro ao reconhecer imagem:', error)
        }
    }

    // Exibe uma mensagem enquanto o dispositivo de câmera está sendo carregado
    if (!device) return <Text>Carregando câmera...</Text> 

    return (
        <SafeAreaView style={styles.container}>
            <TopArea /> 

            <Camera
                style={{ width: '100%', height: 200 }} // Define o estilo da câmera
                device={device}
                isActive={true}
                ref={camera} // Associa a referência da câmera
                photo={true} // Permite tirar fotos
            />

            <Button title="Tirar Foto" onPress={takePhoto} /> {/* Botão para tirar foto */}

            <FlatList
                data={medicines} // Dados dos medicamentos
                keyExtractor={(item) => item._id.toString()} // Chave única para cada item
                numColumns={2} // Número de colunas na lista
                renderItem={({ item }) => (
                    <Card style={styles.card} onPress={() => viewMedicineDetails(item._id, item.image, item.name, item.description, item.price)}>
                        <Card.Cover source={{ uri: `http://192.168.0.86:3000/${item.image}` }} style={styles.cardImage} />
                        <Card.Content>
                            <Title style={styles.cardTitle}>{item.name}</Title>
                            <Paragraph style={styles.cardDescription}>{item.description}</Paragraph>
                        </Card.Content>
                    </Card>
                )}
                columnWrapperStyle={styles.columnWrapper} // Estilo para o wrapper das colunas
            />

            <Footer navigation={navigation} /> {/* Componente de rodapé */}
        </SafeAreaView>
    )
}
