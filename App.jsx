import { StyleSheet, Text, View, Platform, SafeAreaView, Image, TextInput, Pressable } from 'react-native'
import React, {useState, useCallback, useEffect} from 'react'
import {useFonts} from 'expo-font';
//import { useNavigation } from '@react-navigation/native'
//import { ModalPortal } from 'react-native-modals';



const ProjectIcon = require("./assets/project.png");
const RightArrowIcon = require("./assets/rightarrowicon.png");
const SearchIcon = require("./assets/searchicon.png");


export default function App() {
    const [fontsLoaded] = useFonts({
        'Nunito-SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
        'Nunito-Medium': require('./assets/fonts/Nunito-Medium.ttf'),
        'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
        'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
        'Nunito-ExtraBold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
        'NunitoSans-Medium': require('./assets/fonts/NunitoSans-Medium.ttf'),
      });

  return (
    <SafeAreaView style={styles.container}>

		{/**____________ header_____________ */}

		<View style={styles.headerSection}>
			<Text style={styles.headerText}>Projects catalog</Text>
			<View style={styles.addProject}>
				<Text style={styles.addProjectText}>Add Project</Text>
			</View>
		</View>



		{/** _____________search bar_______________ */}

		<View style={styles.SearchBarInput}>
			<Image source={SearchIcon} style={{width:20, height:20}}/>
			<TextInput
				placeholder="Search for projects"
				style={{flex:1, fontWeight:'500',fontFamily:"Nunito-Medium",fontSize:16}}
				placeholderTextColor={'#7C7E7E'}
			/>
		</View>

		<Text>Recent Projects...</Text>



		
			

    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
	container:{
		paddingHorizontal:20,
		paddingVertical:20
	},
	headerSection:{
		marginTop:20,
		flexDirection:"row",
		alignItems:"center",
		justifyContent:"space-between",
		marginBottom:20
	},
	headerText:{
		fontSize:20,
		fontStyle:"normal",
		fontWeight:"500",
		fontFamily:"Nunito-Bold"
	},
	addProject:{
		paddingVertical:4,
		paddingHorizontal:7,
		backgroundColor:"#399918",
		borderRadius:7,
	},
	addProjectText:{
		fontSize:12,
		color:"#FFFFFF",
		fontWeight:"600",
		fontFamily:"Nunito-SemiBold"
	},
	SearchBarInput:{
		borderColor: '#CBCDCD',
		flexDirection: 'row',
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		padding: 10,
		height: 45,
		gap: 8,
		width: "100%",
		marginBottom:20
	}

})