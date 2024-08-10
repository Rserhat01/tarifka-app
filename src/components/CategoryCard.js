import React from 'react'
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

const CategoryCard = ({category, onSelect}) => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: category.strCategoryThumb}}
          />
          <Text style={styles.title}>{category.strCategory}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'grey'
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    marginLeft: 10,

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10
  }

})