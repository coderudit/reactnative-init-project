import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  const onPressHandler = () => {
    props.onDeleteItem(props.id);
    //OR <Pressable onPress = {props.onDeleteItem.bind(this, props.id)}
  };
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={onPressHandler}
      style={(pressData) => pressData.pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
export default GoalItem;
