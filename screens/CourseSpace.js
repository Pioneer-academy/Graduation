
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
    Image,
    Button,
    Animated,
    ScrollView,
    Dimensions,
  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';

export default function CourseSpace ({ navigation }) {
    const { colors } = useTheme();
    const textStyle = { fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginBottom: -100, marginTop: 10 };
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 20,
        },
        container1: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 10,
          top:30
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
      
        courseName: {
          fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center',
          flex: 1,
          justifyContent: 'center',
          marginRight: 60,
          top:20,
        },
        container: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          backgroundColor: 'white', 
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
            back: {
              height: 45,
              width: 50,
              resizeMode: 'contain',
              left:0,
              top:-5
            },
            logo: {
              height: 40,
              width: 100,
              resizeMode: 'contain',
              left:30,
              top:-5
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
            coursesRow: {
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginBottom: 10,
              backgroundColor: '#fff',
              padding: 15,
              borderRadius: 10,
              elevation: 10, 
              shadowOffset: { width: 1, height: 1 }, 
              shadowColor: '#333',
              shadowOpacity: 0.7,
              shadowRadius: 4,
              height: 100, 
              width: '100%', 
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
      });
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        <StatusBar animated={true} backgroundColor="white" />
        <ScrollView style={{backgroundColor: 'white'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('StudentHome')}>
              <Image source={require('../assets/images/back.png')} style={styles.back} />
            </TouchableOpacity>
            <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
          </View>

          <ScrollView horizontal={true} style={{ marginTop: 0, backgroundColor: 'white' }}>
          <View style={styles.cardContainer1}>
            
      
            
          </View>
        </ScrollView>
         
        </ScrollView>
      </SafeAreaView>
      );
           
      
  }


