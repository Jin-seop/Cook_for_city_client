import React, { useState } from 'react';
import { StyleSheet, Text, View ,Image, ImageBackground, TextInput,TouchableOpacity } from 'react-native';
import SignupImage from '../assets/SignUp.png';
import WhiteBackgroundImage from '../assets/city_white.jpg';
import Axios from 'axios';

export default function SignUp(props:any) {
  const [userId,setUserId] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  const [checkPassword,setCheckPassword] = useState<string>('');
  const [email,setEmail] = useState<string>('');

  const idCheckHandler = () => {

    if (userId.length === 0) {
      return alert('아이디를 입력해주세요');
    }

    if (userId.length <= 4) {
      return alert('아이디를 5자 이상으로 해주세요');
    }
  
    Axios.post('http://52.78.146.191:5000/signup/checkid',{
      userid:userId
    }).then(res => {
      if(res.status === 200){
        return alert('사용가능한 아이디입니다.');
      }
    }).catch(err => {
      return alert('사용할 수 없는 아이디입니다.');
    });
  };

  const signupHandler = () => {
    const checkEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (
      userId.length === 0 ||
      password.length === 0 ||
      checkPassword.length === 0 ||
      email.length === 0 ||
      password !== checkPassword
    ) {
      return alert('입력이 잘 못 되었습니다. 다시입력해 주세요');
    }
    if (userId.length < 4) {
      return alert('아이디를 5자 이상으로 해주세요');
    }
    if (password.length < 8) {
      return alert('비밀번호를 8자 이상으로 해주세요');
    }

    if (!checkEmail.test(email)) {
      return alert('이메일이 잘 못 되었습니다');
    }

    Axios.post('http://52.78.146.191:5000/signup/signup',{
      userid:userId,
      password,
      email
    })
      .then(res => {
        if(res.status === 201){
          alert('회원가입 완료');
          props.navigation.navigate('LoginPage');
        }
      })
      .catch(err => {
        return alert('회원가입 실패');
      });
  };

  return (
    <ImageBackground source={WhiteBackgroundImage} style={style.backgroundImg}>
      <View style={style.mainLogoWrapper} >
        <Image source={SignupImage} style={style.mainLogo}></Image>
      </View>
      <View style={style.textWrapper}>
        <TextInput 
          autoCompleteType='username' 
          placeholder='아이디'
          style={style.userNameInput} 
          onChange={e => {
            e.preventDefault();
            setUserId(e.nativeEvent.text);
          }}/>
        <TouchableOpacity style={style.checkButton} onPress={()=> idCheckHandler()}><Text>중복확인</Text></TouchableOpacity> 
        <TextInput 
          autoCompleteType='password' 
          secureTextEntry={true} 
          placeholder='비밀번호'
          style={style.userPasswordInput} onChange={e => {
            e.preventDefault();
            setPassword(e.nativeEvent.text);
          }} />
        <TextInput 
          autoCompleteType='password' 
          secureTextEntry={true} 
          placeholder='비밀번호 재확인' 
          style={style.userPasswordInput} 
          onChange={e => {
            e.preventDefault();
            setCheckPassword(e.nativeEvent.text);
          }} />
        <TextInput 
          autoCompleteType='email' 
          placeholder='email 입력' 
          style={style.userPasswordInput}
          onChange={e => {
            e.preventDefault();
            setEmail(e.nativeEvent.text);
          }}
        />
      </View>
      <View style={style.buttonWrapper}>
        <TouchableOpacity style={style.button} onPress={() => signupHandler()}><Text>가입하기</Text></TouchableOpacity>
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