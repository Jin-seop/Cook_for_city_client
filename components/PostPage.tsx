import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';
import WhiteBackgroundImage from '../assets/city_white.jpg';

export default function PostPage () {
  return(
    <ImageBackground source={WhiteBackgroundImage} style={{width:'100%',height:'100%'}} >
      <View>
        <Text>메뉴</Text>      
        <TouchableOpacity><Text>Do.SI.IN</Text></TouchableOpacity>      
        <TouchableOpacity><Text>마이페이지</Text></TouchableOpacity>      
        <TouchableOpacity><Text>로그아웃</Text></TouchableOpacity>      
      </View>
      <View>
        <View><TouchableOpacity><Text>★</Text></TouchableOpacity></View>
        <View><Text>게시글</Text></View>
      </View>
      <View>
        <TextInput defaultValue="댓글입력창" />
        <TouchableOpacity><Text>등록</Text></TouchableOpacity>
      </View>
      <ScrollView>
        <View>
          <Text>별점</Text>
          <Text>작성자</Text>
          <Text>댓글</Text>
          <TouchableOpacity >
            <Text>수정</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>별점</Text>
          <Text>작성자</Text>
          <Text>댓글</Text>
          <TouchableOpacity >
            <Text>수정</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}