import React from 'react';
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
  ScrollView,
  
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 50,
  },
  cardContainer1: {
    width: 340,
    top: 5,
    height: 650,
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#D9D9D9',
    borderRadius: 90,
    height: 40,
    width: 330,
    left: 15,
  },
  back: {
    height: 45,
    width: 50,
    resizeMode: 'contain',
    left: 10,
    top: -5,
    left: 5,
  },
  logo: {
    height: 40,
    width: 100,
    resizeMode: 'contain',
    top: -5,
    left: 20,
  },
  image: {
    position: 'absolute',
    aspectRatio: 1,
    top: 15,
    resizeMode: 'contain',
    height: 120,
    width: 120,
    left: 110,
    borderRadius: 165,
    shadowColor: '#000',
  },
  text: {
    left: 123,
    top: 140,
  },
  courseName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    marginRight: 230,
    top:240,
  },
});

export default function Etud1Des({ navigation }) {
  React.useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar animated={true} backgroundColor="white" />
      <ScrollView>
        <View style={{ backgroundColor: 'white' }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('TeacherHome')}>
              <Image source={require('../assets/images/back.png')} style={styles.back} />
            </TouchableOpacity>
            <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
          </View>
        </View>
        <ScrollView horizontal={true} style={{ marginTop: 0, backgroundColor: 'white' }}>
          <View style={styles.cardContainer1}>
            <Image style={styles.image} source={require('../assets/images/hanine.jpg')} />
            <Text style={styles.text}>Hanine Azizi</Text>
            <Text style={styles.courseName}>Position :</Text>
            <Text style={{color:'grey',top:-80, left:170}}>Full-stack JS developer{'\n'} </Text>
            <Text style={{color:'grey',top:-40, left:170}}></Text>
            <Text style={{color:'grey',top:-110, left:170}}>Business Student{'\n'}</Text>
            <Text style={{ fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    top:-50,
    marginRight: 220,}}>Experience :</Text>
    <Text style={{color:'grey',top:-70, left:170}}>Full-stack JS developer{'\n'} </Text>
    <Text style={{color:'grey',top:-70, left:170}}>Full-stack js internship {'\n'}</Text>
    <Text style={{color:'grey',top:-70,left:170}}></Text>
    
    <Text style={{ fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    top:-50,
    marginRight: 250,}}>Contact :</Text>
          <Text style={{color:'grey',top:-70,left:170}}>hanine.azizi@esprit.tn
{'\n'}</Text> 
 
<Text style={{color:'grey',top:-70,left:170}}>@hanine-azizi

{'\n'}</Text>    
      
            
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}