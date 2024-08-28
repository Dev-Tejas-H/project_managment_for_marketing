import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, Pressable, Platform, Button } from 'react-native'
import React, {useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';

const AddProject = () => {
	const [date, setDate] = useState(new Date());
	const [show, setShow] = useState(false);
  
	const onChange = (event, selectedDate) => {
	  const currentDate = selectedDate || date;
	  setShow(Platform.OS === 'ios');
	  setDate(currentDate);
	};
  
	const showDatepicker = () => {
	  setShow(true);
	};

	const[selectedCategory, setSelectedCategory] = useState('English');

	const categories = [
		{ label: 'Web development', value: 'Web development'},
		{ label: 'Emebedded systems', value: 'Emebedded systems'},
		{ label: 'IOT', value: 'IoT'},
		{ label: 'App development', value: 'App development'},
		{ label: 'Cyber security', value: 'Cyber security'},
		{ label: 'Software testing', value: 'Software testing'},
		{ label: 'Data analytics', value: 'Data analytics'},

		
	]

	return (
		<SafeAreaView>
			<ScrollView style={{backgroundColor:"white",paddingHorizontal:20,paddingVertical:20}} showsVerticalScrollIndicator={false}>
				<View style={styles.sectionStyling}>
					<Text>Project title</Text>
					<TextInput style={styles.inputText}
						placeholder='Type project title'
					/>
				</View>
				<View style={styles.sectionStyling}>
					<Text>Team members</Text>
					<TextInput style={styles.inputText}
						placeholder='Type project title'
					/>
				</View>
				<View style={styles.sectionStyling}>
					<Text>Category</Text>
					<View style={styles.inputText}>
						<RNPickerSelect
							onValueChange={(value) => setSelectedCategory(value)}
							items={categories}
							value={selectedCategory}		
						/>
					</View>
				</View>
				<View style={styles.sectionStyling}>
					<Text>Technologies used</Text>
					<TextInput
						placeholder="Ex : C/C++, Java, Python"
						style={styles.inputText}
					/>
				</View>

				<View style={styles.sectionStyling}>
					<Text style={{marginBottom:5}}>Start date</Text>
					<Button onPress={showDatepicker} title="Select start date"/>
					{show && (
						<DateTimePicker
							value={date}
							mode="date"
							display="default"
							onChange={onChange}
						/>
					)}
					<Text style={styles.inputText}> Selected date: {date.toDateString()}</Text>
				</View>

				<View style={styles.sectionStyling}>
					<Text style={{marginBottom:5}}>End date</Text>
					<Button onPress={showDatepicker} title="Select end date"/>
					{show && (
						<DateTimePicker
							value={date}
							mode="date"
							display="default"
							onChange={onChange}
						/>
					)}
					<Text style={styles.inputText}> Selected date: {date.toDateString()}</Text>
				</View>

				<View style={styles.lastSection}>
					<Text>Project Description</Text>
					<TextInput style={styles.projectDescription}
						
					/>
				</View>


				<View style={styles.submitButton}>
					<Pressable style={styles.saveButton}><Text>Save</Text></Pressable>
					<Pressable style={styles.discardButton}><Text>Discard</Text></Pressable>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default AddProject

const styles = StyleSheet.create({

	sectionStyling:{},
	inputText:{
		marginTop:5,
		borderWidth:1,
		paddingVertical:5,
		borderColor:"#CBCDCD",
		borderRadius:5,
		paddingLeft:15,
		marginBottom:15

	},
	projectDescription:{
		marginTop:5,
		borderWidth:1,
		paddingVertical:5,
		height:100,
		borderColor:"#CBCDCD",
		borderRadius:5,
		paddingLeft:15,
		marginBottom:15,

		
	},
	lastSection:{
		marginBottom:20
	},
	submitButton:{
		flexDirection:"row",
		justifyContent:"space-between",
		alignItems:"center",
		marginBottom:40

	},
	saveButton:{
		alignItems:"center",
		justifyContent:"center",
		paddingVertical:8,
		backgroundColor:"green",
		width:"47%",
		borderRadius:5,
	},
	discardButton:{
		alignItems:"center",
		justifyContent:"center",
		paddingVertical:8,
		width:"47%",
		borderColor:"#DDDDDD",
		borderWidth:1,
		borderRadius:5
	}

})