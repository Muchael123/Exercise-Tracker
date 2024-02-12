import { Text,  StyleSheet, ScrollView } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import exercises from '../../assets/data/exercises.json'
import { useState } from "react";

export default function ExerciseDetails(){
    const params = useLocalSearchParams();
    const exercise = exercises.find((item) => item.name === params.name)
    const [instruction, SetInstructions] = useState(false)

    if(!exercise){
        return <Text>Exercise not found</Text>
    }
    return (
        <ScrollView contentContainerStyle={styles.Exercises}>
          <Stack.Screen options={{title: exercise.name}}/>
            <Text style={styles.text1}>{exercise.name}</Text>
      <Text style={styles.text2}>
        <Text style={styles.subValue}>{exercise.muscle}</Text>
         |{" "} <Text style={styles.subValue}>{exercise.equipment}</Text>
       
      </Text>
      <Text style={styles.instructions} numberOfLines={instruction ? 0: 3}>{exercise.instructions}</Text>
      <Text style={styles.More} onPress={() => SetInstructions((prev) => !prev)}>{instruction ? 'See Less': 'See More'}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Exercises: {
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 10,
      gap: 12,
    },
    instructions: {
      fontSize:16,
      lineHeight: 22
    },
    More:{
      alignSelf: 'center',
      color: 'gray'
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
  
