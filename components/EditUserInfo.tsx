import React from 'react';
import { StyleSheet, Text, View ,Image, ImageBackground, TextInput,TouchableOpacity } from 'react-native';
import EditUserInfoImage from '../assets/Mypage.png';
import WhiteBackgroundImage from '../assets/city_white.jpg';

export default function EditUserInfo(props) {
  return (
    <ImageBackground source={WhiteBackgroundImage} style={style.backgroundImg}>
      <View style={style.align}>
        <View style={style.mainLogoWrapper}>
          <Image source={EditUserInfoImage} style={style.mainLogo}></Image>
        </View>
        <View>
          <Text style={style.aligntext}>아이디</Text>
        </View>
        <View style={style.inputWrapper}>
          <TextInput autoCompleteType='password' placeholder='비밀번호' style={style.Input}/>
          <TextInput autoCompleteType='password' placeholder='비밀번호 재확인'style={style.Input}/>
          <TextInput autoCompleteType='email' placeholder='Email 주소'style={style.Input}/>
        </View>
        <View style={style.buttonWrapper}>
          <TouchableOpacity style={style.button} onPress={()=> props.navigation.navigate('Mypage')}><Text>수정하기</Text></TouchableOpacity>
          <TouchableOpacity style={style.button}onPress={()=> props.navigation.goBack()} ><Text>뒤로가기</Text></TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );  
}
const style = StyleSheet.create({
  backgroundImg:{
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  align: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  mainLogoWrapper:{
    width:250,
    height:180,
    top:-40
  },
  mainLogo:{
    width:'100%',
    height:'100%',
    borderRadius:5
  },
  aligntext:{
    position: 'absolute',
    left:-120,
    top: -30,
  },
  inputWrapper:{
    width:250,
    height:150,
    top:-10,
    alignContent:'center',
    justifyContent:'center',
    left:-25
  },
  Input:{
    width:250,
    height:40,
    borderStyle:'solid',
    borderColor:'black',
    borderWidth:1,
    borderRadius:5,
    backgroundColor:'white',
    padding:10,
    marginLeft:25,
    marginBottom:10,
  },
  buttonWrapper:{
    position:'relative',
    width:200,
    top: 30,
    left: -25
  },
  button:{
    width:250,
    height:40,
    backgroundColor:'#F3ECA5',
    borderWidth:1,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20
  },
});