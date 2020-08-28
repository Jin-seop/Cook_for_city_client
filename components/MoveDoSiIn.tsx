import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MoveDoSiIn() {
  return(
    <View>
      <View>
        <Text>DO.SI.IN</Text>
      </View>
      <View>
        <Text>남은 식재료를 도시락 형태로 공유,거래할 수 있는 플랫폼 입니다.</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text>DO.SI.IN으로 이동</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>취소</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
