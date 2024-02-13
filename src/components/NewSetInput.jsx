import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'

const NewSetInput = () => {
    const [reps,SetReps] = useState('')
    const [weight, SetWeight] = useState('')

    const addSet = () =>{
        console.warn('Log data')
        // Save data in database
        SetReps('')
        SetWeight('')
    } 

  return (
    <View style={styles.container}>
      
        <TextInput value={reps} onChange={SetReps} className='bg-green-500' placeholder='reps' styles={styles.input} />
        <TextInput value={weight} onChange={SetWeight} placeholder='weight' styles={styles.input} />
        <Button onPress={addSet} title='Add'/>
      
    </View>
  )
}

export default NewSetInput

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        margin: 5,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    input:{
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        backgroundColor: 'red',
        flex:1,

    }
})