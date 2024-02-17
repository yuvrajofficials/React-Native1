import { StyleSheet, SafeAreaView, Text, View,TextInput,ScrollView,Image } from 'react-native'
import React from 'react'

const ImageR = () => {
  return (
    
<SafeAreaView>
<View style={styles.Imgt}>
   <Image
  source={{uri: 'https://hips.hearstapps.com/hbu.h-cdn.co/assets/15/46/beautiful-fairy-pools.jpg'}}
  style={styles.ImageF}
/>
<Text>Hello World </Text>
<Text>Nature images. Nature produces the most astoundingly beautiful images: the swirling lava of a volcano, palm trees against a blue sky, snow-capped mountains towering above.</Text>

</View>
</SafeAreaView>
  )
}

export default ImageR

const styles = StyleSheet.create({
 ImageF:{
   width: 380, height: 340,
   
 },
 Imgt:{
   margin:5,
 }
  
})