import React, { useState, useRef } from 'react';
import { Text, StatusBar, ScrollView,Animated,SafeAreaView, StyleSheet, Image, View, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,useNavigation  } from '@react-navigation/stack';

import axios from 'axios';


export default function Login({ navigation }) {
  // const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [position, setPosition] = useState('');


  const login = () => {
    const data = {
      email: email,
      password: password,
    };

    axios
      .post('http://192.168.1.15:6000/api/login', data)
      .then((response) => {
        console.log(response.data);

        if (position === 'student' || position==='Student') {
          navigation.navigate('StudentSpace',{user : response.data.user});
        } else if (position === 'prof' || position==='Prof') {
          navigation.navigate('TeacherSpace',{user : response.data.user});
        } else {
          console.log('Invalid position');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

 
  const textStyle = {
    fontSize: 30,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 30,
  marginLeft: -20,
  top:20
  };


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
        },
        buttonContainer: {
          marginTop: 50,
          backgroundColor: '#D9D9D9',
          padding: 10,
          borderRadius: 5,
          resizeMode: 'center',
          width: 150,
          height: 50,
          borderRadius: 30, 
          top: 0,
        },
        buttonText: {
          color: '#928A8A',
          textAlign: 'center',
          fontSize: 15,
          fontWeight: 'bold',
          top:5
        },
        cardContainer1: {
          width: 340,
          top: 5,
          height: 690,
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
    });

    const buttonScale = useRef(new Animated.Value(1)).current;

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
          <ScrollView>
          <ScrollView horizontal={true} style={{ marginTop: 0, backgroundColor: 'white' }}>
          <View style={styles.cardContainer1}>
            
       <View style={styles.container} >
                <StatusBar backgroundColor="black" />
                <Image
                    style={{
                        position: 'absolute',
                        top: 20,
                        resizeMode: 'center',
                        height: 180,
                        width: 300,
                        backgroundColor: '#fff',
                        left:15
                    }}
                    source={
                        require('../assets/images/logo.png')
                    }
                />

               
            <Text style={textStyle}>Login{'\n'}</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50, height: 40, borderColor:'#D31919', borderBottomWidth: 1 }}>
  <Image source={require('../assets/images/email.png')} style={{ width: 20, height: 20, marginHorizontal: 10,left:-5 }} />
  <TextInput
    style={{ width: '50%', borderWidth: 0 }}
    placeholder="Email ID"
    keyboardType="email-address"
    onChangeText={text => setEmail(text)}
  />
</View>
<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, height: 40, borderColor:'#D31919', borderBottomWidth: 1 }}>
  <Image source={require('../assets/images/pass.png')} style={{ width: 30, height: 30, marginHorizontal: 10,left:-7,top:-5 }} />
  <TextInput
    style={{ width: '50%', borderWidth: 0 }}
    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
  />
</View>

<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, height: 40, borderColor:'#D31919', borderBottomWidth: 1 }}>
  <Image source={require('../assets/images/pos.png')} style={{ width: 30, height: 30, marginHorizontal: 10 , top:-5,left:0}} />
  <TextInput
    style={{ width: '50%', borderWidth: 0 }}
   placeholder="Position"
                keyboardType="default"
                onChangeText={text => setPosition(text)}
  />
</View>
<TouchableOpacity
  onPress={login}
  style={[styles.buttonContainer, { transform: [{ scale: buttonScale }] }]}
  onPressIn={handlePressIn}
  onPressOut={handlePressOut}
>
  <Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: -180,
                    }}>
                    <Text style={{color:'#C7BFBF',top:-25}}>{'\n'}{'\n'}{'\n'}New to the app?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={{ color: 'black', fontWeight: 700,top:-25 }}> {'\n'}{'\n'}{'\n'}   Register</Text>
                    </TouchableOpacity>
                </View>

            </View>
            
          </View>
        </ScrollView>
          </ScrollView>
        </SafeAreaView>
    )
} 