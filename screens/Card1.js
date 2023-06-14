import React from 'react';
import { Image, TouchableOpacity,Text,View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Card1 ({style}) {
  const navigation = useNavigation();
    return (
      <TouchableOpacity onPress={() => navigation.navigate('React')}>
         <View style={style}>
           
           <Image
          style={{
            position: 'absolute',
            aspectRatio: 1,
            flex: 1,
            top: -105,
            resizeMode: 'contain',
            height: 350,
            width: 150,
            left:0,
          }}
          source={require('../assets/images/React.png')}
        />
           
           <Text  style={{color:'grey',top:110,left:50, fontSize: 18, }}>React</Text>
        
      </View>
      </TouchableOpacity>
     
    )
  }