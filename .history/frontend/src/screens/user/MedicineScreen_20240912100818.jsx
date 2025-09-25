import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from '../../constants/styles/stylesMedicine';
import TopArea from '../../components/TopArea/TopArea';
import Footer from '../../components/Footer/Footer';

export default function MedicineScreen({ route, navigation }) {
  const { medicineName, medicineDescription, medicinePrice, medicineBula } = route.params;

  // Função para abrir a bula do PDF
  const openPdf = () => {
    navigation.navigate('PdfViewer', { url: medicineBula });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopArea />

      <View style={styles.descriptionContainer}>
        <Text style={styles.categoryText}>{medicineName}</Text>
        <Text style={styles.description}>Descrição:</Text>
        <Text style={styles.description}>{medicineDescription}</Text>
        <Text style={styles.priceText}>Preço: R${medicinePrice}</Text>
        <TouchableOpacity style={styles.bula} onPress={openPdf}>
          <Text style={styles.bulaText}>ABRIR BULA</Text>
        </TouchableOpacity>
      </View>

      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

// Componente para exibir o PDF usando WebView
export function PdfViewer({ route }) {
  const { url } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: url }} style={{ flex: 1 }} />
    </SafeAreaView>
  );
}
