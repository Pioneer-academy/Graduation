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
import Prof1 from './Profy1';
import Prof2 from './Prof2';
import Prof3 from './Prof3';


export default function StudentSpace ({navigation}) {

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
      top:20
      
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#bbb',
    },
    searchInput: {
      flex: 1,
      height: 40,
      borderRadius: 30,
            height: 40,
      backgroundColor: '#D9D9D9',
      paddingLeft: 20,
      fontSize: 16,
      left: 2,
      right: 25,
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
      width: 530,
      left:0,
      top:9,
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
      backgroundColor: 'white',
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
        <View  style={styles.header}>
          <TextInput
            style={styles.searchInput}
            onChangeText={updateSearch}
            value={search}
            placeholder="       Type Here..."
            placeholderTextColor="#aaa"
          />
          <Image
            style={{
              position: 'absolute',
              top:0,
              resizeMode: 'center',
              height: 45,
              width: 45,
              backgroundColor: 'transparent',
              left:5
            }}
            source={
              require('../assets/images/logo1.png')
            }
          />
           <Image
            style={{
              position: 'absolute',
              top: 5,
              resizeMode: 'center',
              height: 45,
              width: 25,
              backgroundColor: 'transparent',
              left:320
            }}
            source={
              require('../assets/images/search.png')
            }
          />
        </View>
      

        
        
        <ScrollView horizontal={true} style={{marginTop: 0,backgroundColor:'white'}}>
                  <View style={styles.cardContainer1}>
            
            <Image
          style={{
            position: 'absolute',
            aspectRatio: 1,
            flex: 1,
            top: 40,
            resizeMode: 'center',
            height: 80,
            width: 80, 
            left:10,
            borderRadius: 165, 
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
            top: 40,
            resizeMode: 'center',
            height: 80,
            width: 80, 
            left:110,
            borderRadius: 165, 
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwninW_rap55iF9yXlVLVvrbvbJtv3EsgAJQ&usqp=CAU',
          }}
        />

<Image
          style={{
            position: 'absolute',
            aspectRatio: 1,
            flex: 1,
            top: 40,
            resizeMode: 'center',
            height: 80,
            width: 80,
            borderRadius: 165, 
            left:220,
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZfSG4gcIsBYLoaTunETuotXuKF3RxR_Arw&usqp=CAU',
          }}
        />

<Image
          style={{
            position: 'absolute',
            aspectRatio: 1,
            flex: 1,
            top: 37,
            resizeMode: 'center',
            height: 80,
            width: 80,
            borderRadius: 165, 
            left:320,
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSUipyDFlIfrzXiibKiVpJbVnRm_bQ2QHlBw&usqp=CAU',
          }}
        />

<Image
          style={{
            position: 'absolute',
            aspectRatio: 1,
            flex: 1,
            top: 37,
            resizeMode: 'center',
            height: 80,
            width: 80,
            left:420,
            borderRadius: 165, 
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCVmy7sGaFp1zFoDdi1wc6hLBpshl5LqFnww&usqp=CAU',
          }}
        />

          </View>
        </ScrollView>
        <Text style={{backgroundColor:'white',top:15, color:'grey'}}>    Related courses</Text>
        <ScrollView horizontal={true} style={{marginTop: 0,backgroundColor:'white',top:25}}>
          
          <Card1 style={styles.cardContainer}  />
          <Card2 style={styles.cardContainer}/>
          <Card3 style={styles.cardContainer}/>
        </ScrollView>
       
        <View style={styles.container}>
        <Text style={{backgroundColor:'white',top:-25,left:-90,color:'grey'}}> Recommanded teachers</Text>
        <ScrollView horizontal={true} style={{marginTop: -5,backgroundColor:'white'}}>
          
          <Prof1 style={styles.cardContainer}  />
          <Prof2 style={styles.cardContainer}/>
          <Prof3 style={styles.cardContainer}/>
        </ScrollView>

        </View>
      </ScrollView>
      </View>
      
    </SafeAreaView>
  );
}

