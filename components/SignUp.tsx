import React from 'react';
import { StyleSheet, Text, View ,Image, ImageBackground, TextInput,TouchableOpacity} from 'react-native';
import SignupImage from '../assets/SignUp.png';
import WhiteBackgroundImage from '../assets/city_white.jpg';

export default function SignUp() {
  return (
    <ImageBackground source={WhiteBackgroundImage} style={{width:'100%',height:'100%'}}>
    <View >
      <Image source={SignupImage}></Image>
    </View>
    <View>
      <TextInput autoCompleteType='username' defaultValue='아이디'/>
      <TouchableOpacity><Text>중복확인</Text></TouchableOpacity> 
      <TextInput autoCompleteType='password' defaultValue='비밀번호'/>
      <TextInput autoCompleteType='password' defaultValue='비밀번호 재확인'/>
      <TextInput autoCompleteType='email' defaultValue='email 입력'/>
    </View>
    <View>
      <TouchableOpacity><Text>가입하기</Text></TouchableOpacity>
      <TouchableOpacity><Text>뒤로가기</Text></TouchableOpacity>
    </View>
  </ImageBackground>
);
}
const style = StyleSheet.create({

});