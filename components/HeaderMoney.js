import { StatusBar } from "expo-status-bar";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { BodyText } from "./styles/MyText";

export default function HeaderMoney() {
  const { money } = useSelector((state) => state.mainData);
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
