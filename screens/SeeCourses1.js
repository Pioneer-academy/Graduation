import React, { useRef, useState , useEffect} from 'react';
import { SafeAreaView, View, Text, StatusBar, TouchableOpacity, StyleSheet, Image, Button, Animated, ScrollView, Dimensions, } from 'react-native';
import axios from 'axios';
import { useTheme } from '@react-navigation/native';
export default function SeeCourses1({ navigation }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPressed, setIsPressed] = useState(false);
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
  top:0,
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
      top:-5,
      left:29
    },
    card: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      margin: 10,
      top:5,
      padding: 15,
      borderRadius: 10,
      elevation: 10, 
      shadowOffset: { width: 1, height: 1 }, 
      shadowColor: '#333',
      shadowOpacity: 0.7,
      shadowRadius: 4,
    },
   
  });

  const handleFetchCourses = () => {
    axios.get('http://192.168.1.15:6000/cour')
      .then((response) => { setCourses(response.data); setIsPressed(true); })
      .catch((error) => { console.log('Error fetching courses:', error); });
  };

  React.useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => { handleFetchCourses(); }, []);

  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar animated={true} backgroundColor="white" />
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('ManageCourses')}>
            <Image source={require('../assets/images/back.png')} style={styles.back} />
          </TouchableOpacity>
          <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
        </View>
        {courses.map((course, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.courseName}>{course.name}</Text>
            <Text style={{color:'grey', left:0}}>{course.subjct}</Text>
            <Image source={require('../assets/images/redC.png')} style={{ left: -280, top: 5, width: 40, height: 40 }} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}