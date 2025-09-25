import React, { useState, useCallback } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Searchbar, Avatar, Badge } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import styles from './stylesTopArea'

const TopArea = () => {
  const [searchQuery, setSearchQuery] = useState('')

  // Função otimizada para evitar recriações desnecessárias
  const onChangeSearch = useCallback((query) => setSearchQuery(query), [])

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={require('..')}
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

        <TouchableOpacity>
          <Avatar.Image
            source={require('../../assets/avatar.png')}
            size={40}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TopArea
