import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'

// Importar telas gerais
import LoginScreen from './src/screens/geral/LoginScreen'
import SignUpScreen from './src/screens/geral/SignUpScreen'
import Footer from './src/components/Footer/Footer'

// Importar telas de usuário
import UserMenuScreen from './src/screens/user/UserMenuScreen'
import MedicineScreen from './src/screens/user/MedicineScreen'
import HomeScreen from './src/screens/user/HomeScreen'
import CalendarScreen from './src/screens/user/CalendarScreen'
import DictionaryScreen from './src/screens/user/DictionaryScreen'

// Importar telas de administrador
import AdminMenuScreen from './src/screens/admin/AdminMenuScreen'
import UserListScreen from './src/screens/admin/UserListScreen'
import UserDetailsScreen from './src/screens/admin/UserDetailsScreen'
import RegisterUserScreen from './src/screens/admin/RegisterUserScreen'
import MedicineListScreen from './src/screens/admin/MedicineListScreen'
import MedicineDetailsScreen from './src/screens/admin/MedicineDetailsScreen'
import RegisterMedicineScreen from './src/screens/admin/RegisterMedicineScreen'

// Criar o Stack Navigator
const Stack = createStackNavigator()

// Definir o tema para o React Native Paper
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee', // exemplo de cor primária personalizada
  },
}

// Componente principal do aplicativo
const App = () => (
  <PaperProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator>
        {/* Telas gerais */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Footer" component={Footer} options={{ headerShown: false }} />

        {/* Telas de usuário */}
        <Stack.Screen name="UserMenu" component={UserMenuScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Medicine" component={MedicineScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dictionary" component={DictionaryScreen} options={{ headerShown: false }} />

        {/* Telas de administrador */}
        <Stack.Screen name="AdminMenu" component={AdminMenuScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UserList" component={UserListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UserDetail" component={UserDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterUser" component={RegisterUserScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MedicineList" component={MedicineListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MedicineDetails" component={MedicineDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterMedicine" component={RegisterMedicineScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  </PaperProvider>
)

export default App
