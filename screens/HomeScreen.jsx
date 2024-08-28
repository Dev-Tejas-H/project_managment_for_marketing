import { StyleSheet, Text, View,SafeAreaView, Image, TextInput, Pressable, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const SearchIcon = require("../assets/searchicon.png");


const HomeScreen = ({navigator}) => {
	const navigation = useNavigation();

	const ProjectDetails = [
		{
			id:"1",
			title:"BEL",
			startdate:"27/08/2024",
			enddate:"03/09/2024",
			projectstatus:"pending"
		},
		{
			id:"2",
			title:"BekueiEL",
			startdate:"27/08/2024",
			enddate:"03/09/2024",
			projectstatus:"completed"
		},
		{
			id:"3",
			title:"ijijr",
			startdate:"27/08/2024",
			enddate:"03/09/2024",
			projectstatus:"not started"
		},
		{
			id:"4",
			title:"Tejas",
			startdate:"27/08/2024",
			enddate:"03/09/2024",
			projectstatus:"started"
		},

	];

	return (
		<SafeAreaView>
			<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

				{/**____________ header_____________ */}

				<View style={styles.headerSection}>
					<Text style={styles.headerText}>Projects catalog</Text>
					<Pressable style={styles.addProject} onPress={() => navigation.navigate("AddProject")}>
						<Text style={styles.addProjectText}>Add Project</Text>
					</Pressable>
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
				
				<FlatList
					data={ProjectDetails}
					renderItem={({ item }) => {
						return(
							<View style={styles.projectSection} key={item.id}>
								<Text>{item.title}</Text>
								<Text>{item.startdate}</Text>
								<Text>{item.enddate}</Text>
								<Text>{item.projectstatus}</Text>
							</View>
						)
					}}

				/>




		</ScrollView>	
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
	},
	projectSection:{
		flexDirection:"row",
		alignItems:"center",
		justifyContent:"space-between",
		paddingVertical:16,
		borderBottomColor:"#DDDDDD",
		borderBottomWidth:1
	}

});


export default HomeScreen
