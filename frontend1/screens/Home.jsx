import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView style={s.container}>
        <View>
            <Text>Home</Text>
        </View>
    </SafeAreaView>
  )
}

export default Home

const s = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})