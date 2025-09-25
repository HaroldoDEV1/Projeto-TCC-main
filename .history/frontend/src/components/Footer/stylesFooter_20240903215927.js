import { StyleSheet, Dimensions } from 'react-native'
import { widthTela, heightTela } from '../../constants/dimensions'

export default StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
    },
    footerButton: {
        padding: 10,
        borderRadius: 5,
    },
    footerButtonText: {
        fontSize: 16,
        color: '#333333',
    },
})
