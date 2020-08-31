import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';
import WhiteBackgroundImage from '../assets/city_white.jpg';

export default function PostPage () {
  return(
    <ImageBackground source={WhiteBackgroundImage} style={style.backgroundImg} >
      <ScrollView style={style.mainWrapper}>
        <View style={style.menuWrapper}>
          <Text style={style.menuText} >메뉴</Text>      
          <TouchableOpacity style={style.menuButton} onPress={()=> props.navigation.navigate('MoveDoSiIn')}><Text style={style.menuButtonText}>Do.SI.IN</Text></TouchableOpacity>      
          <TouchableOpacity style={style.menuButton} onPress={()=> props.navigation.navigate('Mypage')}><Text style={style.menuButtonText}>마이페이지</Text></TouchableOpacity>      
          <TouchableOpacity style={style.menuButton} onPress={()=> props.navigation.navigate('LoginPage')}><Text style={style.menuButtonText}>로그아웃</Text></TouchableOpacity>      
        </View>
        <View style={style.contentWrapper}>
          <View style={style.starWrapper}>
            <TouchableOpacity>
              <Text style={style.starText}>★☆</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View>
              <Text>게시글</Text>
            </View>
          </ScrollView>
          <TouchableOpacity style={style.postButton}>
            <Text >댓글 등록</Text>
          </TouchableOpacity>
        </View>
        <View style={style.commentWrapper}>
          <View style={style.comment}>
            <Text>별점:</Text>
            <Text>-작성자</Text>
            <Text>-댓글</Text>
            <TouchableOpacity style={style.commentButton} onPress={()=> props.navigation.navigate(Comment)}>
              <Text>수정</Text>
            </TouchableOpacity>
          </View>
          <View style={style.comment}>
            <Text>별점:</Text>
            <Text>-작성자</Text>
            <Text>-댓글</Text>
            <TouchableOpacity style={style.commentButton}>
              <Text>수정</Text>
            </TouchableOpacity>
          </View><View style={style.comment}>
            <Text>별점:</Text>
            <Text>-작성자</Text>
            <Text>-댓글</Text>
            <TouchableOpacity style={style.commentButton}>
              <Text>수정</Text>
            </TouchableOpacity>
          </View><View style={style.comment}>
            <Text>별점:</Text>
            <Text>-작성자</Text>
            <Text>-댓글</Text>
            <TouchableOpacity style={style.commentButton}>
              <Text>수정</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  backgroundImg:{
    width:'100%',
    height:'100%'
  },
  menuWrapper:{
    position:'relative',
    width:70,
    height:180,
    top:150,
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
  mainWrapper:{
    height:'100%',
    top:-120,
    marginBottom:-120
  },
  contentWrapper:{
    position:'relative',
    width:280,
    height:350,
    top:0,
    left:80,
    backgroundColor:'#F3ECA5',
    padding:20
  },
  starWrapper:{
    left:200,
  },
  starText:{
    fontSize:40
  },

  postButton:{
    left:170,
    top:0,
    borderWidth:1,
    width:80,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    backgroundColor:'white'
  },
  commentInput:{
    marginTop:10,
    marginLeft:10
  },
  commentWrapper:{
    position:'relative',
    marginTop:10,
    left:90,
    width:260,
    backgroundColor:'#F3ECA5'
  },
  comment:{
    width:230,
    height:100,
    margin:10,
    backgroundColor:'white'
  },
  commentButton:{
    left:190,
    width:30,
    borderRadius:5,
    borderWidth:1
  }
});