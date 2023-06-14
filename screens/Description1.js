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
  userInfoContainer: {
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    marginBottom: 15,
    top:160,
    width: '70%', 
    left:55,
  },
  userInfoText: {
    fontSize: 15,
    color: 'black',
    paddingVertical: 5,
    top:10,
    left:10
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
    top:200,
  },
  
});

export default function Description1({ navigation }) {
  React.useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar animated={true} backgroundColor="white" />
      <ScrollView>
        <View style={{ backgroundColor: 'white' }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('StudentHome')}>
              <Image source={require('../assets/images/back.png')} style={styles.back} />
            </TouchableOpacity>
            <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
          </View>
        </View>
        <ScrollView horizontal={true} style={{ marginTop: 0, backgroundColor: 'white' }}>
          <View style={styles.cardContainer1}>
            <Image style={styles.image} source={require('../assets/images/mahdi.jpg')} />
            <Text style={styles.text}>Mahdi Dissem</Text>
            <View >
            
       <View style={styles.userInfoContainer}>
            <Image source={require('../assets/images/pos.png')} style={{ width: 30, height: 30, marginHorizontal: 10,left:-90,top:37 }} />
              <Text style={styles.userInfoText}>Full stack Js developer</Text>
            </View>
            <View style={styles.userInfoContainer}>
            <Image source={require('../assets/images/email.png')} style={{ width: 20, height: 20, marginHorizontal: 10,left:-95,top:35 }} />
              <Text style={styles.userInfoText}>mahdi.dissem@gmail.com</Text>
            </View>
            <View style={styles.userInfoContainer}>
            <Image source={require('../assets/images/link.png')} style={{ width: 20, height: 20, marginHorizontal: 10 , top:35,left:-93}} />
              <Text style={styles.userInfoText}>mahdi-dissem</Text>
            </View>
            <View style={styles.userInfoContainer}>
            <Image source={require('../assets/images/car.png')} style={{ width: 30, height: 30, marginHorizontal: 10 , top:37,left:-93}} />
            <Text style={styles.userInfoText}>SEO consultant</Text>
             </View>
             </View>
            
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}