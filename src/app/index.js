import { FlatList, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import ExerciseList from '../components/ExerciseList.jsx'
import { useQuery} from "@tanstack/react-query";
import { gql } from "graphql-request";
import client from "../graphqlClient.js";

const exerciseQuery = gql`
query Exercises($muscle: String, $name: String){
  Exercises(muscle: $muscle, name: $name){
      equipment
      muscle
      name
  }
}`

export default function App() {
  const {data, isLoading, error} = useQuery({
    queryKey: ['Exercises'],
    queryFn: () => {
      return client.request({ document: exerciseQuery })
    }
  })

  if(isLoading){
    return <ActivityIndicator/>
  }
  if(error){
    return <Text>Failed to fetch data</Text>
  }
  return (
    <View style={styles.container}>
      
      <FlatList
      contentContainerStyle={{gap:10}}
      keyExtractor={(item, index) => item.name+index}
        data={data?.Exercises}
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
