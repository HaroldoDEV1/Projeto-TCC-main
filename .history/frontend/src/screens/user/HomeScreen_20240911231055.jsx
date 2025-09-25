import React, { useState, useEffect } from 'react'
import { View, FlatList, SafeAreaView, TouchableOpacity, Text, Alert } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import { api } from '../../lib/api'
import styles from '../../constants/styles/stylesHome'
import TopArea from '../../components/TopArea/TopArea'
import Footer from '../../components/Footer/Footer'
// import { Camera, useCameraDevices } from 'react-native-vision-camera'
// import axios from 'axios' 

export default function HomeScreen({ navigation }) {
    // Estado para armazenar a lista de medicamentos
    const [medicines, setMedicines] = useState([]) 

    useEffect(() => {
        // Função para buscar a lista de medicamentos da API
        const fetchMedicines = async () => {
            try {
                const response = await api.get('/medicine/list')
                setMedicines(response.data) // Armazena os medicamentos no estado
            } catch (error) {
                console.error('Erro ao buscar remédios:', error) 
                Alert.alert('Erro', 'Não foi possível carregar a lista de medicamentos.')
            }
        }

        fetchMedicines()

        // // Solicita permissão para acessar a câmera
        // (async () => {
        //     const status = await Camera.requestCameraPermission()
        //     setHasPermission(status === 'authorized') // Atualiza o estado de permissão
        // })()
    }, [])

    // Função para navegar para a tela de detalhes do medicamento
    const viewMedicineDetails = (medicineId, medicineImage, medicineName, medicineDescription, medicinePrice) => {
        navigation.navigate('Medicine', { 
            medicineId, 
            medicineImage, 
            medicineName, 
            medicineDescription, 
            medicinePrice 
        })
    }

    // Função para tirar uma foto com a câmera (comentado)
    // const takePhoto = async () => {
    //     if (!hasPermission) { 
    //         Alert.alert('Permissão de câmera negada!')
    //         return
    //     }
    //     try {
    //         const photo = await camera.current.takePhoto()
    //         recognizeMedicine(photo.uri)
    //     } catch (error) {
    //         console.error('Erro ao tirar foto:', error)
    //     }
    // }

    // Função para reconhecer o medicamento na imagem (comentado)
    // const recognizeMedicine = async (photoUri) => {
    //     try {
    //         const response = await fetch(photoUri)
    //         const blob = await response.blob()
    //         const reader = new FileReader()
    //         reader.onloadend = async () => {
    //             const base64data = reader.result.split(',')[1]
    //             const apiKey = '2e6dfc17-6832-42dc-8426-3684049506ee'
    //             const result = await axios.post(
    //                 'https://api.deepai.org/api/image-recognition',
    //                 { image: `data:image/jpeg;base64,${base64data}` },
    //                 { headers: { 'Api-Key': apiKey, 'Content-Type': 'application/json' } }
    //             )
    //             const tags = result.data.output.tags.map(tag => tag.toLowerCase())
    //             console.log('Tags reconhecidas:', tags)
    //             const matchedMedicine = medicines.find(medicine =>
    //                 tags.includes(medicine.name.toLowerCase())
    //             )
    //             if (matchedMedicine) {
    //                 viewMedicineDetails(
    //                     matchedMedicine._id,
    //                     matchedMedicine.image,
    //                     matchedMedicine.name,
    //                     matchedMedicine.description,
    //                     matchedMedicine.price
    //                 )
    //             } else {
    //                 Alert.alert('Remédio não encontrado!')
    //             }
    //         }
    //         reader.readAsDataURL(blob)
    //     } catch (error) {
    //         console.error('Erro ao reconhecer imagem:', error)
    //     }
    // }

    // Exibe uma mensagem enquanto o dispositivo de câmera está sendo carregado
    // if (!device) return <Text>Carregando câmera...</Text>

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Medicamentos</Text>
            </View>
            
            <TopArea />

            {/* Botão para tirar foto (comentado) */}
            {/* <Button title="Tirar Foto" onPress={takePhoto} /> */}

            <FlatList
                data={medicines}
                keyExtractor={(item) => item._id.toString()}
                numColumns={2}
                renderItem={({ item }) => (
                    <Card 
                        style={styles.card} 
                        onPress={() => viewMedicineDetails(
                            item._id,
                            item.image,
                            item.name,
                            item.description,
                            item.price
                        )}
                    >
                        <Card.Cover 
                            source={{ uri: `http://192.168.0.86:3000/${item.image}` }} 
                            style={styles.cardImage} 
                        />
                        <Card.Content>
                            <Title style={styles.cardTitle}>{item.name}</Title>
                            <Paragraph style={styles.cardDescription}>{item.description}</Paragraph>
                        </Card.Content>
                    </Card>
                )}
                columnWrapperStyle={styles.columnWrapper}
            />

            <Footer navigation={navigation} />

            {/* Botão flutuante para tirar foto */}
            {/* <TouchableOpacity style={styles.button} onPress={takePhoto}>
                <Text style={styles.buttonText}>Tirar Foto</Text>
            </TouchableOpacity> */}
        </SafeAreaView>
    )
}
