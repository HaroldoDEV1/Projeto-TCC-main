import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// páginas geral
import LoginScreen from './src/screens/geral/LoginScreen'
import SignUpScreen from './src/screens/geral/SingUpScreen'
import Footer from './src/components/Footer/Footer'

// páginas users
import UserMenuScreen from './src/screens/user/UserMenuScreen'
import AdminMenuScreen from './src/screens/admin/AdminMenuScreen'
import MedicineScreen from './src/screens/user/MedicineScreen'
import HomeScreen from './src/screens/user/HomeScreen'
import CalendarScreen from './src/screens/user/CalendarScreen'
import DictionaryScreen from './src/screens/user/DictionaryScreen'
import BulaScreen from './src/'

// páginas admin
import UserListScreen from './src/screens/admin/UserListScreen'
import UserDetailsScreen from './src/screens/admin/UserDetailsScreen'
import RegisterUserScreen from './src/screens/admin/RegisterUserScreen'
import MedicineListScreen from './src/screens/admin/MedicineListScreen'
import MedicineDetailsScreen from './src/screens/admin/MedicineDetailsScreen'
import RegisterMedicineScreen from './src/screens/admin/RegisterMedicineScreen'



const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Footer" component={Footer} options={{ headerShown: false }} />

        <Stack.Screen name="Medicine" component={MedicineScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dictionary" component={DictionaryScreen} options={{ headerShown: false }} />

        <Stack.Screen name="UserList" component={UserListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MedicineList" component={MedicineListScreen} options={{ headerShown: false }} />

        <Stack.Screen name="UserMenu" component={UserMenuScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AdminMenu" component={AdminMenuScreen} options={{ headerShown: false }} />

        <Stack.Screen name="UserDetail" component={UserDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MedicineDetails" component={MedicineDetailsScreen} options={{ headerShown: false }} />

        <Stack.Screen name="RegisterUser" component={RegisterUserScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterMedicine" component={RegisterMedicineScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
