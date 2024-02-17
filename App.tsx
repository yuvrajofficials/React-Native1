import { SafeAreaView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import React from 'react';
import Header from './Components/Header';
import HeaderHori from './Components/Horizontal';

const App = () => {
  const isDark = useColorScheme() ==='dark';
  return (
    <SafeAreaView>

    <View style={styles.container}>
      <Text style={isDark? styles.wht : styles.blk}>App Data</Text>
      <Header/>
      <HeaderHori></HeaderHori>
    </View>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    margin:10,
  },
  wht:{
color:"#fff",
  },
  blk:{
    color:'#000',
  }
});