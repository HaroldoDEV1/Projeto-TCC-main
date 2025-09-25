import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import styles from '../../constants/styles/stylesMenu'
import TopArea from '../../components/TopArea/TopArea'
import Footer from '../../components/Footer/Footer'

export default AdminMenuScreen = ({ navigation }) => {
  const menuItems = [
    { text: 'Gerenciar Usuários', onPress: () => navigation.navigate('UserList') },
    { text: 'Gerenciar Produtos', onPress: () => navigation.navigate('MedicineList') },
    { text: 'Relatórios', onPress: () => navigation.navigate('Reports') },
    { text: 'Sair', onPress: () => navigation.navigate('Login') },
  ]

  return (
  <SafeAreaView style={styles.container}>
      <TopArea />
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Menu do Administrador</Text>

        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} onPress={item.onPress}>
            <Text style={styles.menuItemText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AdminMenu')} style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Menu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
