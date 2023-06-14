import React, { useRef,useEffect,useState } from 'react';
import {
  SafeAreaView,
  View,
  Platform,
  TextInput,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
  Animated,
  ScrollView,
  Linking
} from 'react-native';
import logo from '../assets/images/logo.png';

import Card1 from './Card1'; 
import Card2 from './Card2'; 
import Card3 from './Card3';
import Create from './Create';
import See from './See'
import Delete from './Delete'


export default function TeacherSpace ({navigation}) {

  const [search, setSearch] = useState('');

  const updateSearch = (search) => {
    setSearch(search);
  };

  const styles = StyleSheet.create({
    all:{
       backgroundColor:'white'
    },
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      paddingVertical: 70,
      
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
  
  
    logo: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    cardContainer: {
      width: 200,
      top:0,
      height: 150,
      backgroundColor: 'white',
      borderRadius: 10,
      margin: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    cardContainer1: {
      width: 500,
      left:0,
      top:5,
      height: 150,
      backgroundColor: 'white',
      borderRadius: 10,
      margin: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    cardContainer2: {
      width: 600,
      top:5,
      height: 150,
      backgroundColor: 'white',
      borderRadius: 10,
      margin: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 5,
      backgroundColor: '#D9D9D9',
      borderRadius: 90,
  height:45,
  width:330,
  left:15,
  top:-2
    },
  });

  React.useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const url = 'https://developer.mozilla.org/';
  const url1='https://nextjs.org'
  const url2='https://www.typescriptlang.org'
  const url3='https://nodejs.org'
  
  const handleImagePress = () => {
    Linking.openURL(url);
  };

  const handleImage1Press=()=>{
    Linking.openURL(url1)
  }
  const handleImage2Press=()=>{
    Linking.openURL(url2)
  }
  
  const handleImage3Press=()=>{
    Linking.openURL(url3)
  }
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.all}>
      <StatusBar animated={true} backgroundColor="white" />
      <ScrollView >
      <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={require('../assets/images/back.png')} style={styles.back} />
          </TouchableOpacity>
          <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
        </View>
        <ScrollView horizontal={true} style={{marginTop: -5,backgroundColor:'white'}}>
          <Card1 style={styles.cardContainer}  />
          <Card2 style={styles.cardContainer}/>
          <Card3 style={styles.cardContainer}/>
        </ScrollView>

        <Text style={{backgroundColor:'white'}}>    Resources</Text>
        
        <ScrollView horizontal={true} style={{marginTop: 0,backgroundColor:'white'}}>
                  <View style={styles.cardContainer1}>
                  <TouchableOpacity onPress={handleImagePress}>
            <Image
          style={{
            position: 'absolute',
            aspectRatio: 1,
            flex: 1,
            top: 25,
            resizeMode: 'center',
            height: 80,
            width: 80,
            borderRadius: 165,
            left:10,
          }}
          source={{
            uri:
              'data:image/png;base64,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',
          }}
        /></TouchableOpacity>
        <Text style={{top:120,left:35}}>MDN</Text>
<TouchableOpacity  onPress={handleImage1Press}>
<Image
          style={{
            position: 'absolute',
            aspectRatio: 1,
            flex: 1,
            top: 10,
            resizeMode: 'center',
            height: 80,
            width: 80,
            borderRadius: 165,
            left:130,
          }}
          source={{
            uri:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACiCAMAAAD84hF6AAAAe1BMVEX09fUAAAD6+/v+//+HiIiSk5P3+Pi0tbUtLS2en583NzcyMjKmp6e5urp8fHyMjIzOz8/o6ent7u7e39/Nzs6goaEbGxvw8fFdXV0kJCRyc3PX2NhsbW2WlpZXWFjAwcFCQkJ/gIAQEBBPT08WFxdubm5ISEgnJyesra1TOUYEAAAEc0lEQVR4nO3afVuqPADH8bnJtJQUsTympdapfP+v8GZsIA+bD3VdJ/T+fv5JRYb8Yo8gBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg39Myp0PbZVj9G8dL1uFigofuML3Z9TO7afu0czLqh+xm+TeSh4lxp5p7zidRFE36sT4cxiu+wtzkXc9K/D9eLXtBdhc5se8e67npxH68rB/GYxL4j3VZeT5D/49Xw1OxCfXHvp3XStBPtWwfw8VE1xxbb92sZbkzYhN6WX+f7/dqP3OV/3Zj67VaJ+Os2Fx9rFywytXcsWodpuWqK2lm4/n9NrbneNC2X5SFzG0Bf4rg5cZ+8FF8oFflbvE6j/hQ4vSau4RmLXNsbHfqyADEfMuV8mJj0ql9e3/4ymEAol7yTeqqByA2tq1t1ZfB2E7VI7WuXbBv9t3Ml4iMbGw//+2/yMZ2r97qtax0ZmxCDg8XrHq3r1fevW4otpFy1Spqns25sRXdwpMWqm9f7v3J3FRsMvZ3C+fGVnYLr2pgXzwEgrmp2MprJK23R2fHJtTYxWX/bEO53FZsxQD1b327je2x1ZN6ilIflU65twh1kDcWmxB2OvReOyEb2/vuoW7nze3+kNoqvKRyY7EVo61+9YwCs4Q331nrWbl9EE7l1mIrx/ZxdSDrj+3Je9Zy5TZPjoRyc7EJFbW6hYtiE2r/f4ytXAM6tOehqbz3rLMxm+tHB+Gu91hsSuVrmlIp+6qz6rEJ/ZWf9Wd5Um4qv4kbfCels7DU1ub2rS4h2X5m+8l0N+x9ffjnGB3RjM0N9suxajGV1w2eorJ56VTqRa95wTaPGIzNHHyuixb22BX76xqxld1CMTO6YLhrViITrV238I3hroltqkU23klFmjUXi/ZXuqIZm7DrOmUtu3ByNZJCfntylcdmyklk1kzeb+fdbd5asZVrQHbV59Kp/HPWvO3qF2zziCdiW5lRn9Si051COzYhR5VadunCUfqDhSNbSc1c43W/Uh1u2byxlReO+fDcZUo3cvnRMqVr2xa2LO+tja7wxFauAZn7J6GpfGNR3DWIUXBRvFL6qdiESsamoXjvcG6+2Gyn2Mvv1tnY1vtx2+OsLMR1v4dbMG717sNz5v7YzJDGxqalzMa75g7hpruNmze2cg0o0Zfc8PuqzMn8t+rzI7ZiM5FNpzPXJeyf8+qp/p417Pkl/tiEtGtAI/nT28vz1qm3YtODlRmsjZXamLFHdpmlSqpp1qFe29VWrgGtL3iYob6eXn+YoXrERmyynw1sTRm7vq3mprb3TZndTc3FtmzVJTl1tWx0KrZiNb3R8xXdwlOr5Lz+DlX1fTa6zQctr2bHxE5rPwMP83SCzh+n8rQiMjYboslLFDKxXUL6kD9u9dJ+UKtvHuBqPYelN40jyk1+l3AVx2lehlZpvM9edzi14nZ5cMMx7ouhuwuhBw5bR7QLA5UFgqw39S4WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+gf8Aq/AzQm8zEc8AAAAASUVORK5CYII='
          }}
        />
</TouchableOpacity>

<Text style={{top:100,left:160}}>Next</Text>

<TouchableOpacity  onPress={handleImage2Press}>
<Image
          style={{
            position: 'absolute',
            aspectRatio: 1,
            flex: 1,
            top: -193,
            resizeMode: 'center',
            height: 450,
            width: 200,
            left:190,
          }}
          source={{
            uri:
              'data:image/png;base64,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 ',
          }}
        />
</TouchableOpacity>

        <Text style={{top:80,left:260}}>TypeScript</Text>
        <TouchableOpacity  onPress={handleImage2Press}>
        <Image
          style={{
            position: 'absolute',
            aspectRatio: 1,
            flex: 1,
            top: -160,
            resizeMode: 'center',
            height: 350,
            width: 200,
            left:300,
          }}
          source={{
            uri:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEWQxT////9GSD2OxDtBPj2PxT6VzD9ogkCNwzf1+u74+/P3+/Gjz2KgzVyGwSy32Yet1HOm0Gmz133M46m83JCVzj6dzFZDQj1ujED7/fmXyk1zk0Dc7cVFRj1aaT1DQz1mfkDw9+Vbbz54nEHi780/Oz3o89rC3pnV6LlZZj+GwCbQ5rGNwUBQWD+z14Hk8dLE35+Fs0BKTj6HtkBSXj89Nj58pUCAvhY5LT10mD+Aq0Cb2j9id0Bqhz+OyjA2KD3hOR46AAAPaElEQVR4nO2dCVfjOBKAlcgySkiUO8Ym6WDI6ZzQQG8zMPv//9VKtnM58i0pIUu9fjM94LH02apSVUlWgcK1Czh3B6SLckLbVtygYsLSBlibstIm1RL2uhghUp2qbFMl4bBLIKACSXeorlV1hPYKu3wuI6rbqtpVRViaOBiBnSCM2yU1LashvG1ZGBwLwqClhFEJ4bRCIDgRRLo9BY0rIBxWHA6fq46OApMjndBeoeAAPWSEK1tyByQTlifw0MBwhiomE7nqKJXQnFvRfK5gq3UrsRMyCYdcA8N5j6Qi0cuRRzhOyMcEkoo0kyOLsFQDEQaGM1SlmRw5hLetGAPDGarUy5GijjIIzWkSA8NhtFoSAisJhOt6cgU8FqqO4r0c4YTjupNKAYOM3bXgDgkmLE3SGRgOIxJscoQSmi2QRQGPhZocoV6OQEJzWs3P5zGCuTizKo5w3MxqYDiMAk2OKEK7mcfAnAp0RHk5YgjNyUkMn1swrNki+iaEMFEIkVqYyRGgjvkJzV4VC1PAIKPVMs9OaNdl8TGBpJHX5OQktFdiDQyPsZLPy8lFWD5NEkoQDFZ5PIA8hFNL3AwYJdTk5FjNyU44rMhUwCCjNc/KmJXQrmEFA3QvEGf1ALIR2hPZBobD6GQzOVkIzVZXOR8TjNq2EsJpVY2BORWESfrUamrCdUOdgeExpjY5KQlLig3MqaT2clIRliZEhoudltFppDE5aQjnVXJuOk8wqCX3cpIT9s5mYE4FYTBJqo5JCccNeDF8TBDuzpMFVskIb9tRy5znEWpyEnk5SQhvN5dgYE6FBlZjEYQm28h0bpgQSWJyYgmHDaEGBhNCIgc8xBAi2iJKtriKYdxqTgzhuCl0hkfEqm3a3ahBb1lWl+X24SLhLbE1jWSMJCxvBPM5q7HJIhMctv8EgElvPV0Nq0592E04dmJMTgRhuYWFKiAmzW1P7Bok/Fsj0pj+6ZY2ztxOHsBApx7u5YQT9ipC+SDpHvjM5rASoo64MXUq07k176UJ0WhgFWZywgjX9fCBlEEgwRuvC+uat+/CnFvcKNolbE3m7Xk1jYZQkxOSy+ETRm9kSi1sjd6bucZtSEjTG1KlicUZqoywMW/Y1WklXRfCvBwu4URslh471Z7bdnlq0bGJCPAXCMcNcuLLQ6uBrQZoooaVdhBBUueYnFNCc556H0WkYMfy+Mxp1x+X0AH+kKKzbfBNQUz/IIKydAKTxomXc0I4bAjlo12d2N4LWx1MPXgbx5ZbXbEeBagF8hxBwprYEIkqnfdQ7Q05Vrrdb0ptFDJzZBI63ZiRhA2RFgaTytBTwNZpehyRhW/hmeMkjhE2ytGE4l4h1TZ/n/Owzp384Pa7hL2Gimi2rooQby3mevUnLPuBnYpvhag6CmpXGSEG/qy3WUSpNgH+9plxyukvVFQRQugNwHk3xjdiM4dr/ezU81/IDRURkrrJgufT6e5UMOm68U9NzDhVRthmLxBvO40Aon/8v2PiMNnDY1KjV7cEETZu1RHu3wqCCHjJOkxwZTXZtDbtZhdvNRR3RRIqfIftXZ/JxrbXbEkcg/b61jOfZXu48vf54cp3J0SEusQmtZbB7NjQmySugZB6oWYV44pd8N7fbdnzrcauBb0eQsd1t4ebZr3erLVcWpfraggJYFPI5I9DmPzBc3pNiSUrroew4o7L7SxBAH2L5opcEaHTYISQQOhNjQ7zezbOFRESNu0VehULM4EIV9u1WvWaRikmNmujPJ5uao0udB0b17NRSVgX5OGHEDb3rZdL42nNT2FcDyEgx/t+Tdvb+3dFhIhYk2HpMJEyVj1byCVEEFLP22rUJvPe2vZ60nPQFRGyiR5B918Eduvu0l+ZjtNrIeyCnm33gG+tKeifBsvkNK6I0LILhduDTTkQs0ijTq6GsIpZcmqzT9yQru0FVVdD6EyY3k0Q8QRbbCHFxldESCy38eG8zcKn9txm/9VS7JdKtqX1k5XaKUvoXw8hIPXjLEa5Bb61T1M7IQQEraa2n4oqjVv+N/u4+k0JN9v1lj0hnSGwVWnWarVVvQrIdsW08Q0JmwW2IW6bEd0TAm9flGtL/WmDOK4/PvlehBC4S+qlGnCXP1k2sczfXLFdKi0L+gBAFSE1Hru1Q4Kd6m0IAvQXLQrlmqhnq4qQOixTf4NCs+quoI1PN/lDcrCIKqhdWIletxBHSNVtu/nDiwc3QQZEoP+JyLiNRQGqJKRv6HAv1jj4JR8du94TMDmr/DlaVUjIpoHtXhNzHThsga0aer+Zdv8I3WCmlNAFabem81YTYHSgh1QBffT1KsEiahpRTbib/TDBTWsbONG/e3w2VUDBW6zVE7qCgLXqMR7XC91ueS1vxG6IcuVMhNDymHpVhzjbj7M4m9pENHUeQoroTezmvOJ/7bLOdZBNREtnImSzo7/BxvtnG4hWQF/ORkjNJ/HNJ3uTArd5Bds5GyFjtNxzZ8we2+Qt6yuVOMKm1O+b6FCdr3tN4TPEoZyXkMWCjiOT7/yE8uWH8Ifw8uWCCZEuxAJdLiF6vlvoAu5zuYSdh/+83KP8jBdMeKP1teV7bsaLJiwWB9rsdyfffS6csFg03h5/53qNF09IGfsfeRC/AWFx9HDthNrND2GU/B8QVks/hGeSH8Kk8kP4QyhPfgiTyg9hIkKUMN2Q9DpXkhAmuZ8AQh09g0QPmYCEqy+6richRPoiQXycmxB1nh+N1yc9timMa7Y9SXBIkQ7uH//qKJZQB3dLGh/HPbM4wph9O6izuBkZxcHb43N0U9jxzuAYxx0WrXfelyPjbfbxz1ckod55Wo76hvawiMkB5COkj7Ho9cMwHiIyY5BUdwdURh4WhvTnx9HAvd/n6yCcEOkfs1HfbbgYk67KQ0gf96vXjNuPl/tOSFOEHJ5qWJ6TMHXsgJuB4d/PGBTDCFEHPBjb6/raMnL8ZCekj3v2tusFa+rt5Z2njlQBAweolPnqqOt3g1HxVIKEOroxDq8bvM1+h2ePMxPqi5u+EejKwHg8aQoS3umi4/oJI9LfZ1q/yJFjQnrda/A6ox+ePc5IqOv3L7zHTdURHGo+IlZIgbFe4PiIzu/HUfCJcQip6Z6NBqfXjIph5jwbIecx7rrzcr9/ixBMQo/cLM8PDr5A4HRE8Aj1xeeAf11fe/3gjtRMhPp72ONmTY2+th1COPK8zfXOJ9Gfl6OQJ3ZEiH6/aKGXGaMn3lvMRngX3g5tabbVRWhFARYKuwNaOr94Q/6UUL+Puo42LImwbxwphvFr2xC0oo+F3W2D7jwej4ljRdsTdu4DDR+9+H3DgglHy7vZ4RjLTWgYr9ohYxih1n9Y8hsWSkh9CtDR35cap6FMhH3t17P+sTywZHzCgfFJHbabosFpWCSh9sh8X+o3fe26lI9QGzC3QUd32v5HPELt5Vl3oMMmj92PZOih8WvrMHXudu5WHkLjwXf9OmhmRBAan52O1SqMq/gfvzP90fJZBuHezD1pIghHT1uHgRc97Qm1r457Lkq5/a/bMJ1Nv/hRal7CB+GEO5qHSMKbf5vuzef//qU/M7THsCjqKgj72uwj1PWG3e9K2KkXfML/9u8jUgwXR/ieUA9vOrgxpmoI0eIvigrzL42QTnLu/43035wYf0/Yf3nSCWhXCIrbWXRphHQ+pB4E6Cy+YubD/tvso5NkZ78EwkFOr01bvoO/xQP3LMRrM4zPJLs0LpCQ+mPLo+gz1PPWXu702N02Zx2llbDY4jhWDCWMCu0FEfZHf3eEz9t4YE+IUGSlgttdkN95jIr73r62L0p/egv8bqDNniVamtHL3/0D1D9e3/rHhCCydNh4/x2A/vwaGuMPRrPFDgHda8Hg29A+I5PCOQiN4g04fHy6fu/GUIdBDCZhxUOPy5wg/f6Fm/npa8uno0YWDyeJGqN4F7FGk43w3nCTlMFEbGfxMNICYRpZtHiA824gK6wvPt9Okz+adpy7c7Pd/lg5eAyj1/BlrTjCNv8djkZ0NuLctPP7czQ6DkSRc5pQHFqck2hZPvE4fcEfgHrnI5C30gZf2d8hn/D9JcwT1Gm4H0zCw+1R3b7YIWVAdP3pcJqgb4abQ2erancHof1Ae4wyNpkIaSAWbqJ1TmuY7D8ALm/Cv2LuoLv+lnEU+hSBqw++z0MN0XvYekkOwkjhPU5E/Dq3rFhAlHGnXXfXXIz+1yJqFqB+64xOT64hip4QJRCGNOSwD0XHsR9RUi17fdPefsWsR7r68PI2it/trozQPY68keQbPL3z9PAeu7TLLtQ/FvHXQSuasCWydk7CeyE9fs3cvzD+OWDcjq4cUFjXL6eAXHqBTjO4tsepUdJryP18Tp4gzKn+yKvCYrbEVilRJAgTXgVPfiUdcwIEqqMSoV7vhhu7hVVDOqqZ8g0EQ/+UhsSE7MQYoRWfpArkVNCJJxRetUuaIFyNKC8bXVlu7lw+I8I4skBgTHXA8gZcOCMG7ejkUAwhC33gBZscDOtxhTpjCamXU7lULydRfecEhAWzV73EoUoNzDxB75MQii/2KEIw2SQq7JyMkL7H9mWZHIwnCQtXJyW8LJMDcURZzsyEl+PlHO7PFUtYKEwvwcvB1jRZRe4shG793LMyIuzsTiqSQhi631eRYBxfpjovofA6zykE4iSlxvMTCq/VnZSPdFMYmHyEZ6m3jrutNAYmJ2GhcNuKKh8ugY+kVsCchGyHmbpcDsZ+HUilhNTLaajxcmDk0rJMQmpyFARWrGR5nj7mI6ReTlVy+hhbIRXFVRFK9nKwE7YvQB0h24MgSx2Di8nnIuR+1SSCD/sl2fOJEEJ3NUewyUEYpAohQkUQYcGc8k/NzyrYmtzGt5pERBGy4s3i0sfYiU0SJhZxhNTkCAqsIA5fhUgvIgldk5NbHRHuijAwOxFLSL2caj6TQw1M5CpEehFNyI7Jz6GOGNTE8kkgpCZnkjWwwhHLgJlFAiGrN5LFy4G7ehhCRQphFpNDDcxcpIHZiSRCtoCcxuQgjHOGEKEijbBQmCf3cvC2HIsEkUjompwkfNDhHVIgSmQSsvoA8V4OJHlyFPEil5Btk4s2OQhbvI1MAkU2ISvaEW5ymIHJmCRMLPIJqZcTrIO0G6Aoe5IwsSggZCaHF1hB0pVoYHaihJBnctItc+YQRYRsx/ehyUG5k4SJRRnhkcnBuC3bwOxEIWHBbHn1AWHoTkkZopKQqSPBGZcBM4taQlbUMtFGJoGimrBgCkoSJhblhMrlh/D7y/8ACKKJP+xYgoYAAAAASUVORK5CYII='
          }}
        />
        </TouchableOpacity>


 <Text style={{top:60,left:380}}>Node JS</Text>

          </View>
        </ScrollView>
       
        <View style={styles.container}>
        <Text style={{backgroundColor:'white',top:-25,left:-90}}> Courses management</Text>
        <ScrollView horizontal={true} style={{marginTop: -5,backgroundColor:'white'}}>
          
          <Create style={styles.cardContainer}  />
          <See style={styles.cardContainer}/>
          <Delete style={styles.cardContainer}/>
        </ScrollView>

        </View>
      </ScrollView>
      </View>
      
    </SafeAreaView>
  );
}
