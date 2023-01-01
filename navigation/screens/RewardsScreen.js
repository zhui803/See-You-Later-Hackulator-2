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
import { useSelector, useDispatch } from "react-redux";

import {
  useMoney,
  addReward,
  updateValidity,
  removeReward,
} from "../../components/redux/slices/mainData";
import {
  incrementRewardsID,
  resetText,
  toggleShowInputs,
  updateNumber,
  updateText,
} from "../../components/redux/slices/rewardsHelper";
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
  const { money, rewards } = useSelector((state) => state.mainData);
  //Helper Data
  const { showInputs, text, number, rewardsID } = useSelector(
    (state) => state.rewardsHelper
  );
  const dispatch = useDispatch();

  const handleButtonPress = () => {
    dispatch(toggleShowInputs());
  };
  React.useEffect(() => {
    dispatch(updateValidity());
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
      dispatch(incrementRewardsID());
      dispatch(addReward(reward));
    }

    dispatchNumber("");
    dispatchText("");
  };
  const dispatchText = (text) => {
    dispatch(updateText(text));
  };
  const dispatchNumber = (number) => {
    dispatch(updateNumber(number));
  };
  const useReward = (cost) => {
    dispatch(useMoney(parseInt(cost)));
    Vibration.vibrate(10);
  };
  const rReward = (id) => {
    dispatch(removeReward(id));
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
        <View style={{ alignItems: "flex-start" }}>
          <Button
            title="+ New Reward"
            color="#5D2AA8"
            onPress={handleButtonPress}
          />
        </View>
        {showInputs && (
          <View>
            <H5 content="Enter Reward:" />
            <TextInput
              style={[styles.inputText, styles.marginBottom]}
              onChangeText={(text) => dispatchText(text)}
              value={text}
            />
            <H5 content="How much will it cost?" />
            <TextInput
              style={[styles.inputNumber, styles.marginBottom]}
              onChangeText={(number) => dispatchNumber(number)}
              value={number}
              keyboardType="numeric"
            />
            <View style={{ alignItems: "flex-start" }}>
              <Button
                title="+ Create Reward"
                onPress={handleSubmit}
                color="#5D2AA8"
                style={{ backgroundColor: "#5D2AA8" }}
              />
            </View>
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
              <Pressable
                style={{ position: "absolute", left: 10, top: 10 }}
                onPress={() => rReward(reward.id)}
              >
                <View>
                  <BodyText content="Delete" />
                </View>
              </Pressable>
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
