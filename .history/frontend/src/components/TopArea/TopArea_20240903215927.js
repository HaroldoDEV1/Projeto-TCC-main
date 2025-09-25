import React, { useState } from 'react'
import { View, Image } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styles from './stylesTopArea'

const TopArea = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const onChangeSearch = (query) => setSearchQuery(query)

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={require('../../assests/logo.png')}
          style={styles.topImage}
        />
        <Searchbar
          placeholder="Pesquisar"
          onChangeText={onChangeSearch}
          value={searchQuery}
          inputStyle={styles.searchInput}
          iconColor={'#757575'}
          style={styles.searchbar}
          placeholderTextColor={'#757575'}
          theme={{ colors: { primary: '#BDBDBD' } }}
        />  
      </View>
    </View>
  )
}

export default TopArea
