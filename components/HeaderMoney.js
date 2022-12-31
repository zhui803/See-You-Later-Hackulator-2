import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { BodyText } from "./styles/MyText";

export default function HeaderMoney() {
  const [money, setMoney] = useState(0);
  return (
    <View style={styles.header}>
      <BodyText content={money} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "50%",
    padding: "5%",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: "5",
  },
});
