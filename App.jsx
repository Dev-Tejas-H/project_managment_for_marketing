import { StyleSheet, Text, View, Platform, SafeAreaView, Image } from 'react-native'
import React, {useState, useCallback, useEffect} from 'react'
import { ModalPortal } from 'react-native-modals';
import {useFonts} from 'expo-font';
import { useNavigation } from '@react-navigation/native'


const ProjectIcon = require("./assets/project.png");
const RightArrowIcon = require("./assets/rightarrowicon.png");


export default function App() {
    const [fontsLoaded] = useFonts({
        'Nunito-SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
        'Nunito-Medium': require('./assets/fonts/Nunito-Medium.ttf'),
        'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
        'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
        'Nunito-ExtraBold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
        'NunitoSans-Medium': require('./assets/fonts/NunitoSans-Medium.ttf'),
      });
	const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
		<View style={styles.headerSection}>
			<Text style={styles.headerText}>Welcome to our app...</Text>
			<Text style={styles.headerText}>Good evening...<Text style={styles.userName}>Tejas !</Text></Text>
		</View>


		
			<View style={styles.fieldsSection}>
				<View style={{flexDirection:"row"}}>
					<Image source={ProjectIcon} style={{width:25,height:25}}/>
					<Text style={styles.fieldsText}>Projects</Text>
				</View>
				<Image source={RightArrowIcon} style={{width:35,height:35}}/>
			</View>
			<View style={styles.fieldsSection}>
				<View style={{flexDirection:"row"}}>
					<Image source={ProjectIcon} style={{width:25,height:25}}/>
					<Text style={styles.fieldsText}>Tasks</Text>
				</View>
				<Image source={RightArrowIcon} style={{width:35,height:35}}/>
			</View>
			<View style={styles.fieldsSection}>
				<View style={{flexDirection:"row"}}>
					<Image source={ProjectIcon} style={{width:25,height:25}}/>	
					<Text style={styles.fieldsText}>Clients</Text>
				</View>
				<Image source={RightArrowIcon} style={{width:35,height:35}}/>
			</View>
			<View style={styles.fieldsSection}>
				<View style={{flexDirection:"row"}}>
					<Image source={ProjectIcon} style={{width:25,height:25}}/>
					<Text style={styles.fieldsText}>Teams</Text>
				</View>
				<Image source={RightArrowIcon} style={{width:35,height:35}}/>
			</View>
		

    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
	container:{
		paddingHorizontal:20,
		paddingVertical:20
	},
	headerSection:{
		marginTop:20
	},
	headerText:{
		fontSize:20,
		fontStyle:"normal",
		fontWeight:"500",
		fontFamily:"Nunito-SemiBold"
	},
	userName:{
		fontSize:22,
		color:"green",
		fontStyle:"italic",
		fontWeight:"800",
		fontFamily:"Nunito-Bold"

	},
	fieldsSection:{
		paddingHorizontal:20,
		paddingVertical:16,
		flexDirection:"row",
		alignItems:"center",
		justifyContent:"space-between",
		borderBottomWidth:1,
		
	},
	fieldsText:{
		fontSize:20,
		fontWeight:"600",
		fontFamily:"Nunito-SemiBold",
		marginLeft:15
	},
})