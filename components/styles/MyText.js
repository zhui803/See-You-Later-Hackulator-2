import { StyleSheet, Text } from "react-native";

//This file contains all the text types we use for easy implementation.
export function H1(props) {
  return <Text style={styles.h1}>{props.content}</Text>;
}
export function H2(props) {
  return <Text style={styles.h2}>{props.content}</Text>;
}
export function H3(props) {
  return <Text style={styles.h3}>{props.content}</Text>;
}
export function H4(props) {
  return <Text style={styles.h4}>{props.content}</Text>;
}
export function H5(props) {
  return <Text style={styles.h5}>{props.content}</Text>;
}
export function BodyText(props) {
  return <Text style={styles.bodyText}>{props.content}</Text>;
}
export function SmallText(props) {
  return <Text style={styles.smallText}>{props.content}</Text>;
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 39.8,
  },
  h2: {
    fontSize: 33.2,
  },
  h3: {
    fontSize: 27.6,
  },
  h4: {
    fontSize: 24,
  },
  h5: {
    fontSize: 19.2,
  },
  bodyText: {
    fontSize: 16,
  },
  smallText: {
    fontSize: 13.3,
  },
});
