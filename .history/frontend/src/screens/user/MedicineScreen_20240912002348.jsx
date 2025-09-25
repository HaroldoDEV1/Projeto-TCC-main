import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import PDFView from 'react-native-pdf';
import styles from '../../constants/styles/stylesMedicine';
import TopArea from '../../components/TopArea/TopArea';
import Footer from '../../components/Footer/Footer';

export default function MedicineScreen({ route, navigation }) {
  const { medicineName, medicineDescription, medicinePrice, medicineBulaId } = route.params;

  // URL para o PDF local
  const pdfUrl = `./assets/pdfs/${medicineBulaId}.pdf`;

  return (
    <SafeAreaView style={styles.container}>
      <TopArea />

      <View style={styles.descriptionContainer}>
        <Text style={styles.categoryText}>{medicineName}</Text>
        <Text style={styles.description}>Descrição:</Text>
        <Text style={styles.description}>{medicineDescription}</Text>
        <Text style={styles.priceText}>Preço: R${medicinePrice}</Text>
        <TouchableOpacity
          style={styles.bula}
          onPress={() => {
            navigation.navigate('PDFViewScreen', { pdfUrl }); // Navega para a tela que exibe o PDF
          }}
        >
          <Text style={styles.bulaText}>VER INFORMAÇÕES DA BULA</Text>
        </TouchableOpacity>
      </View>

      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}
