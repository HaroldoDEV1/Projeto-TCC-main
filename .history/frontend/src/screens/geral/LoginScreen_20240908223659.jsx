import { useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, Image, Alert } from 'react-native'
import InputField from '../../components/Input'
import styles from '../../constants/styles/stylesLogin'
import handleLogin from '../../functions/users/handleLogin'
import { useUser } from '../../context'

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useUser()

    const onLogin = () => {
        handleLogin(email, password, setUser, navigation)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>
                    Olá!{'\n'}Faça seu
                    <Text style={{ color: '#038B4E' }}> LOGIN </Text>
                </Text>

                <InputField
                    placeholder="Digite seu email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <InputField
                    placeholder="Digite sua senha"
                    keyboardType="password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity style={styles.button} onPress={onLogin}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => console.log('Esqueceu sua senha?')}>
                    <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.signUpText}>Ainda não possui uma conta? <Text style={{ color: '#22402F' }}>Faça seu cadastro.</Text></Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('AdminMenu')}>
                    <Text style={styles.forgotPasswordText}> Entrar como Administrador </Text>
                </TouchableOpacity>

                <View style={styles.imageContainer}>
                    <Image source={require('../../assests/logo.png')} style={styles.image} />
                </View>
            </View>
        </SafeAreaView>
    )
}
