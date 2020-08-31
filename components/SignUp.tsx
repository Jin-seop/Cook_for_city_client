import React from 'react';
import { StyleSheet, Text, View ,Image, ImageBackground, TextInput,TouchableOpacity } from 'react-native';
import SignupImage from '../assets/SignUp.png';
import WhiteBackgroundImage from '../assets/city_white.jpg';

export default function SignUp() {
  return (
    <ImageBackground source={WhiteBackgroundImage} style={style.backgroundImg}>
      <View style={style.mainLogoWrapper} >
        <Image source={SignupImage} style={style.mainLogo}></Image>
      </View>
      <View style={style.textWrapper}>
        <TextInput autoCompleteType='username' placeholder='아이디'style={style.userNameInput} />
        <TouchableOpacity style={style.checkButton}><Text>중복확인</Text></TouchableOpacity> 
        <TextInput autoCompleteType='password' placeholder='비밀번호'style={style.userPasswordInput} />
        <TextInput autoCompleteType='password' placeholder='비밀번호 재확인' style={style.userPasswordInput} />
        <TextInput autoCompleteType='email' placeholder='email 입력' style={style.userPasswordInput}/>
      </View>
      <View style={style.buttonWrapper}>
        <TouchableOpacity style={style.button} onPress={()=> props.navigation.navigate('LoginPage')}><Text>가입하기</Text></TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={()=> props.navigation.goBack()}><Text>뒤로가기</Text></TouchableOpacity>
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
  mainLogoWrapper:{
    width:250,
    height:180,
    top:-130
  },
  mainLogo:{
    width:'100%',
    height:'100%'
  },
  textWrapper:{
    width:'50%',
    height:'15%',
    top:-100
  },
  userNameInput:{
    width:'60%',
    height:40,
    borderStyle:'solid',
    borderColor:'black',
    borderWidth:1,
    borderRadius:5,
    backgroundColor:'white',
    padding:10
  },
  checkButton:{
    width:80,
    height:40,
    left:130,
    top:-40,
    marginBottom:-30,
    alignItems:'center',
    justifyContent:'center',
    borderStyle:'solid',
    borderColor:'black',
    borderWidth:1,
    borderRadius:5,
    backgroundColor:'#F3ECA5'
  },
  userPasswordInput:{
    width:'100%',
    height:40,
    borderStyle:'solid',
    borderColor:'black',
    borderWidth:1,
    borderRadius:5,
    backgroundColor:'white',
    marginBottom:10,
    padding:10
  },
  buttonWrapper:{
    position:'absolute',
    width:200,
    top:510,
  },
  button:{
    width:"100%",
    height:40,
    backgroundColor:'#F3ECA5',
    borderWidth:1,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10
  }
});