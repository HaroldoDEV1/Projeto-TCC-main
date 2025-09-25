import React, { useState, useEffect } from 'react';
import { View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import styles from '../../constants/styles/stylesHome';
import TopArea from '../../components/TopArea/TopArea';
import Footer from '../../components/Footer/Footer';
import { api } from '../../lib/api';

export default function HomeScreen({ navigation }) {
    // Estado para armazenar a lista de medicamentos
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        // Busca a lista de medicamentos da API
        api.get('/medicine/list')
            .then(response => {
                setMedicines(response.data); // Armazena os medicamentos no estado
            })
            .catch(error => {
                console.error('Erro ao buscar remédios:', error);
            });
    }, []);

    // Função para navegar para a tela de detalhes do medicamento
    const viewMedicineDetails = (medicineId, medicineName, medicineDescription, medicinePrice) => {
        navigation.navigate('Medicine', { medicineId, medicineName, medicineDescription, medicinePrice });
    };

    return (
        <SafeAreaView style={styles.container}>
            <TopArea />

            <FlatList
                data={medicines}
                keyExtractor={(item) => item._id.toString()}
                numColumns={2}
                renderItem={({ item }) => (
                    <Card style={styles.card} onPress={() => viewMedicineDetails(item._id, item.name,, item.description, item.price)}>
                        {/* Carrega a imagem da API, se disponível; caso contrário, usa a imagem fixa */}
                        <Card.Cover 
                            source={item.image ? { uri: item.image } : require('../../assets/logo.png')} 
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
        </SafeAreaView>
    )
}
