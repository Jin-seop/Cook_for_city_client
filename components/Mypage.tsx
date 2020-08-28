import React from 'react';
import { StyleSheet, Text, View ,Image, ImageBackground, TextInput,TouchableOpacity} from 'react-native';
import MypageImage from '../assets/Mypage.png';
import WhiteBackgroundImage from '../assets/city_white.jpg';

export default function Mypage() {
  return (
    <ImageBackground source={WhiteBackgroundImage} style={{width:'100%',height:'100%'}}>
    <View>
      <TouchableOpacity><Text>메뉴</Text></TouchableOpacity> 
      <TouchableOpacity><Text>메인페이지</Text></TouchableOpacity> 
      <TouchableOpacity><Text>로그아웃</Text></TouchableOpacity> 
    </View>
    <View >
      <Image source={MypageImage}></Image>
    </View>
    <View>
      <Text>내 즐겨찾기</Text>
    </View>
    <View>
      <Text>내가 준 별점</Text>
    </View> 
    <View>
      <TouchableOpacity><Text>내 정보 수정하기</Text></TouchableOpacity> 
    </View>
    <View>
      <TouchableOpacity><Text>회원 탈퇴</Text></TouchableOpacity> 
    </View>
  </ImageBackground>
);
}
const style = StyleSheet.create({

});