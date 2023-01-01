import * as React from "react";
import {useState, useEffect} from 'react';
import { SafeAreaView, KeyboardAvoidingView, Platform, Alert, Modal, Pressable, StyleSheet, Button, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './Task';

//import DropDownPicker from 'react-native-dropdown-picker';
import Counter from '../../components/Counter';

import DropDownPicker from 'react-native-dropdown-select-list';

import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePicker2 from '@react-native-community/datetimepicker'; 

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  BodyText,
  SmallText,
} from "../../components/styles/MyText";


export default function App() {
  const [taskItems, setTaskItems] = useState([]);


  const [showInputs, setShowInputs] = React.useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  {/*reward-related constructors*/}
  const [money, setMoney] = useState(100);
  const [rewards, setRewards] = useState([]);
  const [rewardsID, setRewardsID] = useState(0);
  const [rewardName, setRewardName] = useState("");
  const [rewardValue, setRewardValue] = useState(0);

  const handleButtonPress = () => {
    setShowInputs(!showInputs);
  };


  {/*New Event constructors */}
  const [taskName, setTaskName] = useState("");
  const [taskID, setTaskID] = useState(0);
  const [tasks, setTasks] = useState([]);


  const [categories, setCategories] = useState([]);
  const [categoriesID, setCategoriesID] = useState(0);
  const [categoriesName, setCategoriesName] = useState("");

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [timeDate, setTimeDate] = useState(new Date());
  const [timeMode, setTimeMode] = useState('time');
  const [timeShow, settimeShow] = useState(false);

  const [resultTime, setResultTime] = useState(new Date());
  const [resultDay, setResultDay] = useState(new Date());

  const [count, setCount] = useState(0);
  const [res, setRes] = useState();

  
  

  //const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setRewards((prevRewards) =>
      prevRewards.map((reward) => ({
        ...reward,
        valid: money >= parseInt(reward.cost),
      }))
    );
  }, [money]);

  const handleSubmit = () => {
    setModalVisible(!modalVisible)
    if (taskName != "" && categoriesName != "") {
      const valid = money >= parseInt(rewardValue);
      const taskItem = {
        id: taskID,
        description: rewardName,
        cost: rewardValue,
        valid: valid,
      };
      setRewardsID(parseInt(rewardsID) + 1);
      setTaskItems([...taskItems, taskItem]);
    }
    
    setTaskName("");
    setCategoriesName("");
    <DateTimePicker minimumDate = {date}/>;

    setRewardValue(0);
  };



  const handleAddTask = () => {
    Keyboard.dismiss();
    setModalVisible(!modalVisible)
    setTaskItems([...taskItems, taskName])
    setTaskItems(null);
    
  }

  const handleAddCategory = () => {
    <View style = {{paddingHorizontal: 20, paddingVertical: 50, flex: 1}}>
      <DropDownPicker
          categoryData = {categoryData}
          selectCategory ={setCategories}
          boxStyles={{backgroundColor: 'light purple'}}
          dropdownItemStyles={{marginHorizontal:10}}
          dropdownTextStyles={{color: white}}
          placeholder = "Select category"
          maxHeight = {100}              
      />
      
    </View>
  }


  const AddTaskDetails = () => {
    
    Keyboard.dismiss();
    //setModalVisible(true);
      {/* Make sure for the category to make it so user can type in it and also have it drop down to pre-made ones or make a new one if not there */}
    return (
      <View style={styles.centeredView}>
      
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
    
    );
    
    

  }




  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
 };



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
        <TextInput style={styles.input} placeholder={'Write a task'} value={taskName} onChangeText={text => setTaskName(text)} />
        
        
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <ScrollView>
          <View style={styles.modalView}>

            <Text style={styles.modalTitle}>Enter a Task:</Text>
            <TextInput style={styles.input2} placeholder={'Enter Your Task'} value={taskName} onChangeText={text => setTaskName(text)} />
            
            <Text style={styles.modalTitle}>Choose a Category:</Text>
            <TextInput style={styles.input2} placeholder={'Enter Task Category'} value={categoriesName} onChangeText={text => setCategoriesName(text)} />

            <Text style={styles.modalText}>When should this task happen?</Text>

            <Text style={styles.modalTitle}>Set a Time</Text>

            <Text style={styles.modalText}>When should this task happen?</Text>
            {/* The date picker */}  
            
            <View>
         <Button onPress={showDatepicker} title="Show date picker!" />
            </View>
               {show && (
                  <DateTimePicker 
                     testID="dateTimePicker"
                     value={date}
                     mode={mode}
                     is24Hour={true}
                     display="default"
                     onChange={changeSelectedDate}
            />
            )}
            
            {/* The time picker */}      
            
         <View>
            <Button onPress={showTimepicker} title="Your Time Picker" />
         </View>
         {timeShow && (
            <DateTimePicker2
                  value={timeDate}
                  mode={timeMode}
                  is24Hour={true}
                  display="default"
                  onChange={changeSelectedDate} />
         )}


         
         <Text style={styles.modalText}>When should this task happen?</Text>

         <Text style={styles.modalTitle}>Choose Reward</Text>
         <Text style={styles.modalText}>What should be amount given for achieving this task</Text>
         <View>
           <Button
           backgroundColor = '#5D2AA8'
             style = {styles.increment}
             onPress={() => {setRewardValue(rewardValue + 1)}} title="+"
           />
           <Button
           backgroundColor = '#5D2AA8'
             style = {styles.decrement}
             onPress={() => {setRewardValue(rewardValue - 1)}} title="-"
           />
           <Text position ='relative'  height = '500' align = 'center' color = '#E5DAF6' fontWeight = 'bold'> {rewardValue} </Text>
       </View>
      
            
            <TouchableOpacity
              style={styles.addModalWrapper}
              onPress={() => {handleSubmit()}}
            >
              <Text align = 'center' style={styles.addModalText}> + Add New Task</Text>
            </TouchableOpacity>



          </View>
        </ScrollView>
      </Modal>


        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addText} title = "Add Task">
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
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
  input2: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#E5E3E8',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    marginBottom: 20
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
  addModalWrapper: {
    width: 180,
    height: 60,
    backgroundColor: '#5D2AA8',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    fontSize: 50
  },
  addModalText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFF'

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
    borderRadius: 50,
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
  borderRadius: 20
},
modalView: {
  margin: 20,
  backgroundColor: "#E5DAF6",
  padding: 50,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 10,
  elevation: 7
},
modalTitle: {
  marginBottom: 15,
  textAlign: "center",
  fontSize: 33,
  fontWeight: 'bold'
},
modalText: {
  marginBottom: 20,
  textAlign: "center",
  fontSize: 15,
  
},
increment: {
  flex: 1,
  backgroundColor: '#FFFFFF',
  flexDirection: 'row'
},
decrement: {
  flex: 0.5,
  backgroundColor: '#FFFFFF',
  flexDirection: 'row'
},
backButton: {
  flex: 1.5,
  backgroundColor: '#FFFFFF',
  flexDirection: 'row-reverse'
}
});
