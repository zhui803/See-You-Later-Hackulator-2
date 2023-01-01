import * as React from "react";
import {useState} from 'react';
import { KeyboardAvoidingView, Alert, Modal, Pressable, StyleSheet, Button, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './Task';
import AddTask from '../../components/AddTask';
import DropDownPicker from 'react-native-dropdown-picker';
import Counter from '../../components/Counter';




export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [eventDate, setEventDate] = useState("");
  const [eventTitle, setEventTitle] = useState('Default event');
  const [newTask, setNewTask] = useState("");
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
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);    

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
    
  }
const DateTime = () => {
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      if (Platform.OS === 'android') {
        setShow(false);
        // for iOS, add a button that closes the picker
      }
      else {
        setShow(true);
      }
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  
    
  };

  const AddTaskDetails = () => {
    Keyboard.dismiss();
    
    {/* Make sure for the category to make it so user can type in it and also have it drop down to pre-made ones or make a new one if not there */}
    return (
    <View style={styles.container}>
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
                onChangeText={(newTask) => setTask(newTask)}
            />         
        </KeyboardAvoidingView>
        
        <Text content="Choose a category"></Text>
        <DropDownPicker
            searchTextInputProps={{
              maxLength: 50
            }}
            addCustomItem={true}
            searchPlaceholder="Search..."
            categoryOpen={setCatOpen}
            value={value}
            items={items}
            setValue={setValue}
            setItems={setItems}
            categorySelectable={true}
            searchable={true}          
        />

        
        {/* Code for the date and time picker goes here, looking into the code behind it */}
        <View style={styles.container}>
        <Text content = "Time and Frequency"></Text>
        <Text content = "How often should this task repeat and when?"></Text>
        <View>
          <Button onPress={<showDatePicker/>} title="Show date picker!" />
          <Button onPress={<showTimePicker/>} title="Show time picker!" />
          <Text>selected: {date.toLocaleString()}</Text>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={<onChange/>}
            />
          )}
        </View>
          <TouchableOpacity style={styles.button} title = "Add event to calendar "/>
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












  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tasks</Text>
        <View style={styles.items}>
          {/* {Location of the Tasks} */}
          
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }

        </View>
      </View>
        
      </ScrollView>

      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => AddTaskDetails()} style={styles.addText} title = "Add Task">
          <View style={styles.addWrapper}>
            <Text style={styles.addText} >Add Task
            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#grey',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
    fontSize: 100,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    fontSize: 50
  },
  addText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#5D2AA8'

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
