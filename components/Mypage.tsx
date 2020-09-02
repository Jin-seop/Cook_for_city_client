import React from 'react';
import { StyleSheet, Text, View ,Image, ImageBackground,TouchableOpacity, Linking, Alert } from 'react-native';
import MypageImage from '../assets/Mypage.png';
import WhiteBackgroundImage from '../assets/city_white.jpg';
import Axios from 'axios';

export default function Mypage(props:any) {

  
  const logoutHandler = () => {
    Axios.post('http://52.78.146.191:5000/login/signout')
      .then(res => {
        if(res.status === 200){
          props.navigation.navigate('LoginPage');
          return alert(res.data);
        }
      }).catch(err => {
        console.error(err);
      });
  };
  return (
    <ImageBackground source={WhiteBackgroundImage} style={style.backgroundImg}>
      <View style={style.align}>
        <View style={style.sideButtons}>
          <TouchableOpacity style={style.sideButton}>
            <Text>메뉴</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={style.sideButton} onPress={()=> props.navigation.navigate('MoveDoSiIn')}>
            <Text style={style.sideButtonText}>DO.SI.IN</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={style.sideButton}>
            <Text style={style.sideButtonText} onPress={()=> props.navigation.navigate('MainPage')}>메인페이지</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={style.sideButton} onPress={()=> logoutHandler()}>
            <Text style={style.sideButtonText}>로그아웃</Text>
          </TouchableOpacity> 
        </View>
        <View style={style.mainLogoWrapper}>
          <Image source={MypageImage} style={style.mainLogo}></Image> 
        </View>
        <View style={style.myfavoritesBox}>
          <Text style={style.aligntext}>내 즐겨찾기</Text>
        </View>
        <View style={style.mystarBox}>
          <Text style={style.aligntext}>내가 준 별점</Text>
        </View> 
        <View style={style.editButtonWrapper}>
          <TouchableOpacity style={style.button} onPress={()=> props.navigation.navigate('EditUserInfo',{userid:props.navigation.state.params.userid})}><Text>내 정보 수정하기</Text></TouchableOpacity> 
        </View>
        <View style={style.buttonWrapper}>
          <TouchableOpacity style={style.button} onPress={()=> props.navigation.navigate('checkDeleteUser')}>
            <Text>회원 탈퇴</Text>
          </TouchableOpacity> 
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
    alignItems: 'center' 
  },
  aligntext:{
    textAlign: 'center',
  },
  sideButtons: {
    position: 'absolute',
    right: 245,
    top: 25,
  },
  sideButton: {
    width: 50,
    height: 40,
    backgroundColor: '#F3ECA5',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideButtonText: { 
    fontSize: 10 
  },
  mainLogoWrapper:{
    width:220,
    height:92,
    top: -240
  },
  mainLogo:{
    width:'100%',
    height:'100%'
  },
  myfavoritesBox: {
    width: 219,
    height: 178,
    backgroundColor: '#F3ECA5',
    position: 'absolute',
    top: 170,
    borderRadius: 5,
  },
  mystarBox: {
    width: 219,
    height: 109,
    backgroundColor: '#F3ECA5',
    position: 'absolute',
    top: 390,
    borderRadius: 5,
  },
  editButtonWrapper:{
    position:'absolute',
    width:200,
    top:530,
  },
  buttonWrapper:{
    position:'absolute',
    width:200,
    top:600,
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