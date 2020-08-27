import React from 'react';
import { StyleSheet, Text, View ,Image, ImageBackground, TextInput,TouchableOpacity} from 'react-native';
import loginImage from './assets/login.png';
import blackBackgroundImage from './assets/pngtree-china-import-expo-creative-poster-image_197057.jpg';

export default function LoginPage() {
  return (
    <ImageBackground source={blackBackgroundImage} style={{width:'100%',height:'100%'}}>
      <View >
        <Image source={loginImage}></Image>
      </View>
      <View>
        <TextInput autoCompleteType='username' defaultValue='아이디'/>
        <TextInput autoCompleteType='password' defaultValue='패스워드'/> 
      </View>
      <View>
        <TouchableOpacity><Text>로그인</Text></TouchableOpacity>
        <TouchableOpacity><Text>회원가입</Text></TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
});
