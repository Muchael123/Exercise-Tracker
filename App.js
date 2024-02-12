import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import exercises from './assets/data/exercises.json'

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.Exercises}>
      <Text style={styles.text1}>{exercises[0].name}</Text>
      <Text style={styles.text2}>{exercises[0].muscle.toLocaleUpperCase()} | {exercises[0].equipment.toLocaleUpperCase()}</Text>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
    padding: 10,
    justifyContent: "center",
  },
  Exercises: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  text1: {
    fontSize: 20,
    fontWeight: '500'
  },
  text2: {
    color: 'dimgray'
  }
});
