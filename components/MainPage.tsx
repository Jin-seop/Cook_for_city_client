import React from 'react';
import { View, Text, ImageBackground,StyleSheet } from 'react-native';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';
import cityWhite from '../assets/city_white.jpg';

export default function MainPage() {
  return(
    <ImageBackground source={cityWhite} style={style.background}>
      <View style={style.menuWrapper}>
        <Text style={style.menuText}>메뉴</Text>
        <TouchableOpacity style={style.menuButton}><Text style={style.menuButtonText}>DO.SI.IN</Text></TouchableOpacity>
        <TouchableOpacity style={style.menuButton}><Text style={style.menuButtonText}>마이페이지</Text></TouchableOpacity>
        <TouchableOpacity style={style.menuButton}><Text style={style.menuButtonText}>로그아웃</Text></TouchableOpacity>
      </View>
      <View style={style.serchbar} >
        <TextInput  style={style.serchInput}/>
      </View>
      <View style={style.serchButtonWrapper}>
        <TouchableOpacity style={style.serchButton}><Text>검색</Text></TouchableOpacity>
      </View>
      <ScrollView style={style.mainContentsWrapper}>
        <View style={style.contentAlign}>
          <TouchableOpacity style={style.content}>
            <Text>레시피1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.content}>
            <Text>레시피1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.content}>
            <Text>레시피1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.content}>
            <Text>레시피1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.content}>
            <Text>레시피1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.content}>
            <Text>레시피1</Text>
          </TouchableOpacity>
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
    height:'100%',
    position:'absolute',
    left:90,
    top:140,
  },
  
  content:{
    width: 250,
    height:200,
    marginRight:10,
    marginBottom:15,
    borderRadius:10,
    backgroundColor:'white',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});