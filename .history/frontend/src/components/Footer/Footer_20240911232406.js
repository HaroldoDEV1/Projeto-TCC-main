import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Obtém a largura da tela

export default StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', // Alinha os itens verticalmente
    paddingVertical: 10,
    backgroundColor: '#004d40', // Verde escuro para o fundo do rodapé
    borderTopWidth: 1,
    borderTopColor: '#00332e', // Cor mais escura para a borda superior
    width: width, // Garante que o rodapé ocupe a largura total da tela
  },
  footerButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#00796b', // Verde médio para os botões
  },
  footerButtonText: {
    fontSize: 16,
    color: '#ffffff', // Texto branco para melhor contraste
    textAlign: 'center', // Centraliza o texto dentro do botão
  },
});
