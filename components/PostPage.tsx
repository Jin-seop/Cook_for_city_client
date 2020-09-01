import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';
import WhiteBackgroundImage from '../assets/city_white.jpg';
import Axios from 'axios';

export default function PostPage (props:any) {

  const [meterial,setMeterial] = useState<string>('');
  const [title,setTitle] = useState<string>(''); 
  const [recipe,setRecipe] = useState<string>('');
  const [comments,setComments] = useState([] as any);
  const [favorit,setFavorit] = useState<boolean>(false);

  const postDetail = () => {
    Axios.post('http://52.78.146.191:5000/recipe/recipedetail',{
      title:props.navigation.state.params.title
    })
      .then(res => 
        res.data
      )
      .then(data => {
        setMeterial(data.meterial.replace(/(\s*)/g, ""));
        setTitle(data.title);
        setRecipe(data.recipe.trim());
        setComments(data.comments);
      })
      .catch(err => {
        console.error(err);
      });
  };
  const favoritHandler =()=>{
    if(favorit === false){
      Axios.post('http://52.78.146.191:5000/recipe/recipefavorites',{
        id:props.navigation.state.params.id
      }).then(res => {
        if(res.status === 201){
          alert('즐겨찾기 등록완료');
          setFavorit(true);
        }
      });
    }
  };

  const commentsHandler:any = () => {
    if(comments.length > 0){
      // return comments.map((el,key) => {
      // return (
      // <View style={style.comment} key={key}>
      //   <Text>별점:</Text>
      //   <Text>-작성자</Text>
      //   <Text>-댓글</Text>
      //   <TouchableOpacity style={style.commentButton} onPress={()=> props.navigation.navigate(Comment)}>
      //     <Text>수정</Text>
      //   </TouchableOpacity>
      // </View>
      // );
      // });
    }
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

  useEffect(postDetail,[]);

  return(
    <ImageBackground source={WhiteBackgroundImage} style={style.backgroundImg} >
      <ScrollView style={style.mainWrapper}>
        <View style={style.menuWrapper}>
          <Text style={style.menuText} >메뉴</Text>      
          <TouchableOpacity style={style.menuButton} onPress={()=> props.navigation.navigate('MoveDoSiIn')}><Text style={style.menuButtonText}>Do.SI.IN</Text></TouchableOpacity>      
          <TouchableOpacity style={style.menuButton} onPress={()=> props.navigation.navigate('Mypage')}><Text style={style.menuButtonText}>마이페이지</Text></TouchableOpacity>      
          <TouchableOpacity style={style.menuButton} onPress={()=> logoutHandler()}><Text style={style.menuButtonText}>로그아웃</Text></TouchableOpacity>      
        </View>
        <View style={style.contentWrapper}>
          <View style={style.starWrapper}>
            <TouchableOpacity onPress={()=> favoritHandler()}>
              {favorit ? <Text style={style.starText}>★</Text> : <Text style={style.starText}>☆</Text> }
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={style.recipeTitleWrapper}>
              <Text style={style.recipeTitleText} >{title}</Text>
            </View>
            <View style={style.recipeWrapper} >
              <Text>재료 : {meterial}</Text>
            </View>
            <View style={style.recipeWrapper} >
              <Text>레시피 : {recipe}</Text>
            </View>
          </ScrollView>
          <TouchableOpacity style={style.postButton}>
            <Text >댓글 등록</Text>
          </TouchableOpacity>
        </View>
        <View style={style.commentWrapper}>
          {commentsHandler()}
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
    padding:20,
    borderRadius:5
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
  },
  recipeTitleWrapper:{
    backgroundColor:'white',
    alignItems:'center',
    marginBottom:20,
    borderRadius:5,
    marginTop:10
  },
  recipeWrapper:{
    backgroundColor:'white',
    width:230,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20,
    borderRadius:5,
  },
  recipeTitleText:{
    fontSize:20
  }
});