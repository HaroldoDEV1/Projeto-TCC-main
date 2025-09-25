import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { useUser } from '../../context/UserContext'
import styles from './stylesFooter'

const dummyPassword = 'tcc@2024'  // Substitua com o valor real obtido após o login

export default function Footer({ navigation }) {
    const isAdmin = dummyPassword === 'tcc@2024' // Verificação simples da senha

    return (
        <View style={styles.footer}>
            {isAdmin ? (
                <TouchableOpacity onPress={() => navigation.navigate('AdminMenu')} style={styles.footerButton}>
                    <Text style={styles.footerButtonText}>Admin Menu</Text>
                </TouchableOpacity>
            ) : (
                <>
                    <TouchableOpacity onPress={() => navigation.navigate('Calendar')} style={styles.footerButton}>
                        <Text style={styles.footerButtonText}>Agenda</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.footerButton}>
                        <Text style={styles.footerButtonText}>Início</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Dictionary')} style={styles.footerButton}>
                        <Text style={styles.footerButtonText}>Dicionário</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('UserMenu')} style={styles.footerButton}>
                        <Text style={styles.footerButtonText}>Menu</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    )
}