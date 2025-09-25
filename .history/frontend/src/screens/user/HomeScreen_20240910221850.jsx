import React, { useState, useEffect, useRef } from 'react' // Importa hooks e fu
import { api } from '../../lib/api' nções do React
import { View, FlatList, SafeAreaView, TouchableOpacity, Text, Button, Alert } from 'react-native' // Importa componentes do React Native
import { Card, Title, Paragraph } from 'react-native-paper' // Importa componentes de UI da biblioteca React Native Paper
import styles from '../../constants/styles/stylesHome' 
import TopArea from '../../components/TopArea/TopArea' 
import Footer from '../../components/Footer/Footer' 
import { Camera, useCameraDevices } from 'react-native-vision-camera' 

export default function HomeScreen({ navigation }) {
    const [medicines, setMedicines] = useState([]) // Define o estado para armazenar a lista de medicamentos
    const [hasPermission, setHasPermission] = useState(false) // Define o estado para armazenar a permissão da câmera
    const camera = useRef(null) // Cria uma referência para o componente da câmera
    const devices = useCameraDevices() // Obtém a lista de dispositivos de câmera disponíveis
    const device = devices.back // Define a câmera traseira como dispositivo ativo

    // Efeito colateral para buscar os medicamentos e solicitar permissão de câmera
    useEffect(() => {
        // Faz a chamada à API para buscar a lista de medicamentos
        api.get('/medicine/list')
            .then(response => {
                setMedicines(response.data) // Atualiza o estado com a lista de medicamentos recebida
            })
            .catch(error => {
                console.error('Erro ao buscar remédios:', error) // Exibe um erro no console se a chamada falhar
            })

        // Função assíncrona para solicitar permissão da câmera
        (async () => {
            const status = await Camera.requestCameraPermission() // Solicita permissão de uso da câmera
            setHasPermission(status === 'authorized') // Atualiza o estado com a permissão
        })()
    }, [])

    // Função para abrir a tela de detalhes de um remédio específico
    const viewMedicineDetails = (medicineId, medicineImage, medicineName, medicineDescription, medicinePrice) => {
        // Navega para a tela 'Medicine' passando os dados do remédio
        navigation.navigate('Medicine', { medicineId, medicineImage, medicineName, medicineDescription, medicinePrice })
    }

    // Função para capturar a foto do remédio
    const takePhoto = async () => {
        if (!hasPermission) { // Verifica se a permissão de câmera foi concedida
            Alert.alert('Permissão de câmera negada!') // Exibe alerta se a permissão for negada
            return
        }

        try {
            const photo = await camera.current.takePhoto() // Captura a foto usando a câmera
            recognizeMedicine(photo.uri)  // Chama a função para reconhecimento do remédio usando a foto
        } catch (error) {
            console.error('Erro ao tirar foto:', error) // Exibe um erro no console se falhar
        }
    }

    // Função para reconhecer o remédio na imagem capturada
    const recognizeMedicine = async (photoUri) => {
        try {
            // Simulação de chamada à API de reconhecimento
            const response = await fetch('https://vision.googleapis.com/v1/images:annotate?key=YOUR_API_KEY', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    requests: [
                        {
                            image: {
                                content: photoUri, // Conteúdo da imagem para reconhecimento
                            },
                            features: [
                                {
                                    type: 'LABEL_DETECTION', // Tipo de reconhecimento solicitado (detecção de rótulos)
                                },
                            ],
                        },
                    ],
                }),
            })

            const result = await response.json() // Converte a resposta para JSON
            const medicineName = result.responses[0].labelAnnotations[0].description // Obtém o nome do remédio reconhecido

            // Filtra a lista de medicamentos pelo nome reconhecido
            const matchedMedicine = medicines.find((medicine) => medicine.name.toLowerCase() === medicineName.toLowerCase())

            if (matchedMedicine) {
                // Abre a tela de detalhes do remédio encontrado
                viewMedicineDetails(matchedMedicine._id, matchedMedicine.image, matchedMedicine.name, matchedMedicine.description, matchedMedicine.price)
            } else {
                Alert.alert('Remédio não encontrado!') // Exibe alerta se nenhum remédio correspondente for encontrado
            }
        } catch (error) {
            console.error('Erro ao reconhecer imagem:', error) // Exibe um erro no console se a chamada falhar
        }
    }

    if (!device) return <Text>Carregando câmera...</Text> // Exibe mensagem enquanto a câmera carrega

    return (
        <SafeAreaView style={styles.container}>
            <TopArea /> {/* Componente da área superior */}

            {/* Componente da câmera */}
            <Camera
                style={{ width: '100%', height: 200 }}
                device={device}
                isActive={true}
                ref={camera}
                photo={true}
            />

            {/* Botão para capturar a foto */}
            <Button title="Tirar Foto" onPress={takePhoto} />

            {/* Lista de medicamentos */}
            <FlatList
                data={medicines}
                keyExtractor={(item) => item._id.toString()}
                numColumns={2}
                renderItem={({ item }) => (
                    <Card style={styles.card} onPress={() => viewMedicineDetails(item._id, item.image, item.name, item.description, item.price)}>
                        <Card.Cover source={{ uri: `http://192.168.0.86:3000/${item.image}` }} style={styles.cardImage} />
                        <Card.Content>
                            <Title style={styles.cardTitle}>{item.name}</Title>
                            <Paragraph style={styles.cardDescription}>{item.description}</Paragraph>
                        </Card.Content>
                    </Card>
                )}
                columnWrapperStyle={styles.columnWrapper}
            />

            <Footer navigation={navigation} /> {/* Componente do rodapé */}
        </SafeAreaView>
    )
}
