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
  const [money, setMoney] = React.useState(1000);
  const [rewards, setRewards] = React.useState([]);
  //Helper Data
  const [showInputs, setShowInputs] = React.useState(false);
  const [text, setText] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [rewardsID, setRewardsID] = React.useState(0);
  const handleButtonPress = () => {
    setShowInputs(!showInputs);
  };
  React.useEffect(() => {
    setRewards((prevRewards) =>
      prevRewards.map((reward) => ({
        ...reward,
        valid: money >= parseInt(reward.cost),
      }))
    );
  }, [money]);
  const handleSubmit = () => {
    if (text != "" && number != "") {
      const valid = money >= parseInt(number);
      const reward = {
        id: rewardsID,
        description: text,
        cost: number,
        valid: valid,
      };
      setRewardsID(parseInt(rewardsID) + 1);
      setRewards([...rewards, reward]);
    }
    setNumber("");
    setText("");
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
        <View>
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
                <Pressable
                  onPress={() => useReward(reward.cost)}
                  disabled={!reward.valid}
                >
                  <View
                    style={
                      reward.valid
                        ? styles.costButton
                        : styles.costButtonInvalid
                    }
                  >
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
  costButtonInvalid: {
    backgroundColor: "#D9D9D9",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    width: 80,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
