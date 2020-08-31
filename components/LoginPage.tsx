import React, { useState } from 'react';
import { StyleSheet, Text, View ,Image, ImageBackground, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import loginImage from '../assets/login.png';
import blackBackgroundImage from '../assets/blackBackground.jpg';
import { resolvePreset } from '@babel/core';

export default function LoginPage(props:object) {
  
  const [userId, setUserId] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const userInfoHandler = () => {
    axios
      .post(
        'http://52.78.146.191:5000/login/signin',
        {
          userid : userId,
          password: userPassword,
        },
        {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          props.navigation.navigate('MainPage', { userId });
        }
      })
      .catch(err => {
        console.error(err);
        alert('유저 정보가 없습니다.');
      });
  }; 
  return (
    <ImageBackground source={blackBackgroundImage} style={styles.backgroundImg}>
      <View style={styles.align}>
        <View style={styles.mainLogoWrapper}>
          <Image source={loginImage} style={styles.mainLogo}></Image>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput  
            placeholder='아이디를 입력해주세요' 
            style={styles.Input}
            onChange={(e:object) => {
              e.preventDefault();
              setUserId(e.nativeEvent.text);
            }}
          />
          <TextInput 
            placeholder='비밀번호를 입력해주세요'
            style={styles.Input}
            onChange={(e:object) => {
              e.preventDefault();
              setUserPassword(e.nativeEvent.text);
            }}
          /> 
        </View>
        <View style={styles.LoginbuttonWrapper}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => {
              userInfoHandler();
            }}
          >
            <Text>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => {props.navigation.navigate('SignUp');
            }}
          >
            <Text>회원가입</Text>
          </TouchableOpacity>
        </View>
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
  align: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  mainLogoWrapper:{
    width:250,
    height:180,
    top:-60
  },
  mainLogo:{
    width:'100%',
    height:'100%',
    borderRadius:5
  },
  inputWrapper:{
    width:250,
    height:150,
    top:-30,
    alignContent:'center',
    justifyContent:'center',
  },
  Input:{
    width:200,
    height:40,
    borderStyle:'solid',
    borderColor:'black',
    borderWidth:1,
    borderRadius:5,
    backgroundColor:'white',
    padding:10,
    marginLeft:25,
    marginBottom:10
  },
  LoginbuttonWrapper:{
    position:'relative',
    width:200
  },
  SignUpbuttonWrapper:{
    position:'absolute',
    width:20,
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
  },
  
});