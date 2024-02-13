import { Text,  StyleSheet, ScrollView } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import Client from "../graphqlClient";
import { ActivityIndicator } from "react-native";

const exerciseQuery = gql`
query Exercises( $name: String){
  Exercises( name: $name){
      equipment
      instructions
      muscle
      name
  }
}`

export default function ExerciseDetails(){
    const {name} = useLocalSearchParams();
    
    const [Isinstruction, SetInstructions] = useState(false)

    const {data, isLoading, error} = useQuery({
      queryKey: ['Exercises', name],
      queryFn: () => Client.request(exerciseQuery, {name})
    })
  
    if(isLoading){
      return <ActivityIndicator/>;
    }
    if(error){
      return <Text>Failed to fetch Exercises</Text>
    }
    
    const Exercises = data.Exercises[0]
    return (
        <ScrollView contentContainerStyle={styles.Exercises}>
          
          <Stack.Screen options={{title: Exercises?.name}}/>
            <Text style={styles.text1}>{Exercises?.name}</Text>
      <Text style={styles.text2}>
        <Text style={styles.subValue}>{Exercises?.muscle}</Text>
         |{" "} <Text style={styles.subValue}>{Exercises?.equipment}</Text>
       
      </Text>
      <Text style={styles.instructions} numberOfLines={Isinstruction ? 0: 3}>{Exercises?.instructions}</Text>
      <Text style={styles.More} onPress={() => SetInstructions((prev) => !prev)}>{Isinstruction ? 'See Less': 'See More'}</Text>
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
  
