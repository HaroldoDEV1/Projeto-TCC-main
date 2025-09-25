import { StyleSheet, Dimensions } from 'react-native'
import { widthTela, heightTela } from '../../constants/dimensions'

export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    marginTop: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topImage: {
    width: (widthTela - 30) / 3,
    height: 50,
    borderRadius: 10,
  },
  searchbar: {
    flex: 1,
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
})
