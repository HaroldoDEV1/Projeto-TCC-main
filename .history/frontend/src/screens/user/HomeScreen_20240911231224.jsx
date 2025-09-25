import React, { useState, useEffect } from 'react'
import { View, FlatList, SafeAreaView, TouchableOpacity, Text, Button, Alert } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import { api } from '../../lib/api'
import styles from './stylesHome' // Atualize o caminho do estilo se necessário
import TopArea from '../../components/TopArea/TopArea'
import Footer from '../../components/Footer/Footer'

export default function HomeScreen({ navigation }) {
    const [medicines, setMedicines] = useState([])

    useEffect(() => {
        api.get('/medicine/list')
            .then(response => {
                setMedicines(response.data)
            })
            .catch(error => {
                console.error('Erro ao buscar remédios:', error)
            })
    }, [])

    const viewMedicineDetails = (medicineId, medicineImage, medicineName, medicineDescription, medicinePrice) => {
        navigation.navigate('Medicine', { medicineId, medicineImage, medicineName, medicineDescription, medicinePrice })
    }

    return (
        <SafeAreaView style={styles.container}>
            <TopArea />
            
            <Button title="Tirar Foto" />
            
            <FlatList
                data={medicines}
                keyExtractor={(item) => item._id.toString()}
                numColumns={2}
                renderItem={({ item }) => (
                    <Card style={styles.card} onPress={() => viewMedicineDetails(item._id, item.image, item.name, item.description, item.price)}>
                        <Card.Cover source={{ uri: `http://192.168.0.86:3000/${item.image}` }} style={styles.cardImage} />
                        <Card.Content style={styles.cardContent}>
                            <Title style={styles.cardTitle}>{item.name}</Title>
                            <Paragraph style={styles.cardDescription}>{item.description}</Paragraph>
                            <Text style={styles.cardPrice}>R$ {item.price}</Text>
                        </Card.Content>
                    </Card>
                )}
                columnWrapperStyle={styles.columnWrapper}
            />

            <Footer navigation={navigation} />
        </SafeAreaView>
    )
}
