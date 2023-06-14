import React, { useRef,useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Animated,
  TextInput,
  Alert
} from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function CreateCourse() {
  const [name, setName] = useState('');
  const [subjct, setSubjct] = useState('');
  const [hour, setHour] = useState(0);
  const [teachers, setTeachers] = useState([]);
  const { colors } = useTheme();
  const navigation = useNavigation();

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
    courseName: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      flex: 1,
      justifyContent: 'center',
      marginRight: 60,
      top: 20,
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      backgroundColor: 'white', 
    },
    buttonContainer: {
      marginTop: 50,
      backgroundColor: '#D9D9D9',
      padding: 10,
      borderRadius: 5,
      resizeMode: 'center',
      width: 150,
      height: 50,
      top: 200,
      left:85
    },
    buttonText: {
      color: '#928A8A',
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',
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


  const handleCreateCourse = () => {
    
      const courseData = {
        name: name,
        hour: hour,
        subjct: subjct,
        user_iduser: 1, 
      };
      axios
        .post('http://192.168.1.15:6000/createCourse', courseData)
        .then((response) => {
          console.log(response.data);
          if (response.data.status === 'success') {
            Alert.alert('Course Created', 'The course has been successfully created.');
          } else {
            Alert.alert('Course Created', 'The course has been successfully created.');
          }
        })
        .catch((error) => {
          console.error(error);
          Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
        });
    
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar animated={true} backgroundColor="white" />
      <View style={{backgroundColor:'white'}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('ManageCourses')}>
            <Image source={require('../assets/images/back.png')} style={styles.back} />
          </TouchableOpacity>
          <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
        </View>
        <ScrollView horizontal={true} style={{ marginTop: 0, backgroundColor: 'white' }}>
          <View style={styles.cardContainer1}>
            <Text style={{color: '#928A8A', fontSize: 25,
      fontWeight: 'bold',left:80,top:90}}>Create Course</Text>
          <TextInput
                    style={{ top:180,height: 40, borderColor:'#D31919',  borderBottomWidth: 1,width: '60%', borderWidth: 0, left:60,marginBottom: 20}}
                    placeholder="Name"
                    keyboardType="default"
                    onChangeText={text => setName(text)}
                />

                <TextInput
                    style={{  top:180,height: 40, borderColor:'#D31919',  borderBottomWidth: 1,width: '60%', borderWidth: 0,left:60, marginBottom: 20 }}
                    placeholder="Subject"
                    keyboardType='default'
                    onChangeText={text => setSubjct(text)}
                />

<TextInput
                style={{ top:180, height: 40, borderColor:'#D31919',  borderBottomWidth: 1,width: '60%', borderWidth: 0,left:60, marginBottom: 20 }}
                placeholder=" Hour"
                keyboardType="default"
                onChangeText={text => setHour(text)}
            />

<TouchableOpacity
  onPress={handleCreateCourse}
  style={[styles.buttonContainer, { transform: [{ scale: buttonScale }] }]}
  onPressIn={handlePressIn}
  onPressOut={handlePressOut}
>
  <Text style={styles.buttonText}>Submit</Text>
</TouchableOpacity>
 
         
          
            
          </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  );

}
