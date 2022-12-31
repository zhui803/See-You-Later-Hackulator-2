// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// // import * as React from 'react';
// import { H1 } from "./components/styles/MyText";
// import MainContainer from './navigation/MainContainer';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <MainContainer/>
//       <H1 content="Open up App.js to start working on your app!"></H1>
//       <StatusBar style="auto" />
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });


import * as React from 'react';
import MainContainer from './navigation/MainContainer';

function App() {
  return (
    <MainContainer/>
  );
}

export default App;