import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import cityWhite from '../assets/city_white.jpg';

export default function MainPage() {
  return(
    <ImageBackground source={cityWhite} style={{width:'100%',height:'100%'}}>
      <View>
        <Text>메뉴</Text>
        <TouchableOpacity><Text>DO.SI.IN</Text></TouchableOpacity>
        <TouchableOpacity><Text>마이페이지</Text></TouchableOpacity>
        <TouchableOpacity><Text>로그아웃</Text></TouchableOpacity>
      </View>
      <View>
        <TextInput defaultValue='검색' />
      </View>
      <View>
        <TouchableOpacity><Text>검색</Text></TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text>레시피1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>레시피1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>레시피1</Text>
        </TouchableOpacity>
      </View>      
    </ImageBackground>
  );
}
