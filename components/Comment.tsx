import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

export default function Comment() {
  return(
    <View>
      <View>
        <Text>별점</Text>
        <View>
          <TouchableOpacity>
            <Text>★</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>★</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>★</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>★</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>★</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput defaultValue='댓글' />
        </View>
        <View>
          <TouchableOpacity>
            <Text>등록</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>취소</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
