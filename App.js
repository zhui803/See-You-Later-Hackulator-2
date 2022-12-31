import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { H1 } from "./components/styles/MyText";
export default function App() {
  return (
    <View style={styles.container}>
      <H1 content="Open up App.js to start working on your app!"></H1>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
