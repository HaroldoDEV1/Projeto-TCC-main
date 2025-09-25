import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import TopArea from '../../components/TopArea/TopArea'; // Importar o componente TopArea
import Footer from '../../components/Footer/Footer'; // Importar o componente Footer

// Definição do dicionário de palavras relacionadas à saúde e remédios
const dictionary = {
  "Analgesico": "Medicamento utilizado para aliviar ou eliminar a dor.",
  "Antibiótico": "Substância utilizada para tratar infecções bacterianas.",
  "Anti-inflamatório": "Medicamento que reduz a inflamação e o inchaço.",
  "Vacina": "Preparação biológica que fornece imunidade contra doenças específicas.",
  "Antisséptico": "Produto que destrói microrganismos patogênicos e previne infecções.",
  "Placebo": "Substância inativa usada como controle em testes clínicos.",
  "Diurético": "Medicamento que aumenta a produção de urina, utilizado para tratar retenção de líquidos.",
  "Antidepressivo": "Medicamento utilizado para tratar transtornos depressivos.",
  "Antihistamínico": "Medicamento usado para aliviar os sintomas de alergias.",
  "Imunossupressor": "Substância que reduz a resposta imunológica do organismo.",
  "Expectorante": "Medicamento que facilita a eliminação do muco das vias respiratórias.",
  "Sedativo": "Medicamento que induz ao relaxamento e ao sono.",
  "Analgésico": "Medicamento que alivia a dor.",
  "Anticoncepcional": "Método utilizado para prevenir a gravidez.",
  "Antipirético": "Medicamento utilizado para reduzir a febre.",
  "Anticoagulante": "Medicamento que previne a coagulação do sangue.",
  "Antifúngico": "Medicamento utilizado para tratar infecções causadas por fungos.",
  "Antiviral": "Medicamento que combate infecções virais.",
  "Hormônio": "Substância produzida pelas glândulas endócrinas que regula diversas funções corporais.",
  "Prescrição": "Ordem escrita por um médico para o uso de medicamentos específicos.",
  "Efeito colateral": "Reação indesejada que ocorre como resultado do uso de um medicamento.",
  "Dose": "Quantidade de medicamento a ser administrada de uma vez.",
  "Farmácia": "Local onde são preparadas e vendidas medicações.",
  "Medicamento": "Substância usada para tratar, curar ou prevenir doenças.",
  "Tratamento": "Série de procedimentos destinados a curar ou aliviar doenças.",
  "Reabilitação": "Processo de recuperação de funções após uma doença ou cirurgia.",
  "Sintoma": "Indicação de uma condição ou doença percebida pelo paciente.",
  "Diagnóstico": "Identificação da natureza de uma doença por meio de exame clínico e testes.",
  "Alergia": "Reação exagerada do sistema imunológico a substâncias geralmente inofensivas.",
  "Anemia": "Condição caracterizada pela falta de glóbulos vermelhos saudáveis no sangue.",
  "Hipertensão": "Condição de pressão arterial elevada de forma crônica.",
  "Diabetes": "Doença caracterizada pela dificuldade de controlar os níveis de açúcar no sangue.",
  "Enfermeiro": "Profissional de saúde responsável pelo cuidado e assistência aos pacientes."
};

// Componente DictionaryScreen
export default function DictionaryScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TopArea navigation={} /> 
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {Object.entries(dictionary).map(([word, definition]) => (
          <View key={word} style={styles.entry}>
            <Text style={styles.word}>{word}</Text>
            <Text style={styles.definition}>{definition}</Text>
          </View>
        ))}
      </ScrollView>

      <Footer navigation={navigation} /> {/* Adicionar o Footer */}
    </SafeAreaView>
  );
}

// Estilos para o componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  scrollContainer: {
    paddingBottom: 20
  },
  entry: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1
  },
  word: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#038B4E'
  },
  definition: {
    fontSize: 16,
    color: '#333333'
  }
})
