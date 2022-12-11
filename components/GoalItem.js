import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  const onPressHandler = () => {
    props.onDeleteItem();
  };
  return (
    <Pressable onPress={onPressHandler}>
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
});
export default GoalItem;
