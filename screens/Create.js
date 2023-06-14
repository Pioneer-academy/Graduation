import React from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Create({ style }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() =>  navigation.navigate('CreateCourse')}>
      <View style={style}>
      <Image
            style={{
              position: 'absolute',
              aspectRatio: 1,
              flex: 1,
              top: 0,
              resizeMode: 'contain',
              height: 150,
              width: 350,
              marginBottom: 400,
              marginTop: 90,
              top:-90,
              left:-70
            }}
            source={{
              uri: 'https://i.gifer.com/WiqK.gif',
            }}
          />
        <Text style={{ top: 127, right: -50 }}>Create Course</Text>
      </View>
    </TouchableOpacity>
  );
}