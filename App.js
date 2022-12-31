import React from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


const App = () => {
  const { width, height } = Dimensions.get('window');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
        >
          <View style={{ width, height }}>
            <Text>Screen 1</Text>
          </View>
          <View style={{ width, height }}>
            <Text>Screen 2</Text>
          </View>
          <View style={{ width, height }}>
            <Text>Screen 3</Text>
          </View>
          <View style={{ width, height }}>
            <Text>Screen 4</Text>
          </View>
          <View style={{ width, height }}>
            <Text>Screen 5</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
