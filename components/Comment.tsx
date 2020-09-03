import React, { useState, useEffect } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import Axios from 'axios';

export default function Comment(props:any) {

  const [title,setTitle] = useState<string>('');
  const [comment,setComment] = useState<string>('');
  const [starpoint,setStarpoint] = useState<number>(1);
  const [userId,setUserId] = useState<string>('');
  const [id,setId] = useState<number>(0);

  const commentSendServerHandler = () => {
    if(userId){
      Axios.put('http://13.125.205.76:50000/recipe/recipecommentupdate',{
        id,
        userId,
        comment,
        starpoint
      })
        .then(res => {
          if(res.status === 200){
            props.navigation.navigate('PostPage');
            alert('댓글 수정 완료');
          }
        });
    }else{
      Axios.post('http://13.125.205.76:50000/recipe/recipecomment',{
        title,
        comment,
        starpoint
      })
        .then(res => {
          if(res.status === 201 ){
            props.navigation.navigate('PostPage');
            alert('댓글 등록 완료');
          }
        })
        .catch(err => console.error(err));
    }
  };

  useEffect(()=> {
    setTitle(props.navigation.state.params.title);
    if(props.navigation.state.params.userId){
      setUserId(props.navigation.state.params.userId);
      setComment(props.navigation.state.params.comment);
      setStarpoint(props.navigation.state.params.starpoint);
      setId(props.navigation.state.params.id);
    }
  },[]);

  return(
    <View style={style.background}>
      <View style={style.commentWrapper}>
        <View style={style.starRatingTitle}>
          <Text style={style.starRatinTitleText}>별점</Text>
          <View style={style.starbuttonWrapper}>
            <TouchableOpacity onPress={()=> setStarpoint(1)} >
              {starpoint >= 1 ? <Text style={style.starButtonText}>★</Text> :<Text style={style.starButtonText}>☆</Text> }
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> setStarpoint(2)} >
              {starpoint >= 2 ? <Text style={style.starButtonText}>★</Text> :<Text style={style.starButtonText}>☆</Text> }
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> setStarpoint(3)} >
              {starpoint >= 3 ? <Text style={style.starButtonText}>★</Text> :<Text style={style.starButtonText}>☆</Text> }
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> setStarpoint(4)} >
              {starpoint >= 4 ? <Text style={style.starButtonText}>★</Text> :<Text style={style.starButtonText}>☆</Text> }
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> setStarpoint(5)} >
              {starpoint >= 5 ? <Text style={style.starButtonText}>★</Text> :<Text style={style.starButtonText}>☆</Text> }
            </TouchableOpacity>           
          </View>
          <View style={style.commentInput}>
            <TextInput placeholder='댓글' onChange={e => {e.preventDefault(); setComment(e.nativeEvent.text);}} ><Text>{comment}</Text></TextInput>
          </View>
          <View style={style.buttonWrapper}>
            <TouchableOpacity style={style.button} onPress={()=> commentSendServerHandler()}>
              {userId ? <Text>수정</Text> : <Text>등록</Text>}
            </TouchableOpacity>
            <TouchableOpacity style={style.button} onPress={()=> props.navigation.goBack()}>
              <Text>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  background:{
    width:'100%',
    height:'100%',
    backgroundColor:'gray',
    alignItems:'center',
    justifyContent:'center'
  },
  commentWrapper:{
    width:'80%',
    backgroundColor:'#F3ECA5',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
  },
  starRatingTitle:{
    marginBottom:10,
  },
  starRatinTitleText:{
    fontSize:25,
    left:-15,
    top:23
  },
  starbuttonWrapper:{
    flexDirection:'row',
    left:40,
    top:-25,
  },
  starButtonText: { 
    fontSize: 40 
  },
  buttonWrapper:{
    flexDirection:'row',
    left:150,
  },
  commentInput:{
    width:250,
    height:90,
    borderStyle:'solid',
    borderColor:'black',
    borderWidth:1,
    borderRadius:5,
    backgroundColor:'white',
    alignItems:'center',
    marginBottom:10,
    padding:10,
    top:-12,
  },
  button:{
    width: 50,
    height: 40,
    backgroundColor:'white',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:10,
  }
});
