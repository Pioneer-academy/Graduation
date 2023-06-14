import React, { useState, useEffect } from 'react';
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
} from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function SeeStudents() {
  const [students, setStudents] = useState([]);
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

  const handleFetchUser = () => {
    axios
      .get('http://192.168.1.15:6000/users')
      .then((response) => {
        const fetchedStudents = response.data.filter(
          (user) => user.position === 'student' || user.position === 'Student'
        );
        setStudents(fetchedStudents);
      })
      .catch((error) => {
        console.log('Error fetching users:', error);
      });
  };

  useEffect(() => {
    handleFetchUser();
  }, []);

  React.useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar animated={true} backgroundColor="white" />
      <View style={{backgroundColor:'white'}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('TeacherHome')}>
            <Image source={require('../assets/images/back.png')} style={styles.back} />
          </TouchableOpacity>
          <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
        </View>
        <ScrollView style={{ backgroundColor: 'white', minHeight: Dimensions.get('window').height }}>
          {students.map((student) => (
            <TouchableOpacity
              key={student.iduser}
              style={styles.coursesRow}
              onPress={() => navigation.navigate('Message')}
            >
              <Text style={styles.teacherName}>{student.name}</Text>
              <Text style={styles.teacherEmail}>{student.email}</Text>
              <Image source={require('../assets/images/message.png')} style={{ width: 40, height: 40, left: 270, top: -30 }} />
              <Image source={require('../assets/images/redC.png')} style={{ left: 0, top: -70, width: 40, height: 40 }} />
            </TouchableOpacity>
          ))}
          <View style={{ height: 100 }} /> 
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}