import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  LayoutAnimation,
  Animated,
  TextInput,
  Pressable,
  Vibration,
} from "react-native";
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  BodyText,
  SmallText,
} from "../../components/styles/MyText";
export default function RewardsScreen({ navigation }) {
  const [money, setMoney] = React.useState(0);
  const [showInputs, setShowInputs] = React.useState(false);
  const [text, setText] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [rewards, setRewards] = React.useState([]);
  const [rewardsID, setRewardsID] = React.useState(0);
  const handleButtonPress = () => {
    setShowInputs(!showInputs);
  };

  const handleSubmit = () => {
    const reward = { id: rewardsID, description: text, cost: number };
    setRewardsID(parseInt(rewardsID) + 1);
    setNumber("");
    setText("");
    setRewards([...rewards, reward]);
  };

  const useReward = (cost) => {
    setMoney(money - parseInt(cost));
    Vibration.vibrate(10);
  };
  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <View style={styles.flexRow}>
        <H1 content="Rewards" />
        <View style={{ backgroundColor: "red" }}>
          <H1 content={money} />
        </View>
      </View>
      <View>
        <Button title="Press me" onPress={handleButtonPress} />
        {showInputs && (
          <View>
            <H5 content="Enter Reward:" />
            <TextInput
              style={[styles.inputText, styles.marginBottom]}
              onChangeText={(text) => setText(text)}
              value={text}
            />
            <H5 content="How much will it cost?" />
            <TextInput
              style={[styles.inputNumber, styles.marginBottom]}
              onChangeText={(number) => setNumber(number)}
              value={number}
              keyboardType="numeric"
            />
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        )}
        <View style={{ alignItems: "center" }}>
          {rewards.map((reward) => (
            <View key={reward.id} style={[styles.flexRow, styles.reward]}>
              <H4 style={{ maxWidth: "60%" }} content={reward.description} />
              <View style={{ alignItems: "center" }}>
                <BodyText content="Cost:" />
                <Pressable onPress={() => useReward(reward.cost)}>
                  <View style={styles.costButton}>
                    <BodyText content={reward.cost} />
                  </View>
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  contentContainerStyle: {
    padding: 20,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputText: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },
  inputNumber: {
    width: "50%",
    height: 40,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },
  marginBottom: {
    marginBottom: 20,
  },
  reward: {
    alignItems: "center",
    width: "90%",
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    height: 200,
    backgroundColor: "white",
    borderRadius: "10%",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
  },
  costButton: {
    backgroundColor: "yellow",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    width: 80,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
