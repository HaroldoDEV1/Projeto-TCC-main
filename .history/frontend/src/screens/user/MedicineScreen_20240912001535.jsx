import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import styles from '../../constants/styles/stylesMedicine';
import TopArea from '../../components/TopArea/TopArea';
import Footer from '../../components/Footer/Footer';

export default function MedicineScreen({ route, navigation }) {
  const { medicineName, medicineDescription, medicinePrice, medicineBulaId } = route.params;
  const [bulaInfo, setBulaInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBulaInfo = async () => {
      try {
        const response = await axios.get(`https://bula.vercel.app/api/bula/${medicineBulaId}`);
        setBulaInfo(response.data);
      } catch (err) {
        setError('Erro ao carregar a bula. Tente novamente mais tarde.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBulaInfo();
  }, [medicineBulaId]);

  if (loading) return <ActivityIndicator size="large" color="#038B4E" />;
  if (error) return <Text>{error}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <TopArea />

      <View style={styles.descriptionContainer}>
        <Text style={styles.categoryText}>{medicineName}</Text>
        <Text style={styles.description}>Descrição:</Text>
        <Text style={styles.description}>{medicineDescription}</Text>
        <Text style={styles.priceText}>Preço: R${medicinePrice}</Text>
        {bulaInfo && (
          <View style={styles.bulaContainer}>
            <Text style={styles.bulaTitle}>Informações da Bula:</Text>
            <Text style={styles.bulaText}>{bulaInfo.descricao}</Text>
          </View>
        )}
        <TouchableOpacity style={styles.bula} onPress={() => Alert.alert('Abrir Bula', 'Informações da bula estão exibidas na tela.')}>
          <Text style={styles.bulaText}>VER INFORMAÇÕES DA BULA</Text>
        </TouchableOpacity>
      </View>

      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}
