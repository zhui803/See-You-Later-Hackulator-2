import {
    Alert, StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Modal,
  } from "react-native";



//import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';

import Counter from './Counter';
//import DateTime from './DateTime';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E5DAF6',
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
        backgroundColor: "#5D2AA8",
      },
    createTaskButtonText: {
        fontFamily: 'Helvetica',
        color: '#FFFFFF'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#5D2AA8',
      padding: 10,
      marginTop: 10,
      borderRadius: 10
    }

  });

  const AddDetails = () => {
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
        <Text content="Add Tasks"></Text>
        {/* This is the code block for the task adding input */}
        
        <Text> Enter a task </Text>
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
        
        <Text content="Choose a category"></Text>
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
        <Text content = "Time and Frequency"></Text>
        <Text content = "How often should this task repeat and when?"></Text>
          <View style={styles.inputView}>
            <Text>Enter here</Text>
            <TextInput
              style={styles.Info_Input}
              value={eventTitle}
              onChangeText={text => setEventTitle(text)}
            />
            <Text>
              {moment
                .utc(TIME_NOW_IN_UTC)
                .local()
                .format('lll')}
            </Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text color = '#FFFFFF' content = 'Add this event to calendar'/>
          </TouchableOpacity>
          {/*We want to also have the saved time and day onto the tasks screen*/}
        </View>

        <Text content = "Choose Reward"></Text>
        <Text content = "How many coins will you get?"></Text>
        <Counter /> {/* We need to make a state variable or somehow have the counter value be displayed in tasks */}

      {/* This is the code block for the Create Task button */}
      <TouchableOpacity style={styles.createTaskButton}>
        <Text 
            style={styles.createTaskButtonText} 
            onPress={() => this.props.navigation.goBack(<TaskScreen />)} 
            title = "done">+ Create Task</Text> 
      </TouchableOpacity> 


      
      
    </View>
    )
}

  

  export default function AddTasks({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('AddTask')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Tasks Page</Text>

           
        </View>
    );
}