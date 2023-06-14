import React, { useRef,useEffect,useState } from 'react';
import {
  SafeAreaView,
  View,
  Platform,
  TextInput,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
  Animated,
  ScrollView
} from 'react-native';
import logo from '../assets/images/logo.png';
import Card1 from './Card1'; 
import Card2 from './Card2'; 
import Card3 from './Card3';

import Etud3 from './Etud3';
import Etud1 from './Etud1';
import Etud2 from './Etud2';


export default function TeacherSpace ({navigation}) {

  const [search, setSearch] = useState('');

  const updateSearch = (search) => {
    setSearch(search);
  };

  const styles = StyleSheet.create({
    all:{
       backgroundColor:'white'
    },
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      paddingVertical: 70,
      
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
      top:-5,
      left:29
    },
  
  
    logo: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    cardContainer: {
      width: 150,
      top:0,
      height: 150,
      backgroundColor: 'white',
      borderRadius: 10,
      margin: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    cardContainer1: {
      width: 600,
      left:0,
      top:5,
      height: 150,
      backgroundColor: 'white',
      borderRadius: 10,
      margin: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    cardContainer2: {
      width: 600,
      top:5,
      height: 150,
      backgroundColor: 'white',
      borderRadius: 10,
      margin: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 5,
      backgroundColor: '#D9D9D9',
      borderRadius: 90,
  height:45,
  width:330,
  left:15,
  top:-2
    },
  });

  React.useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.all}>
      <StatusBar animated={true} backgroundColor="white" />
      <ScrollView >
      <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={require('../assets/images/back.png')} style={styles.back} />
          </TouchableOpacity>
          <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
        </View>
        <ScrollView horizontal={true} style={{marginTop: -5,backgroundColor:'white'}}>
          <Card1 style={styles.cardContainer}  />
          <Card2 style={styles.cardContainer}/>
          <Card3 style={styles.cardContainer}/>
        </ScrollView>

        <Text style={{backgroundColor:'white'}}>    Related courses</Text>
        
        <ScrollView horizontal={true} style={{marginTop: 0,backgroundColor:'white'}}>
                  <View style={styles.cardContainer1}>
           
            <Image
          style={{
            position: 'absolute',
            aspectRatio: 1,
            flex: 1,
            top: -100,
            resizeMode: 'center',
            height: 350,
            width: 200,
            left:-50,
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhdFgKwWT0BD32WAPhBz04H7yjV1VMu7axw&usqp=CAU',
          }}
        />

<Image
          style={{
            position: 'absolute',
            aspectRatio: 1,
            flex: 1,
            top: -100,
            resizeMode: 'center',
            height: 350,
            width: 150,
            left:85,
          }}
          source={{
            uri:
              'data:image/jpeg;base64,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',
          }}
        />

<Image
          style={{
            position: 'absolute',
            aspectRatio: 1,
            flex: 1,
            top: -100,
            resizeMode: 'center',
            height: 350,
            width: 200,
            left:190,
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYE-YF7p5b0tPywDh-F55vIdWSbbzKkUSYrg&usqp=CAU ',
          }}
        />

<Image
          style={{
            position: 'absolute',
            aspectRatio: 1,
            flex: 1,
            top: -100,
            resizeMode: 'center',
            height: 350,
            width: 200,
            left:300,
          }}
          source={{
            uri:
              'data:image/png;base64,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 ',
          }}
        />

<Image
          style={{
            position: 'absolute',
            aspectRatio: 1,
            flex: 1,
            top: -100,
            resizeMode: 'center',
            height: 350,
            width: 200,
            left:400,
          }}
          source={{
            uri:
              'data:image/jpeg;base64,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',
          }}
        />

          </View>
        </ScrollView>
       
        <View style={styles.container}>
        <Text style={{backgroundColor:'white',top:-25,left:-90}}> Recommanded Students</Text>
        <ScrollView horizontal={true} style={{marginTop: -5,backgroundColor:'white'}}>
          
          <Etud1 style={styles.cardContainer}  />
          <Etud2 style={styles.cardContainer}/>
          <Etud3 style={styles.cardContainer}/>
        </ScrollView>

        </View>
      </ScrollView>
      </View>
      
    </SafeAreaView>
  );
}


