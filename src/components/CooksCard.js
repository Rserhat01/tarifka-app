import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

const CooksCard = ({cooks, onSelect}) => {


  return (
    
      <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
        <Image
            style={styles.image}
            source={{uri: cooks.strMealThumb}}
        />
        <Text style={styles.title}>{cooks.strMeal}</Text>
        </View>
      </TouchableWithoutFeedback>
   
  )
}

export default CooksCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    image: {
        width: Dimensions.get('window'),
        height: 150,
        borderRadius: 16
    },
    title: {
        position: 'absolute',
        textAlign: 'right',
        bottom: 0,
        color: 'white',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        width: '100%',
        fontSize: 24,
        fontWeight: 'bold',

    }
})