import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const addGoalHandler = (enteredText) => {
    setGoals((prevState) => [
      ...prevState,
      { text: enteredText, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = () => {};
  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        {/* <ScrollView>{goalsList}</ScrollView> */}
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //This causes the main container to take up all the space.
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 1, //Inside the container this inputContainer takes 5/6th of the space.
  },
});
