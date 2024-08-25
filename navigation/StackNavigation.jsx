import { useRef, React } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, Animated, Dimensions, Pressable } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as NavigationBar from 'expo-navigation-bar';
import Projects from '../screens/Projects';

const StackNavigation = () => {

    NavigationBar.setBackgroundColorAsync("white");
    const Stack = createNativeStackNavigator();

    const tabOffsetValue = useRef(new Animated.Value(0)).current;

    const getWidth = () => {
        let width = Dimensions.get('window').width;
        width = width - 0;
        return width / 4;
    }

    return (
        <NavigationContainer>
            <StatusBar backgroundColor='white' barStyle="dark-content"/>
            <Stack.Navigator>
                <Stack.Screen name="Projects" component={Projects} options={{headerShown: true, headerTitle:"Projects"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation