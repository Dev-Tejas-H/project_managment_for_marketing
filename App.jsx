import { NavigationContainer } from "@react-navigation/native";
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen"
import AddProject from "./screens/AddProject";
//import {useFonts} from 'expo-font';


const Stack = createNativeStackNavigator();

export default function App() {
    // const [fontsLoaded] = useFonts({
    //     'Nunito-SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
    //     'Nunito-Medium': require('./assets/fonts/Nunito-Medium.ttf'),
    //     'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    //     'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
    //     'Nunito-ExtraBold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
    //     'NunitoSans-Medium': require('./assets/fonts/NunitoSans-Medium.ttf'),
    //   });

	return(
		<NavigationContainer>
			<Stack.Navigator initialRouteName="HomeScreen">
				<Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
				<Stack.Screen name="AddProject" component={AddProject}/>


			</Stack.Navigator>
		</NavigationContainer>
	)


}


