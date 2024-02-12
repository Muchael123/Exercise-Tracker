import { FlatList, StyleSheet, Text, View } from "react-native";
import exercises from "../../assets/data/exercises.json";
import ExerciseList from '../components/ExerciseList.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      
      <FlatList
      contentContainerStyle={{gap:10}}
      keyExtractor={(item, index) => item.name+index}
        data={exercises}
        renderItem={({item}) => <ExerciseList item={item}/>}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
    padding: 10,
    justifyContent: "center",
  },
  Title:{
    display: 'flex',
    textAlign: 'center',
    marginBottom: 6,
    fontSize: 30,
    fontWeight: 'bold'
  }
});
