
import { Pressable, StyleSheet, Text } from "react-native";
import {Link} from 'expo-router'
const ExerciseList = ({item}) => {
    return(
      <Link href={`/${item.name}`} style={styles.Exercises} asChild>
      <Pressable >
      <Text style={styles.text1}>{item.name}</Text>
      <Text style={styles.text2}>
        <Text style={styles.subValue}>{item.muscle}</Text>
         |{" "} <Text style={styles.subValue}>{item.equipment}</Text>
        
      </Text>
    </Pressable>
    </Link> 
    )
  }
  export default ExerciseList

  const styles = StyleSheet.create({
    Exercises: {
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 10,
      gap: 5,
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
  