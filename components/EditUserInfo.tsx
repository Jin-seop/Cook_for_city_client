import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View ,Image, ImageBackground, TextInput,TouchableOpacity } from 'react-native';
import EditUserInfoImage from '../assets/Mypage.png';
import WhiteBackgroundImage from '../assets/city_white.jpg';
import Axios from 'axios';

export default function EditUserInfo(props:any) {

  const [userid,setUserid] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  const [checkPassword,setCheckPassword] = useState<string>('');
  const [email,setEmail] = useState<string>('');


  const changeHandler = () => {
    const checkEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (
      password.length === 0 ||
      checkPassword.length === 0 ||
      email.length === 0 ||
      password !== checkPassword
    ) {
      return alert('입력이 잘 못 되었습니다. 다시입력해 주세요');
    }
    
    if (password.length < 8) {
      return alert('비밀번호를 8자 이상으로 해주세요');
    }

    if (!checkEmail.test(email)) {
      return alert('이메일이 잘 못 되었습니다');
    }
    if(password === checkPassword){
      Axios.put('13.125.205.76:50000/mypage/setupPut',{
        email,
        userid,
        password
      })
        .then(res => {
          if(res.status === 201){
            alert('회원정보가 수정되었습니다.');
            props.navigation.navigate('Mypage');
          }
        })
        .catch(err => console.error(err));
    }
    if(password !== checkPassword){
      return alert('비밀번호가 일치하지 않습니다.');
    }
  };

  useEffect(()=> {setUserid(props.navigation.state.params.userid);},[]);
  return (
    <ImageBackground source={WhiteBackgroundImage} style={style.backgroundImg}>
      <View style={style.align}>
        <View style={style.mainLogoWrapper}>
          <Image source={EditUserInfoImage} style={style.mainLogo}></Image>
        </View>
        <View style={style.inputWrapper}>
          <TextInput 
            secureTextEntry={true}
            autoCompleteType='password' 
            placeholder='비밀번호' 
            style={style.Input} 
            onChange={
              e => {
                e.preventDefault();
                setPassword(e.nativeEvent.text);
              }
            } />
          <TextInput 
            secureTextEntry={true}
            autoCompleteType='password' 
            placeholder='비밀번호 재확인'
            style={style.Input}
            onChange={e=>{
              e.preventDefault();
              setCheckPassword(e.nativeEvent.text);
            }}
          />
          <TextInput 
            autoCompleteType='email' 
            placeholder='Email 주소'
            style={style.Input}
            onChange={e=>{
              e.preventDefault();
              setEmail(e.nativeEvent.text);
            }}
          />
        </View>
        <View style={style.buttonWrapper}>
          <TouchableOpacity style={style.button} onPress={()=> changeHandler()}><Text>수정하기</Text></TouchableOpacity>
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