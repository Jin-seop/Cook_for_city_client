import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Axios from 'axios';

export default function CheckDeleteUser  (props:any)  {
  
  const [userId,setUserId] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  const [email,setEmail] =useState<string>('');
  
  const deleteUserHandler = () => {
    Axios.patch('http://13.125.205.76:50000/mypage/Leave',{
      userId,
      password,
      email
    })
      .then(res => {        
        props.navigation.navigate('LoginPage');
        return alert('회원탈퇴가 완료되었습니다.');
      })
      .catch(err => alert('정보가 잘못됬습니다'));
  };

  return(
    <View style={style.background}>
      <View style={style.mainWrapper} >
        <View style={style.mainLogoWrapper}>
          <Text style={style.logoText} >Cook.Si.In회원 탈퇴</Text>
        </View>
        <TextInput 
          placeholder='아이디를 입력해주세요' 
          style={style.input}
          onChange={e => {
            e.preventDefault();
            setUserId(e.nativeEvent.text);
          }} 
        />
        <TextInput 
          placeholder='비밀번호를 입력해주세요' 
          style={style.input} 
          onChange={e => {
            e.preventDefault();
            setPassword(e.nativeEvent.text);
          }} 
          secureTextEntry={true}
        />
        <TextInput 
          placeholder='이메일을 입력해주세요'
          style={style.input} 
          onChange={e => {
            e.preventDefault();
            setEmail(e.nativeEvent.text);
          }} />
      </View>
      <View style={style.buttonWrapper}>
        <View style={style.button} >
          <Button title='확인' onPress={()=> deleteUserHandler()} ><Text>확인</Text></Button>
        </View>
        <View style={style.button}>
          <Button title='취소' onPress={()=> props.navigation.goBack()} ><Text>취소</Text></Button>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  background:{
    width:'100%',
    height:'100%',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'gray'
  },
  mainWrapper:{
    width:250,
    height:250,
    backgroundColor:'white',
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center'
  },
  mainLogoWrapper:{
    marginBottom:20
  },
  logoText:{
    fontSize:20
  },
  input:{
    borderWidth:1,
    height:40,
    width:180,
    borderRadius:10,
    marginBottom:10,
    padding:10
  },
  buttonWrapper:{
    flexDirection:'row'
  },
  button:{
    margin:10
  }
  
});