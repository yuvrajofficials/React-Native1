import { StyleSheet, Text, View,TextInput,ScrollView } from 'react-native'
import React from 'react'

const HeaderHori = () => {
  return (
    <View style={styles.container}>
<ScrollView horizontal={true} >
   <Text style={styles.card1}>One</Text>
   <Text style={styles.card2}>Two</Text>
   <Text style={styles.card3}>Three</Text>
   <Text style={styles.card4}>Four</Text>
    <Text style={styles.card1}>One</Text>
   <Text style={styles.card2}>Two</Text>
   <Text style={styles.card3}>Three</Text>
   <Text style={styles.card4}>Four</Text>
    <Text style={styles.card1}>One</Text>
   <Text style={styles.card2}>Two</Text>
   <Text style={styles.card3}>Three</Text>
   <Text style={styles.card4}>Four</Text>
    <Text style={styles.card1}>One</Text>
   <Text style={styles.card2}>Two</Text>
   <Text style={styles.card3}>Three</Text>
   <Text style={styles.card4}>Four</Text>
    <Text style={styles.card1}>One</Text>
   <Text style={styles.card2}>Two</Text>
   <Text style={styles.card3}>Three</Text>
   <Text style={styles.card4}>Four</Text>
    <Text style={styles.card1}>One</Text>
   <Text style={styles.card2}>Two</Text>
   <Text style={styles.card3}>Three</Text>
   <Text style={styles.card4}>Four</Text>
    <Text style={styles.card1}>One</Text>
   <Text style={styles.card2}>Two</Text>
   <Text style={styles.card3}>Three</Text>
   <Text style={styles.card4}>Four</Text>
    <Text style={styles.card1}>One</Text>
   <Text style={styles.card2}>Two</Text>
   <Text style={styles.card3}>Three</Text>
   <Text style={styles.card4}>Four</Text>
    <Text style={styles.card1}>One</Text>
   <Text style={styles.card2}>Two</Text>
   <Text style={styles.card3}>Three</Text>
   <Text style={styles.card4}>Four</Text>
   </ScrollView>
    </View>
  )
}

export default HeaderHori;

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row'
  },
  card1:{
   flex:1,
   alignItems:'center',
   justifyContent:'center',
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