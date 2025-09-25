import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import axios from 'axios';
import styles from '../../constants/styles/stylesHome'; // Atualize o caminho conforme necessário
import TopArea from '../../components/TopArea/TopArea';
import Footer from '../../components/Footer/Footer';

export default function HomeScreen({ navigation }) {
  const [medicamentos, setMedicamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedicamentos = async () => {
      try {
        const response = await axios.get('https://bula.vercel.app/api/medicamentos');
        setMedicamentos(response.data);
      } catch (err) {
        setError('Erro ao carregar a lista de medicamentos. Tente novamente mais tarde.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMedicamentos();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('MedicineScreen', { 
        medicineName: item.nome, 
        medicineDescription: item.descricao, 
        medicinePrice: item.preco,
        medicineBulaId: item.id 
      })}
    >
      <Text style={styles.cardTitle}>{item.nome}</Text>
      <Text style={styles.cardDescription}>{item.descricao}</Text>
      <Text style={styles.cardPrice}>Preço: R${item.preco}</Text>
    </TouchableOpacity>
  );

  if (loading) return <ActivityIndicator size="large" color="#038B4E" />;
  if (error) return <Text>{error}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <TopArea navigation={navigation} />
      <FlatList
        data={medicamentos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}
