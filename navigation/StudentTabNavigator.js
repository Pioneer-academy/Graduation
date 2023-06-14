import React from 'react';
import { useRoute } from '@react-navigation/core';
import { View, Image, StatusBar, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StudentSpace from '../screens/StudentSpace';
import SeeCourses from '../screens/SeeCourses';
import SeeTeacher from '../screens/SeeTeacher';
import Profile from '../screens/Profile';
import home from '../assets/images/home.png';
import cours from '../assets/images/cours.png';
import prof from '../assets/images/prof.png';
import profil from '../assets/images/profil.png';
import logo1 from '../assets/images/logo1.png';
import Message from '../screens/Message';


const Tab = createBottomTabNavigator();

export default function StudentTabNavigator({ navigation}) {
  const route=useRoute()
  const {user}=route.params
  return (
    <>
      <StatusBar animated={true} backgroundColor="grey" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            display: 'flex',
            position: 'absolute',
            bottom: 5,
            left: 25,
            right: 25,
            elevation: 5,
            backgroundColor: '#D9D9D9',
            borderRadius: 30,
            height: 40,
          },
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
       <Tab.Screen
  name="StudentHome"
  component={StudentSpace}
  options={{
    tabBarIcon: ({ focused }) => (
      <Image
        style={{
          height: 30,
          width: 30,
          tintColor: focused ? '#D31919' : 'black',
        }}
        source={home}
      />
    ),
  }}
/>
        <Tab.Screen
          name="SeeCourses"
          component={SeeCourses}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? '#D31919' : 'black',
                }}
                source={cours}
              />
            ),
          }}
        />

        
<Tab.Screen
          name="Message"
          component={Message}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                style={{
                  height: 60,
                  top:-15,
                  width: 60,
                  
                }}
                source={logo1}
              />
            ),
          }}
        />
        
        <Tab.Screen
          name="SeeTeacher"
          component={SeeTeacher}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? '#D31919' : 'black',
                }}
                source={prof}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          initialParams={{ user: user }}
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? '#D31919' : 'black',
                }}
                source={profil}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}