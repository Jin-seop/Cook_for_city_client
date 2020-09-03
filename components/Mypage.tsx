import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View ,Image, ImageBackground,TouchableOpacity, Linking, Alert } from 'react-native';
import MypageImage from '../assets/Mypage.png';
import WhiteBackgroundImage from '../assets/city_white.jpg';
import Axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

export default function Mypage(props:any) {
  const [postList,setPostList] = useState([] as any);
  const [comments,setComments] = useState([] as any);
  
  const postInfoHandler = () => {
    Axios.get('http://13.125.205.76:50000/mypage/mypageGet')
      .then(res => {
        setPostList(res.data[0].Recipe);
        setComments(res.data[0].cookcomment); 
      })
      .catch(err => console.error(err));
  };

  const postHandler = () => {
    if(postList){
      return postList.map((data:any,key:number) => {
        return(
          <TouchableOpacity key={key} style={style.favoriteListWrapper} onPress={() => props.navigation.navigate('PostPage',{title:data.title,userid:props.navigation.state.params.userid})}>
            <Text>- {data.title}</Text>
          </TouchableOpacity>
        );
      });
    }
  };

  const commentHandler = () => {
    if(comments){
      return comments.map((data:any,key:number) =>{
        return(
          <TouchableOpacity key={key} style={style.favoriteListWrapper} onPress={() => props.navigation.navigate('PostPage',{title:data.cookcommentrecipe.title,userid:props.navigation.state.params.userid})}>
            <Text>- {data.comment}</Text>
          </TouchableOpacity>
        );
      });
    }
  };

  const logoutHandler = () => {
    Axios.post('http://13.125.205.76:50000/login/signout')
      .then(res => {
        if(res.status === 200){
          props.navigation.navigate('LoginPage');
          return alert(res.data);
        }
      }).catch(err => {
        console.error(err);
      });
  };

  useEffect(()=> postInfoHandler(),[]);
  
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
          <ScrollView>
            {postHandler()}
          </ScrollView>
        </View>
        <View style={style.mystarBox}>
          <Text style={style.aligntext}>내가 쓴 댓글</Text>
          <ScrollView>
            {commentHandler()}
          </ScrollView>
        </View> 
        <View style={style.editButtonWrapper}>
          <TouchableOpacity style={style.button} onPress={()=> props.navigation.navigate('EditUserInfo',{userid:props.navigation.state.params.userid})}>
            <Text>내 정보 수정하기</Text>
          </TouchableOpacity> 
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
    height: 150,
    backgroundColor: '#F3ECA5',
    position: 'absolute',
    top: 170,
    borderRadius: 5,
  },
  mystarBox: {
    width: 219,
    height: 150,
    backgroundColor: '#F3ECA5',
    position: 'absolute',
    top: 350,
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
    top:580,
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
  favoriteListWrapper:{
    width:'100%',
    margin:10,
  }
});