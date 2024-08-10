import React from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import config from '../../../config'
import CooksCard from '../../components/CooksCard'
import useFetch from '../../hooks/useFetch'
import Error from './../../components/Error/Error'
import Loading from './../../components/Loading/Loading'

const Cooks = ({navigation, route}) => {

  const {name} = route.params
  const {loading, error, data} = useFetch(config.COOKS_API+name)


   const cooks = data.meals || [];  


  const handleCooksSelect = id => {
    navigation.navigate('DetailScreen' ,{id})
  }

  if(loading){
    return <Loading />
  }

  if(error){
    return <Error /> 
  }

  const renderCooks = ({item}) => <CooksCard cooks={item} onSelect={() => handleCooksSelect(item.idMeal)}/>


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={cooks}
      renderItem={renderCooks}
      keyExtractor={(item) => item.idMeal.toString()}
      />
    </SafeAreaView>
  )
}

export default Cooks

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  },
})