import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

// Importações de telas
import LoginScreen from './src/screens/geral/LoginScreen'
import SignUpScreen from './src/screens/geral/SingUpScreen'

// Páginas do usuário
import UserMenuScreen from './src/screens/user/UserMenuScreen'
import HomeScreen from './src/screens/user/HomeScreen'
import CalendarScreen from './src/screens/user/CalendarScreen'
import DictionaryScreen from './src/screens/user/DictionaryScreen'
import MedicineScreen from './src/screens/user/MedicineScreen'

// Páginas do admin
import AdminMenuScreen from './src/screens/admin/AdminMenuScreen'
import UserListScreen from './src/screens/admin/UserListScreen'
import UserDetailsScreen from './src/screens/admin/UserDetailsScreen'
import RegisterUserScreen from './src/screens/admin/RegisterUserScreen'
import MedicineListScreen from './src/screens/admin/MedicineListScreen'
import MedicineDetailsScreen from './src/screens/admin/MedicineDetailsScreen'
import RegisterMedicineScreen from './src/screens/admin/RegisterMedicineScreen'

// Componentes
import Footer from './src/components/Footer/Footer'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function UserDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Calendar" component={CalendarScreen} />
      <Drawer.Screen name="Dictionary" component={DictionaryScreen} />
      <Drawer.Screen name="UserMenu" component={UserMenuScreen} />
      <Drawer.Screen name="Medicine" component={MedicineScreen} />
    </Drawer.Navigator>
  )
}

function AdminDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="AdminMenu" component={AdminMenuScreen} />
      <Drawer.Screen name="UserList" component={UserListScreen} />
      <Drawer.Screen name="MedicineList" component={MedicineListScreen} />
      <Drawer.Screen name="UserDetails" component={UserDetailsScreen} />
    </Drawer.Navigator>
  )
}

export default function App() {
  const [userRole, setUserRole] = useState(null) // Controle de estado para o papel do usuário

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userRole === null ? (
          // Rotas de autenticação
          <>
            <Stack.Screen
              name="Login"
              options={{ headerShown: false }}
            >
              {(props) => <LoginScreen {...props} setUserRole={setUserRole} />}
            </Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
          </>
        ) : userRole === 'admin' ? (
          // Drawer para Admin
          <Stack.Screen name="AdminDrawer" component={AdminDrawer} options={{ headerShown: false }} />
        ) : (
          // Drawer para Usuário
          <Stack.Screen name="UserDrawer" component={UserDrawer} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
