import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ImageBackground, StyleSheet, RefreshControl } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import WhiteBackgroundImage from '../assets/city_white.jpg';
import Axios from 'axios';

export default function PostPage (props:any) {

  const [meterial,setMeterial] = useState<string>('');
  const [title,setTitle] = useState<string>(''); 
  const [recipe,setRecipe] = useState<string>('');
  const [comments,setComments] = useState([] as any);
  const [favorit,setFavorit] = useState<boolean>(Boolean||null);
  const [recipeId,setRecipeId] = useState<string>('');
  const [userid,setUserid] = useState<string>('');

  const postDetail = () => {
    Axios.post('http://13.125.205.76:50000/recipe/recipedetail',{
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
        if(data.Users.length === 0){
          setFavorit(false);
        }
        if(data.Users.length === 1){
          setFavorit(true);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  const favoritHandler =()=>{
    if(favorit === false){
      Axios.post('http://13.125.205.76:50000/recipe/recipefavorites',{
        id:recipeId
      }).then(res => {
        if(res.status === 201){
          alert('즐겨찾기 등록완료');
          setFavorit(true);
        }
      })
        .catch(err => console.error(err));
    }
    if(favorit === true){
      Axios.put('http://13.125.205.76:50000/recipe/recipefavoritesdelete',{
        id:recipeId
      })
        .then(res => {
          if(res.status === 200){
            alert('즐겨찾기가 취소되었습니다.');
            setFavorit(false);
          }
        })
        .catch(err => console.error(err));
    }
  };
  
  const commentsHandler:any = () => {

    if(comments.length > 0){
      return comments.map((data:any,key:number) => {
        return (
          <View style={style.comment} key={key}>
            <Text>별점: {data.starpoint} 점</Text>
            <Text>-작성자: {data.cookcomment.userId}</Text>
            <Text>-댓글: {data.comment}</Text>
            {userid === 'admin' ? 
              <TouchableOpacity
                style={style.commentButton} 
                onPress={()=> {adminCommentDeleteHandler(data.id);}}>
                <Text>삭제</Text>
              </TouchableOpacity> : <Text></Text>}
            {userid === data.cookcomment.userId ? 
              <TouchableOpacity style={style.commentButton} onPress={()=> props.navigation.navigate('Comment',{userId:data.cookcomment.userId,comment:data.comment,starpoint:data.starpoint,id:data.id})}>
                <Text>수정</Text>
              </TouchableOpacity> : <Text></Text>}
          </View>
        );
      });
    }
  };

  const adminCommentDeleteHandler = (id:string) => {
    Axios.put('http://13.125.205.76:50000/recipe/admincommentdelete',{
      id:id
    }).then(res => {
      if(res.status === 200){
        postDetail();
        alert('댓글 삭제 완료');
      }
    })
      .catch(err => console.error(err));
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


  useEffect(() => {
    postDetail();
    setRecipeId(props.navigation.state.params.id);
    setUserid(props.navigation.state.params.userid);
    setTitle(props.navigation.state.params.title);
  },[]);

  return(

    <ImageBackground source={WhiteBackgroundImage} style={style.backgroundImg} >
      <ScrollView style={style.mainWrapper} >

        <View style={style.menuWrapper}>
          <Text style={style.menuText} >메뉴</Text>      
          <TouchableOpacity style={style.menuButton} onPress={()=> props.navigation.navigate('MoveDoSiIn')}><Text style={style.menuButtonText}>Do.SI.IN</Text></TouchableOpacity>      
          <TouchableOpacity style={style.menuButton} onPress={()=> props.navigation.navigate('Mypage',{userid:props.navigation.state.params.userid})}><Text style={style.menuButtonText}>마이페이지</Text></TouchableOpacity>      
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

          <TouchableOpacity style={style.postButton} onPress={()=> props.navigation.navigate('Comment',{title})} >
            <Text >댓글 등록</Text>
          </TouchableOpacity>
        </View>

        <View style={style.commentWrapper}> 
          <TouchableOpacity style={style.commentReButton} onPress={()=> postDetail()}>
            <Text>댓글 새로고침</Text>
          </TouchableOpacity>
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
    height:400,
    top:0,
    left:80,
    backgroundColor:'#F3ECA5',
    padding:20,
    borderRadius:5,
  },
  starWrapper:{
    top:-10,
    left:200,
  },
  starText:{
    fontSize:40
  },
  postButton:{
    left:170,
    top:10,
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
    top:-10,
    width:40,
    height:30,
    borderRadius:5,
    borderWidth:1,
    margin:1,
    alignItems:'center',
    justifyContent:'center'
  },
  commentReButton:{
    width:100,
    height:40,
    left:150,
    borderWidth:1,
    borderRadius:5,
    marginTop:10,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center'
  },
  recipeTitleWrapper:{
    backgroundColor:'white',
    alignItems:'center',
    marginBottom:20,
    borderRadius:5,
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