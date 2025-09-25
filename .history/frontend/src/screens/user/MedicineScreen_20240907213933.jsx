import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet } from 'react-native'
import TopArea from '../../components/TopArea/TopArea'
import Footer from '../../components/Footer/Footer'

export default function MedicineScreen({ route, navigation }) {
  const { medicineName, medicineDescription, medicinePrice, medicineImage, medicineBula } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <TopArea />

      <View style={styles.descriptionContainer}>
        <Image source={{ uri: medicineImage }} style={styles.medicineImage} />
        <Text style={styles.categoryText}>{medicineName}</Text>
        <Text style={styles.description}>Descrição:</Text>
        <Text style={styles.description}>{medicineDescription}</Text>
        <Text style={styles.priceText}>Preço: R${medicinePrice}</Text>

        <TouchableOpacity
          style={styles.bula}
          onPress={() => navigation.navigate('BulaScreen', { url: medicineBula })}
        >
          <Text style={styles.bulaText}>ABRIR BULA</Text>
        </TouchableOpacity>
      </View>

      <Footer navigation={navigation} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  descriptionContainer: {
    padding: 15,
  },
  medicineImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bula: {
    backgroundColor: '#038B4E',
    padding: 10,
    borderRadius: 5,
  },
  bulaText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },
})
