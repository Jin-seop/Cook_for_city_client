import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground,StyleSheet } from 'react-native';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';
import cityWhite from '../assets/city_white.jpg';
import Axios from 'axios';


export default function MainPage(props:any) {
  const [serch,setSerch] = useState<string>("");
  const [dataList,setDataList] = useState([] as any);
  const [preSerch,setPreSerch] = useState<string>("");
  const [sessonList,setSessonList] = useState([] as any);
  
  const serchListHandler:any = () => {
    if(preSerch !== serch){
      setPreSerch(serch);
      Axios.post('http://52.78.146.191:5000/recipe/recipesearch',{
        meterial:serch
      }).then(res => {
        setDataList(res.data);
      })
        .catch(err => {
          console.error(err);
        });
      
    }
    if(dataList.length > 0){
      return dataList.map((data:any,key:number) => {
        return (
          <TouchableOpacity style={style.content} onPress={()=> props.navigation.navigate('PostPage')} key={key} >
            <ImageBackground source={{uri:data.recipe_img}} style={style.contentBackgroundImg} >
              <Text style={style.contentText} >{data.title}</Text>
            </ImageBackground>
          </TouchableOpacity>
        );
      });
    }
  };

  const seasonListHandler = () => {
    if(sessonList.length === 0 || sessonList !== sessonList){
      Axios.get('http://52.78.146.191:5000/recipe/materials')
        .then(res => {
          setSessonList(res.data);
        });
    }

    return sessonList.map((listItem:string,key:number) => {
      return (
        <TouchableOpacity style={style.content} onPress={()=> props.navigation.navigate('PostPage')} key={key} >
          <ImageBackground style={style.contentBackgroundImg} >
            <Text style={style.contentText} >{listItem}</Text>
          </ImageBackground>
        </TouchableOpacity>
      );
    });
  };

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
  return(
    <ImageBackground  source={cityWhite} style={style.background}>
      <View style={style.menuWrapper}>
        <Text style={style.menuText}>메뉴</Text>
        <TouchableOpacity style={style.menuButton} onPress={()=> props.navigation.navigate('MoveDoSiIn')}><Text style={style.menuButtonText}>DO.SI.IN</Text></TouchableOpacity>
        <TouchableOpacity style={style.menuButton} onPress={()=> props.navigation.navigate('Mypage')}><Text style={style.menuButtonText}>마이페이지</Text></TouchableOpacity>
        <TouchableOpacity style={style.menuButton} onPress={()=> logoutHandler()}><Text style={style.menuButtonText}>로그아웃</Text></TouchableOpacity>
      </View>
      <View style={style.serchbar} >
        <TextInput  style={style.serchInput} placeholder="검색" onChange={e => {
          e.preventDefault();
          if(serch !== e.nativeEvent.text){
            setSerch(e.nativeEvent.text);
          }
        }} />
      </View>
      <ScrollView style={style.mainContentsWrapper}>
        <View>
          {serch ? serchListHandler() : seasonListHandler()}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  background : {
    width:'100%',
    height:'100%'
  },
  menuWrapper:{
    width:70,
    height:180,
    position:'relative',
    top:30,
    left:10,
    
  },
  menuText:{
    backgroundColor:'#F3ECA5',
    borderRadius:15,
    width:50,
    height:40,
    textAlignVertical:'center',
    paddingStart:10
  },
  menuButton:{
    backgroundColor:'#F3ECA5',
    borderRadius:15,
    width:50,
    height:40,
    alignItems:'center',
    justifyContent:'center'
  },
  menuButtonText:{
    fontSize:10
  },
  serchbar:{
    position:'relative',
    width:200,
    top:-130,
    left:100
  },
  serchInput:{
    backgroundColor:"white",
    width:190,
    height:40,
    borderRadius:5,
    padding:10
  },
  serchButtonWrapper:{
    position:'absolute',
    width:40,
    height:40,
    top:50,
    right:70
  },
  serchButton:{
    width:40,
    height:40,
    backgroundColor:'#F3ECA5',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  },
  mainContentsWrapper:{
    flexDirection:'column',
    width:250,
    height:600,
    position:'absolute',
    left:90,
    top:140,
  },
  content:{
    width: 250,
    height:250,
    marginRight:10,
    marginBottom:15,
    borderRadius:10,
    flex:1,
  },
  contentBackgroundImg:{
    width:250,
    height:200,
    marginBottom:15,
    alignItems:'center',
    justifyContent:'center',
    opacity:0.8},

  contentText:{
    top:50,
    fontSize:20,
    backgroundColor:"gray",
    color:'white',
    fontWeight:"bold",
    borderRadius:10,
    opacity:1,
  }

});