import React, { useRef, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  Animated,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import logo from '../assets/images/logo.png';

export default function Home({ navigation }) {
  const textStyle = {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: -100,
    marginTop: 50,
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingVertical: 50,
    },
    cardContainer1: {
      width: 340,
      top: 20,
      height: 680,
      backgroundColor: 'white',
      borderRadius: 10,
      margin: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    buttonContainer: {
      marginTop: 50,
      backgroundColor: '#D9D9D9',
      padding: 10,
      borderRadius: 30, 
      resizeMode: 'center',
      width: 150,
      height: 50,
      top: -30,
    },
    buttonText: {
      color: '#D31919',
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',
      top:5
    },
  });

  

  const buttonScale = useRef(new Animated.Value(1)).current;
  const logoScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(logoScale, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(logoScale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  const handlePressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(buttonScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
     

 <ScrollView horizontal={true} style={{ marginTop: 0, backgroundColor: 'white' }}>
          <View style={styles.cardContainer1}>
            
       <View style={styles.container}>
        <Animated.Image
          style={{
            resizeMode: 'center',
            height: 220,
            width: 400,
            backgroundColor: '#fff',
            top: 190,
            left: -6,
            transform: [{ scale: logoScale }],
          }}
          source={require('../assets/images/logo.png')}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={[styles.buttonContainer, { transform: [{ scale: buttonScale }] }]}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
            
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}