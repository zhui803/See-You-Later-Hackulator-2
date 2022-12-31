import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
const Counter = () => {
    const [count, setCount] = useState(0);
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
           <Text color = '#014421'>$ {count} </Text>
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
    }
})


export default Counter;