// src/screens/NotImplementedScreen.js

import { View, Text, Image, StyleSheet } from "react-native";
import React from 'react';
import Lottie from 'lottie-react-native';
// import Updatelottie from '../lottie/index'

const NotImplementedScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/capybara+copy.png",
        }}
        style={styles.image}
        resizeMode="contain"
      /> */}
      <Lottie source={require('../../assets/lottie_assets/42479-page-not-found-404.json')} autoPlay loop
        style={
            styles.animation
        }
      />

      <Text style={styles.text}>Working On It</Text>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize:20,
    fontWeight: "bold",
    color: "gray",
  },
  animation:{
    height:290,
    width:290,
    padding:30,
    border:StyleSheet.hairlineWidth,
    borderColor:'gray',
    borderRadius:50,

  }
//   image: {
//     width: "80%",
//     aspectRatio: 2 / 1,
//   },
});

export default NotImplementedScreen;