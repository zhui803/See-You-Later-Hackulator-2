import * as REACT from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import {Dropdown} from 'react-native-material-dropdown';

import Counter from './Counter';
import DateTime from './DateTime';

const AddTasks = () => {
    const [eventDate, setEventDate] = useState("");
    const [eventTitle, setEventTitle] = useState('Default event');
    const [task, setTask] = useState("");
    const [categoryOpen, setCatOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Health', value: 'health'},
        {label: 'Fitness', value: 'fitness', parent: 'health'},
        {label: 'Mental Health', value: 'mentalhealth', parent: 'health'},
        {label: 'Work', value: 'work'},
        {label: 'Housework', value: 'housework', parent: 'work'},
        {label: 'Job', value: 'job', parent: 'work'},
      ]); 
      
    {/* Make sure for the category to make it so user can type in it and also have it drop down to pre-made ones or make a new one if not there */}
    return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <H1 content="Add Tasks"></H1>
        {/* This is the code block for the task adding input */}
        
        <H2 content = "Enter a task"> </H2>
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style = {styles.inputView}>
            <TextInput
                style={styles.Info_Input}
                
                placeholder="Enter Task"
                placeholderTextColor="#014421"
                onChangeText={(task) => setTask(task)}
            />         
        </KeyboardAvoidingView>
        
        <H2 content="Choose a category"></H2>
        <DropDownPicker
            searchTextInputProps={{
              maxLength: 50
            }}
            addCustomItem={true}
            searchPlaceholder="Search..."
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            categorySelectable={true}
            searchable={true}          
        />

        
        {/* Code for the date and time picker goes here, looking into the code behind it */}
        <View style={styles.container}>
        <H2 content = "Time and Frequency"></H2>
        <H5 content = "How often should this task repeat and when?"></H5>
          <View style={styles.inputView}>
            <BodyText>Enter here</BodyText>
            <TextInput
              style={styles.Info_Input}
              value={eventTitle}
              onChangeText={text => setEventTitle(text)}
            />
            <BodyText>
              {moment
                .utc(TIME_NOW_IN_UTC)
                .local()
                .format('lll')}
            </BodyText>
          </View>
          <TouchableOpacity style={styles.button}>
            <BodyText color = '#FFFFFF' content = 'Add this event to calendar'/>
          </TouchableOpacity>
          {/*We want to also have the saved time and day onto the tasks screen*/}
        </View>

        <H2 content = "Choose Reward"></H2>
        <BodyText content = "How many coins will you get?"></BodyText>
        <Counter /> {/* We need to make a state variable or somehow have the counter value be displayed in tasks */}

      {/* This is the code block for the Create Task button */}
      <TouchableOpacity style={styles.createTaskButton}>
        <Text style={styles.createTaskButtonText}>+ Create Task</Text> 
      </TouchableOpacity> 


      
      
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#36454F',
    },
    inputView: {
        backgroundColor: 'white',
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    Info_Input: {
        fontFamily: 'Helvetica',
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    createTaskButton: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#014421",
      },
    createTaskButtonText: {
        fontFamily: 'Helvetica',
        color: '#FFFFFF'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#014421',
      padding: 10,
      marginTop: 10,
      borderRadius: 10
    }

  });

  export default function App({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('AddTask')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Tasks Page</Text>
        </View>
    );
}