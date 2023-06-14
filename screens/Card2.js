import React from 'react';
import { Image, TouchableOpacity,Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
export default function Card2 ({style}) {
  const navigation = useNavigation();
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Angular')}>
        <View style={style}>
               <Image
          style={{
            position: 'absolute',
            aspectRatio: 1,
            flex: 1,
            top: 15,
            resizeMode: 'contain',
            height: 100, 
            width: 150,
            left:0,
            borderRadius: 75, 
          }}
          source={require('../assets/images/angular.png')}
        />

           <Text  style={{color:'grey',top:110,left:45,fontSize: 18, }}>Angular</Text>
           
      </View>
      </TouchableOpacity>
       
    )
  }  