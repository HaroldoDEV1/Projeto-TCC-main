import React, { useState, useCallback } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Searchbar, Avatar, Badge, Menu, Divider } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import styles from './stylesTopArea'

export default fu TopArea = ({ navigation, isAdmin }) => { // Recebe a prop `isAdmin`
  const [searchQuery, setSearchQuery] = useState('')
  const [menuVisible, setMenuVisible] = useState(false)

  const onChangeSearch = useCallback((query) => setSearchQuery(query), [])

  const openMenu = () => setMenuVisible(true)
  const closeMenu = () => setMenuVisible(false)

  // Menu para usuário comum e administrador
  const userMenuItems = [
    { text: 'Perfil', onPress: () => navigation.navigate('User') },
    { text: 'Configurações', onPress: () => navigation.navigate('Settings') },
    { text: 'Ajuda', onPress: () => navigation.navigate('Help') },
    { text: 'Sair', onPress: () => navigation.navigate('Login') },
  ]

  const adminMenuItems = [
    { text: 'Gerenciar Usuários', onPress: () => navigation.navigate('UserList') },
    { text: 'Gerenciar Produtos', onPress: () => navigation.navigate('MedicineList') },
    { text: 'Relatórios', onPress: () => navigation.navigate('Reports') },
    { text: 'Sair', onPress: () => navigation.navigate('Login') },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.topImage}
        />

        <Searchbar
          placeholder='Pesquisar'
          onChangeText={onChangeSearch}
          value={searchQuery}
          inputStyle={styles.searchInput}
          iconColor='#757575'
          style={styles.searchbar}
          placeholderTextColor='#757575'
          theme={{ colors: { primary: '#BDBDBD' } }}
          accessibilityLabel='Campo de pesquisa'
        />

        <TouchableOpacity style={styles.notificationIcon}>
          <Ionicons name='notifications-outline' size={24} color='#757575' />
          <Badge style={styles.badge}>3</Badge>
        </TouchableOpacity>

        <Menu
          visible={menuVisible}
          onDismiss={closeMenu}
          anchor={
            <TouchableOpacity onPress={openMenu}>
              <Avatar.Image
                source={require('../../assets/avatar.png')}
                size={40}
                style={[styles.avatar, { backgroundColor: '#FFFFFF' }]}
              />
            </TouchableOpacity>
          }
        >
          {(isAdmin ? adminMenuItems : userMenuItems).map((item, index) => (
            <Menu.Item key={index} onPress={item.onPress} title={item.text} />
          ))}
          <Divider />
        </Menu>
      </View>
    </View>
  )
}

export default TopArea
