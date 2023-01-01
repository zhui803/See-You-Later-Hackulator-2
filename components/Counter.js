import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import AddTask from './AddTask'
const Counter = () => {
    const [count, setCount] = useState(0);
    const [res, setRes] = useState();
   return (
        <View>
           <Button
             style = {styles.increment}
             onPress={() => {setCount(count + 1)}} title="+"
           />
           <Button
             style = {styles.decrement}
             onPress={() => {setCount(count - 1)}} title="-"
           />
           <Text color = '#E5DAF6'> {count} </Text>
           <Button
                style = {styles.nextButton}
                onPress={() => this.props.navigation.goBack(<AddTask />)} title = "done"
           />
       </View>
   );
}



const styles = StyleSheet.create({
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
})


export default Counter;