import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

export default function Comment() {
  return(
    <View style={style.background}>
      <View style={style.commentWrapper}>
        <View style={style.starRatingTitle}>
          <Text style={style.starRatinTitleText}>별점</Text>
          <View style={style.starbuttonWrapper}>
            <TouchableOpacity>
              <Text style={style.starButtonText}>★</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={style.starButtonText}>★</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={style.starButtonText}>★</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={style.starButtonText}>★</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={style.starButtonText}>★</Text>
            </TouchableOpacity>
          </View>
          <View style={style.commentInput}>
            <TextInput placeholder='댓글' />
          </View>
          <View style={style.buttonWrapper}>
            <TouchableOpacity style={style.button} onPress={()=> props.navigation.goback()}>
              <Text>등록</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button} onPress={()=> props.navigation.goback()}>
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
    top:10
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
