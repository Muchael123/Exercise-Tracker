import { Text,  StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import exercises from '../../assets/data/exercises.json'
import { ScrollView } from "react-native";

export default function ExerciseDetails(){
    const params = useLocalSearchParams();
    const exercise = exercises.find((item) => item.name === params.name)

    if(!exercise){
        return <Text>Exercise not found</Text>
    }
    return (
        <ScrollView ContentContainerStyle={styles.Exercises}>
          <Stack.Screen options={{title: exercise.name}}/>
            <Text style={styles.text1}>{exercise.name}</Text>
      <Text style={styles.text2}>
        <Text style={styles.subValue}>{exercise.muscle}</Text>
         |{" "} <Text style={styles.subValue}>{exercise.equipment}</Text>
       
      </Text>
      <Text style={styles.instructions}>{exercise.instructions}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Exercises: {
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 10,
      
    },
    instructions: {
      fontSize:16,
      lineHeight: 22
    },
    subValue: {
        textTransform: 'capitalize',
    },
    text1: {
      fontSize: 20,
      fontWeight: "500",
    },
    text2: {
      color: "dimgray",
    },
  });
  
