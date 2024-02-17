import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
   <Text style={styles.card1}>One</Text>
   <Text style={styles.card2}>Two</Text>
   <Text style={styles.card3}>Three</Text>
   <Text style={styles.card4}>Four</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    
  },
  card1:{
   width:50,
   height:50,
    backgroundColor:'red',
  },
  
  card2:{
    
   width:50,
   height:50,
    backgroundColor:'green',
  },
  
  card3:{
    
   width:50,
   height:50,
    backgroundColor:'blue',
  },
  
  card4:{
    
   width:50,
   height:50,
    backgroundColor:'yellow',
  },
})