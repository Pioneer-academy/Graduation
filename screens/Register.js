import React, { useState, useRef } from 'react';
import {
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
  Button,
  Animated,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

export default function Register({ navigation }) {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }

    const data = {
      name: name,
      position: position,
      email: email,
      password: password,
      admin_idadmin:1
    };
    console.log(data)

    axios
      .post('http://192.168.1.15:6000/api/register', data)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === 'success') {
          Alert.alert('Success', 'User registered successfully!');
        } else {
          Alert.alert('Error', 'User registration failed!');
        }
      })
      .catch((error) => {
        console.log(data)
        console.error('Error:', error);
      });
  };

  const handleButtonPress = () => {
    signup();
    navigateToLoginScreen();
  };
  const navigateToLoginScreen = () => {
    navigation.navigate('Login');
  };

  const textStyle = {
    fontSize: 30,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 30,
  marginLeft: -20,
  top:10,
  left:7
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      marginBottom: -220,
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


    buttonContainer: {
      marginTop: 50,
      backgroundColor: '#D9D9D9',
      padding: 10,
      borderRadius: 5,
      resizeMode: 'center',
      width: 150,
      borderRadius: 30, 
      height: 50,
      top: -50,
      left:-10
    },
    buttonText: {
      color: '#928A8A',
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',
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
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#000000" />
          <Image
                    style={{
                        position: 'absolute',
                        top: 20,
                        resizeMode: 'center',
                        height: 180,
                        width: 350,
                        backgroundColor: '#fff',
                        left:-5
                    }}
                    source={
                        require('../assets/images/logo.png')
                    }
                />
<Text style={textStyle}>Register{'\n'}</Text>

<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, height: 40, borderColor:'#D31919', borderBottomWidth: 1 }}>
  <Image source={require('../assets/images/name.png')} style={{ width: 30, height: 30, marginHorizontal: 10,left:-5 }} />
  <TextInput
    style={{ width: '50%', borderWidth: 0 }}
     placeholder=" Name"
            keyboardType="default"
            onChangeText={(text) => setName(text)}
  />

</View>

<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, height: 40, borderColor:'#D31919', borderBottomWidth: 1 }}>
  <Image source={require('../assets/images/email.png')} style={{ width: 20, height: 20, marginHorizontal: 10,left:0 }} />
  <TextInput
    style={{ width: '52%', borderWidth: 0 }}
    placeholder="    Email ID"
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
<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, height: 40, borderColor:'#D31919', borderBottomWidth: 1 }}>
  <Image source={require('../assets/images/conf.png')} style={{ width: 25, height: 25, marginHorizontal: 10,left:-4,top:-1 }} />
  <TextInput
    style={{ width: '50%', borderWidth: 0 }}
   placeholder="ConfirmPassword"
            secureTextEntry={true}
            onChangeText={(text) => setConfirmPassword(text)}
  />
</View>

          <Picker
            style={{
              top:20,
              height: 40,
              width: '60%',
              marginBottom: 20,
              borderBottomWidth: 1,
              borderColor: '#D31919',
              borderWidth: 0,
            }}
            selectedValue={position}
            onValueChange={(itemValue) => setPosition(itemValue)}
          >
            <Picker.Item label='' value=''/>
            <Picker.Item label="Student" value="student" />
            <Picker.Item label="Prof" value="prof" />
            
          </Picker>

          <TouchableOpacity
  onPress={handleButtonPress}
  style={[
    styles.buttonContainer,
    { transform: [{ scale: buttonScale }] },
  ]}
  onPressIn={handlePressIn}
  onPressOut={handlePressOut}
>
  <Text style={styles.buttonText}>Sign up</Text>
</TouchableOpacity>

          
        </View>
      </ScrollView>
             
            
          </View>
        </ScrollView>
    </ScrollView>
    </SafeAreaView>
  );
}