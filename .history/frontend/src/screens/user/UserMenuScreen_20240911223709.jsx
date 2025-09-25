import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import styles from '../../constants/styles/stylesMenu'
import TopArea from '../../components/TopArea/TopArea'
import Footer from '../../components/Footer/Footer'

export default UserMenuScreen = ({ navigation }) => {
  const menuItems = [
    { text: 'Atualizar Informações', onPress: () => navigation.navigate('User') },
    { text: 'Mensagens', onPress: () => navigation.navigate('Messages') },
    { text: 'Configurações', onPress: () => navigation.navigate('Settings') },
    { text: 'Ajuda', onPress: () => navigation.navigate('Help') },
    { text: 'Sair', onPress: () => navigation.navigate('Login') },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <TopArea navigation={navigation} isAdmin={false} /> {/* Passa isAdmin como false */}
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Menu do Usuário</Text>

        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} onPress={item.onPress}>
            <Text style={styles.menuItemText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Footer navigation={navigation} />
    </SafeAreaView>
  )
}
