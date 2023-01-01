import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, Button, TextInput,View, Text } from 'react-native';

import {
    H1,
    H2,
    H3,
    H4,
    H5,
    BodyText,
    SmallText,
  } from "../../components/styles/MyText";


export default function HomeScreen({ navigation }) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <View style={styles.container}>
                <Image border = "white" style={styles.image} source={require("../../assets/logo.png")} />
                <Text style={styles.homePageTitle}>LifeHacker</Text>
                <Text style={styles.Caption}>Gamifying Task Planning</Text>
                {/* This is the code block for the email input */}
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.Info_Input}

                        placeholder="Enter Email."
                        placeholderTextColor="#5D2AA8"
                        onChangeText={(email) => setEmail(email)} />
                </View>

                {/* This is the code block for the password input */}
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.Info_Input}
                        placeholder="Enter Password."
                        placeholderTextColor="#5D2AA8"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)} />
                </View>

                {/* This is the code block for the forgot pasword button */}
                <TouchableOpacity>
                    <Text style={styles.forgot_pw}>Forgot Password?</Text>
                </TouchableOpacity>

                {/* This is the code block for the login button */}
                <TouchableOpacity style={styles.login_button}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7D7098',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    homePageTitle: {
      color: '#FFFFFF',
      fontFamily: 'Academy Engraved LET',
      fontSize: 45,
      alignSelf: 'center',
      marginTop: 20,
      marginBottom: 20
    },
    Caption: {
        color: '#FFFFFF',
        fontFamily: 'Helvetica',
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 20,
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
    image: {
      width: 200,
      height: 200, 
      margin: 2,
      align: 'top'
    },
    forgot_pw: {
      fontFamily: 'Helvetica',
      color: '#FFFFFF',
      height: 30,
      marginBottom: 30,
    },
    login_button: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 40,
      backgroundColor: "#5D2AA8",
    },
    loginText: {
      fontFamily: 'Helvetica',
      color: '#FFFFFF'
    }
  });