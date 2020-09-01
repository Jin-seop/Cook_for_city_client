import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MoveDoSiIn(props:any) {
  return(
    <View style={style.background}>
      <View style={style.mainWrapper}>
        <View style={style.mainTitle}>
          <Text style={style.mainTitleText}>DO.SI.IN</Text>
        </View>
        <View>
          <Text style={style.bodyText}>남은 식재료를 도시락 형태로 공유,거래할 수 있는 플랫폼 입니다.</Text>
        </View>
        <View style={style.buttonWrapper}>
          <TouchableOpacity style={style.button} onPress={()=>Linking.openURL('https://play.google.com/store/apps/details?id=com.dosiin.dosiinana')} >
            <Text>DO.SI.IN으로 이동</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={()=> props.navigation.goBack()}>
            <Text>취소</Text>
          </TouchableOpacity>
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
  mainWrapper:{
    width:'80%',
    backgroundColor:'#F3ECA5',
    alignItems:'center',
    justifyContent:'center'
  },
  mainTitle:{
    marginBottom:10,
  },
  mainTitleText:{
    fontSize:25
  },
  bodyText:{
    fontSize:15,
    margin:15
  },
  buttonWrapper:{
    flexDirection:'row'
  },
  button:{
    margin:15,
    padding:10,
    backgroundColor:'white',
    borderRadius:5
  }
});