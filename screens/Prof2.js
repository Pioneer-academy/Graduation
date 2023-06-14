import React from 'react';
import { Image, TouchableOpacity,Text,View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
export default function Prof2 ({style}) {
  const navigation = useNavigation();
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Description2')}>
              <View style={style}>
            
            <Image
          style={{
            position: 'absolute',
            aspectRatio: 1,
            flex: 1,
            top: 10,
            resizeMode: 'contain',
            height: 100,
            width: 100, 
            left:20,
            borderRadius: 165, 
          }}
          source={require('../assets/images/Thouraya.jpg')}
        />
        <Text  style={{top:127,left:10}}>  Thouraya Sakouhi</Text>
      </View>
      </TouchableOpacity>
 
    )
  }  