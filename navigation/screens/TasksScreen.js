import * as React from "react";
import {useState, useEffect} from 'react';
import { KeyboardAvoidingView, Alert, Modal, Pressable, StyleSheet, Button, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);


  const [showInputs, setShowInputs] = React.useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  {/*reward-related constructors*/}
  const [money, setMoney] = useState(100);
  const [rewards, setRewards] = useState([]);
  const [rewardsID, setRewardsID] = useState(0);
  const [rewardName, setRewardName] = useState("");
  const [rewardValue, setRewardValue] = useState("");

  const handleButtonPress = () => {
    setShowInputs(!showInputs);
  };


  {/*New Event constructors */}
  const [taskName, setTaskName] = useState("");
  const [taskID, setTaskID] = useState([]);


  const [categories, setCategories] = useState("");
  const [catID, setCatID] = useState([]);

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  


  const categoryData = [
    {key: '1', value: 'Fitness'},
    {key: '2', value: 'Health'},
    {key: '3', value: 'Education'},
    {key: '4', value: 'Nutrition'},
    {key: '5', value: 'Housework'},
    {key: '6', value: 'Social'},
    {key: '7', value: 'Job'},
    {key: '8', value: 'Free Time'}
    //make it so that you can add new data soon
  ]

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
    if (rewardValue != "" && rewardName != "") {
      const valid = money >= parseInt(rewardValue);
      const reward = {
        id: rewardsID,
        description: rewardName,
        cost: rewardValue,
        valid: valid,
      };
      setRewardsID(parseInt(rewardsID) + 1);
      setRewards([...rewards, reward]);
    }
    setRewardValue("");
    setRewardName("");
  };



  const handleAddTask = () => {
    Keyboard.dismiss();
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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Text style={styles.modalTitle}>Enter a Task:</Text>
            <TextInput style={styles.input2} placeholder={'Enter Your Task'} value={taskName} onChangeText={text => setTaskName(text)} />
            
            <Text style={styles.modalTitle}>Choose a Category:</Text>

            <Text content = "How often should this task repeat and when?"></Text>
            <View>
            <Button onPress={showDatepicker} title="Show date picker!" />
            <Button onPress={showTimepicker} title="Show time picker!" />
            <Text>selected: {date.toLocaleString()}</Text>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
                dateFprmat = "dayofweek day month"
              />
              
            )}





          </View>
            
            <TouchableOpacity
              style={styles.addModalWrapper}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.addModalText}> + Add New Task</Text>
            </TouchableOpacity>



          </View>
        </View>
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
    backgroundColor: '#E5DAF6',
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
  backgroundColor: "5D2AA8",
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
  textAlign: "center"
}
});
