import React from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Etud2({ style }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Etud3Des')}>
      <View style={style}>
      
        <Image
          style={{
            position: 'absolute',
            aspectRatio: 1,
            flex: 1,
            top: 10,
            resizeMode: 'contain',
            height: 120,
            width: 120,
            left: 15,
            borderRadius: 165,
          }}
          source={require('../assets/images/wareth.jpg')}
        />
        <Text style={{ top: 127, right: -30 }}>Wareth Ghribi</Text>
      </View>
    </TouchableOpacity>
  );
}