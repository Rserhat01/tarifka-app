import React from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import config from '../../../config'
import CategoryCard from '../../components/CategoryCard'
import useFetch from '../../hooks/useFetch'
import Error from './../../components/Error/Error'
import Loading from './../../components/Loading/Loading'

const Category = ({navigation}) => {

  const {loading, error, data} = useFetch(config.CAT_API)

  const categories = data.categories || [];

  const handleCategorySelect = name => {
    navigation.navigate('CooksScreen' ,{name})
  }

  if(loading){
    return <Loading />
  }

  if(error){
    return <Error /> 
  }

  const renderCategory = ({item}) => <CategoryCard category={item} onSelect={() => handleCategorySelect(item.strCategory)}/>


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={categories}
      renderItem={renderCategory}
      keyExtractor={(item) => item.idCategory.toString()}
      />
    </SafeAreaView>
  )
}

export default Category

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  },
})