import React from 'react';
import { StyleSheet, Text, View ,Image, ImageBackground, TextInput,TouchableOpacity } from 'react-native';
import EditUserInfoImage from '../assets/Mypage.png';
import WhiteBackgroundImage from '../assets/city_white.jpg';

export default function EditUserInfo() {
  return (
    <ImageBackground source={WhiteBackgroundImage} style={{width:'100%',height:'100%'}}>
      <View >
        <Image source={EditUserInfoImage}></Image>
      </View>
      <View>
        <Text>아이디</Text>
        <TextInput autoCompleteType='password' defaultValue='비밀번호'/>
        <TextInput autoCompleteType='password' defaultValue='비밀번호 재확인'/>
        <TextInput autoCompleteType='email' defaultValue='Email 주소'/>
      </View>
      <View>
      <TouchableOpacity><Text>수정하기</Text></TouchableOpacity>
      <TouchableOpacity><Text>뒤로가기</Text></TouchableOpacity>
      </View>
    </ImageBackground>
  );  
};
const style = StyleSheet.create({

});