import React from "react"
import { View, Text, ScrollView, TextInput, Image } from "react-native";

export default function Cat({name, num}) {
  return (
    <View>
      <Text>Hello, I am {name}.</Text>
      <View>
        <Image
          source={{
            uri: `https://reactnative.dev/docs/assets/p_cat${num}.png`,
          }}
          style={{width: 200, height: 200}}
        />
      </View>
    </View>
  );
} 