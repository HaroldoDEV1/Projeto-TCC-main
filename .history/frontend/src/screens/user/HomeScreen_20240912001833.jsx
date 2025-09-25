import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import axios from 'axios';
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

  if (loading) return <ActivityIndicator size="large" color="#038B4E" style={styles.loader} />;
  if (error) return <Text style={styles.errorText}>{error}</Text>;

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#038B4E',
  },
  cardDescription: {
    fontSize: 16,
    color: '#333333',
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#038B4E',
    marginTop: 5,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
