import React from 'react';
import { StyleSheet, Text, View ,Image, ImageBackground, TextInput,TouchableOpacity} from 'react-native';
import loginImage from '../assets/login.png';
import blackBackgroundImage from '../assets/pngtree-china-import-expo-creative-poster-image_197057.jpg';

export default function LoginPage() {
  return (
    <ImageBackground source={blackBackgroundImage} style={styles.backgroundImg}>
      <View style={styles.mainLogoWrapper}>
        <Image source={loginImage} style={styles.mainLogo}></Image>
      </View>
      <View style={styles.userNametextWrapper}>
        <TextInput autoCompleteType='username' placeholder='아이디를 입력해주세요' style={styles.userNameInput}/>
      </View>
      <View style={styles.userPasswordtextWrapper}>
        <TextInput autoCompleteType='password' placeholder='비밀번호를 입력해주세요'style={styles.userPasswordInput}/> 
      </View>
      <View style={styles.LoginbuttonWrapper}>
        <TouchableOpacity style={styles.button}><Text>로그인</Text></TouchableOpacity>
      </View>
      <View style={styles.SignUpbuttonWrapper}>
        <TouchableOpacity style={styles.button}><Text>회원가입</Text></TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImg:{
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  mainLogoWrapper:{
    width:250,
    height:180,
    top:-70
  },
  mainLogo:{
    width:'100%',
    height:'100%'
  },
  userNametextWrapper:{
    width:'50%',
    height:'15%',
    top:-30,
  },
  userPasswordtextWrapper:{
    width:'50%',
    height:'15%',
    top:-70,
  },
  userNameInput:{
    width:'100%',
    height:40,
    borderStyle:'solid',
    borderColor:'black',
    borderWidth:1,
    borderRadius:5,
    backgroundColor:'white',
    padding:10,
    opacity:0.5
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
    padding:10,
    opacity:0.5
  },
  LoginbuttonWrapper:{
    position:'absolute',
    width:200,
    top:450,
  },
  SignUpbuttonWrapper:{
    position:'absolute',
    width:200,
    top:530,
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
