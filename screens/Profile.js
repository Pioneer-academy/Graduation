import { SafeAreaView, View, Text, StatusBar, TouchableOpacity, StyleSheet, Image, Button, Animated, ScrollView, Dimensions } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

export default function Profile({ navigation , route}) {
  const {user}=route.params
  const textStyle = { fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginBottom: -100, marginTop: 10 };

  useEffect(()=>{
    console.log(user)
  },[])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 20,
    },
    userInfoContainer: {
      alignItems: 'center',
      paddingVertical: 15,
      borderBottomColor: 'red',
      borderBottomWidth: 1,
      marginBottom: 15,
      top:20,
      width: '70%', 
      left:55,
    },
    userInfoText: {
      fontSize: 15,
      color: 'black',
      paddingVertical: 5,
    },
    container1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 10,
      top: 30,
    },
    textStyle: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      marginTop: 10,
    },
    coursesContainer: {
      padding: 200,
    },
    coursesRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    courseName: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      flex: 1,
      justifyContent: 'center',
      marginRight: 60,
      top: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 5,
      backgroundColor: '#D9D9D9',
      borderRadius: 90,
      height:40,
      width:330,
      left:15
    },
    cardContainer1: {
      width: 340,
      top: 5,
      height: 600,
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
    back: {
      height: 45,
      width: 50,
      resizeMode: 'contain',
      left: 0,
      top:-5
    },
    logo: {
      height: 40,
      width: 100,
      resizeMode: 'contain',
      top:-7,
      left:30
    },
    card: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      margin: 10,
      padding: 15,
      borderRadius: 10,
      elevation: 10,
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.7,
      shadowRadius: 4,
    },
    teacherName: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'left',
      paddingLeft: 50,
      marginBottom: 5,
    },
    teacherEmail: {
      fontSize: 15,
      color: 'grey',
      textAlign: 'left',
      paddingLeft: 50,
    },
    cardContainer6: {
      width: 300,
      top: 70,
      height: 500,
      backgroundColor: 'white',
      borderRadius: 10,
      margin: 10,
      left:5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    courseName: { fontSize: 18, fontWeight: 'bold' },
  });

  const { colors } = useTheme();

  



  React.useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);


  const logout = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return;
    }
  
    axios.post('http://192.168.101.5:6000/api/logout', { token: token })
      .then((response) => {
        console.log(response.data.message);
        localStorage.removeItem('token');
        navigation.navigate('Login');  
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar animated={true} backgroundColor="white" />
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('StudentHome')}>
            <Image source={require('../assets/images/back.png')} style={styles.back} />
          </TouchableOpacity>
          <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
        </View>

        <ScrollView horizontal={true} style={{ marginTop: 0, backgroundColor: 'white' }}>
          <View style={styles.cardContainer1}>
         
          <ScrollView horizontal={true} style={{ marginTop: 0, backgroundColor: 'white' }}>
          <View style={styles.cardContainer6}>
            
       <View style={styles.userInfoContainer}>
            <Image source={require('../assets/images/name.png')} style={{ width: 40, height: 40, marginHorizontal: 10,left:-90,top:30 }} />
              <Text style={styles.userInfoText}>{user.name}</Text>
            </View>
            <View style={styles.userInfoContainer}>
            <Image source={require('../assets/images/email.png')} style={{ width: 20, height: 20, marginHorizontal: 10,left:-95,top:27 }} />
              <Text style={styles.userInfoText}>{user.email}</Text>
            </View>
            <View style={styles.userInfoContainer}>
            <Image source={require('../assets/images/pos.png')} style={{ width: 30, height: 30, marginHorizontal: 10 , top:25,left:-93}} />
              <Text style={styles.userInfoText}>{user.position}</Text>
            </View>
            <View style={styles.userInfoContainer}>
            <Image source={require('../assets/images/logout.png')} style={{ width: 30, height: 30, marginHorizontal: 10 , top:30,left:-93}} />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.userInfoText}>Logout</Text>
                    </TouchableOpacity>
            </View>
            
          </View>
        </ScrollView>
           
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}  