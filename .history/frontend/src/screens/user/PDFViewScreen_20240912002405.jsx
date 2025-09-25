import React from 'react';
import { View, SafeAreaView } from 'react-native';
import PDFView from 'react-native-pdf';
import styles from '../../constants/styles/stylesMedicine';

export default function PDFViewScreen({ route }) {
  const { pdfUrl } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <PDFView
          source={{ uri: pdfUrl, cache: true }}
          style={{ flex: 1 }}
        />
      </View>
    </SafeAreaView>
  );
}
