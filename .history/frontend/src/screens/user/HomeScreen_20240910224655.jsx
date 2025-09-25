import React, { useState, useEffect, useRef } from 'react'
import { View, FlatList, SafeAreaView, TouchableOpacity, Text, Button, Alert } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import { api } from '../../lib/api'
import styles from '../../constants/styles/stylesHome'
import TopArea from '../../components/TopArea/TopArea'
import Footer from '../../components/Footer/Footer'
import { Camera, useCameraDevices } from 'react-native-vision-camera'
import axios from 'axios' // Importa o axios para fazer requisições HTTP

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
          
