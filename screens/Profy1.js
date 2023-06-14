import React from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Profy1({ style }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Description1')}>
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
            left: 20,
            borderRadius: 165,
          }}
          source={require('../assets/images/mahdi.jpg')}
        />
        <Text style={{ top: 127, right: -30 }}>Mahdi Dissem</Text>
      </View>
    </TouchableOpacity>
  );
}