import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import SectionList from "react-native/Libraries/Lists/SectionList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens
import HomeScreen from "./screens/HomeScreen";
import TasksScreen from "./screens/TasksScreen";
import RewardsScreen from "./screens/RewardsScreen";
import MapScreen from "./screens/MapScreen";

//Screen names
const homeName = "Home";
const tasksName = "Tasks";
const rewardsName = "Rewards";
const mapName = "Map";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#D9D9D9",
          },
          headerTitle: () => <HeaderMoney />,
        }}
      >
        <Stack.Screen name="Home" component={RewardsScreen} />
      </Stack.Navigator>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          //arrow function
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === tasksName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === rewardsName) {
              iconName = focused ? "trophy" : "trophy-outline";
            } else if (rn === mapName) {
              iconName = focused ? "ios-location" : "ios-location-outline";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 20, fontSize: 20 },
          style: { padding: 20, height: 70 },
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={tasksName} component={TasksScreen} />
        <Tab.Screen name={rewardsName} component={RewardsScreen} />
        <Tab.Screen name={mapName} component={MapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
