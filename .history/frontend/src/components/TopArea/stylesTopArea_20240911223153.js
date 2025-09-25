import { StyleSheet } from 'react-native'
import { widthTela } from '../../constants/dimensions'

export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 15
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  topImage: {
    width: (widthTela - 30) / 4,
    height: 50,
    borderRadius: 10
  },
  searchbar: {
    flex: 1,
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: '#f5f5f5'
  },
  notificationIcon: {
    marginLeft: 10,
    position: 'relative'
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#FF5252',
    color: '#fff'
  },
  avatar: {
    marginLeft: 10,
    backgrou
  }
})
