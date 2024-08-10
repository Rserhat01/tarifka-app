import React from 'react'
import { Button, Dimensions, Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'
import config from '../../../config'
import useFetch from '../../hooks/useFetch'
import Error from './../../components/Error/Error'
import Loading from './../../components/Loading/Loading'

const Detail = ({route}) => {

  const {id} = route.params
  const {loading, error, data} = useFetch(config.COOK_DETAIL_API+id)

  const meal = data?.meals?.[0] || {};

  if(loading){
    return <Loading />
  }

  if(error){
    return <Error /> 
  }

  const openYouTubeVideo = (videoId) => {
    const url = meal.strYoutube;
    Linking.openURL(url).catch(err => console.error("Failed to open URL: ", err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={{uri: meal.strMealThumb}}
        />
        <Text style={styles.title}>{meal.strMeal}</Text>
        <Text style={styles.title_area}>{meal.strArea}</Text>
        <Text style={styles.description}>{meal.strInstructions}</Text>
        <Button onPress={() => openYouTubeVideo(meal.strYoutubeId)} color="red" title='Watch On Youtube'/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window'), 
    height: 300, 
  },
  title: {
    fontSize: 30,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#be3144',
    margin: 5
  },
  title_area: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#be3144',
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingBottom: 10,
    margin: 5
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5
  },
})