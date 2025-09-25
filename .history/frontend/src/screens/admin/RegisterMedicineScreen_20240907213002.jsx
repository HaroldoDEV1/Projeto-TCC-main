import React, { useState } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, TextInput,  } from 'react-native'
import * as DocumentPicker from 'expo-document-picker'
import styles from '../../constants/styles/stylesRegister'
import handleRegister from '../../functions/medicine/handleRegister'
import TopArea from '../../components/TopArea/TopArea'
import Footer from '../../components/Footer/Footer'

// Função auxiliar para extrair o nome do arquivo do URI
const extractFileName = (uri) => {
    return uri.split('/').pop() // Extrai o nome do arquivo do URI
}

export default function RegisterMedicineScreen({ navigation }) {
    // Estados para armazenar os valores dos campos do formulário
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState(null) 
    const [bula, setBula] = useState(null) 
    const [imageName, setImageName] = useState('Nenhuma imagem selecionada')
    const [bulaName, setBulaName] = useState('Nenhuma bula selecionada')

    // Função para seleção de uma imagem usando o DocumentPicker
    const handleImagePick = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: 'image/*', // Permite selecionar qualquer tipo de imagem
                copyToCacheDirectory: true // Copia o arquivo selecionado para o diretório de cache
            })
            console.log('Resultado completo da seleção de imagem:', result); // Log completo do resultado
            
            if (!result.canceled) {
                const { assets } = result;
                if (assets && assets.length > 0) {
                    const selectedAsset = assets[0];
                    setImage(selectedAsset); // Atualiza o estado com o arquivo de imagem selecionado
                    setImageName(selectedAsset.name || extractFileName(selectedAsset.uri)); // Atualiza o nome do arquivo de imagem
                    console.log('Imagem selecionada:', selectedAsset);
                }
            } else {
                console.log('Seleção de imagem cancelada');
            }
        } catch (error) {
            console.error('Erro ao selecionar a imagem:', error) 
        }
    }

    // Função para seleção de uma PDF (bula) usando o DocumentPicker
    const handleBulaPick = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: 'application/pdf', // Permite selecionar apenas arquivos PDF
                copyToCacheDirectory: true // Copia o arquivo selecionado para o diretório de cache
            })
            console.log('Resultado completo da seleção de bula:', result); // Log completo do resultado
            
            if (!result.canceled) {
                const { assets } = result;
                if (assets && assets.length > 0) {
                    const selectedAsset = assets[0];
                    setBula(selectedAsset); // Atualiza o estado com o arquivo PDF da bula selecionado
                    setBulaName(selectedAsset.name || extractFileName(selectedAsset.uri)); // Atualiza o nome do arquivo PDF
                    console.log('Bula selecionada:', selectedAsset);
                }
            } else {
                console.log('Seleção de bula cancelada');
            }
        } catch (error) {
            console.error('Erro ao selecionar a bula:', error) 
        }
    }

    // Chama a função handleRegister passando os dados do formulário e os arquivos selecionados
    const onRegister = () => {
        if (!name || !category || !description || !price || !image || !bula) {
            Alert.alert('Por favor, preencha todos os campos e selecione os arquivos')
            console.log('Campos ou arquivos ausentes:')
            console.log('Nome:', name)
            console.log('Categoria:', category)
            console.log('Descrição:', description)
            console.log('Preço:', price)
            console.log('Imagem:', image)
            console.log('Bula:', bula)
            return
        }
        console.log('Dados para registro:', { name, category, description, price, image, bula })
        handleRegister(navigation, image, name, category, description, bula, price)
    }

    return (
        <SafeAreaView style={styles.container}>
            <TopArea /> 

            <View style={styles.contentContainer}>
                <Text style={styles.title}>Cadastro do Remédio</Text>
                
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome"
                    value={name}
                    onChangeText={(text) => setName(text)} // Atualiza o estado com o texto digitado
                />

                <TextInput
                    style={styles.input}
                    placeholder="Digite a categoria"
                    value={category}
                    onChangeText={(text) => setCategory(text)} // Atualiza o estado com o texto digitado
                />

                <TextInput
                    style={styles.input}
                    placeholder="Digite a descrição"
                    value={description}
                    onChangeText={(text) => setDescription(text)} // Atualiza o estado com o texto digitado
                />

                <TextInput
                    style={styles.input}
                    placeholder="Digite o preço"
                    value={price}
                    onChangeText={(text) => setPrice(text)} // Atualiza o estado com o texto digitado
                    keyboardType="numeric" // Define o teclado como numérico
                />

                <TouchableOpacity style={styles.button} onPress={handleImagePick}>
                    <Text style={styles.buttonText}>Selecionar Imagem</Text>
                </TouchableOpacity>
                <Text style={styles.fileName}>{imageName}</Text>

                <TouchableOpacity style={styles.button} onPress={handleBulaPick}>
                    <Text style={styles.buttonText}>Selecionar Bula (PDF)</Text>
                </TouchableOpacity>
                <Text style={styles.fileName}>{bulaName}</Text>

                <TouchableOpacity style={styles.button} onPress={onRegister}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
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
