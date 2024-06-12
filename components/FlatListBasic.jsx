import React, { useState, useRef } from "react"
import { View, StyleSheet, FlatList, Text, Image, TextInput } from "react-native";

const style = StyleSheet.create({
  container: {flex:1, padding:20},
  item: {padding:10, fontSize: 20, height: 40},
  image: {borderRadius: 100},
  input: { width:200, height: 30, fontSize:14, marginTop:5, borderWidth: 2, textAlign:'center'},
});
const img ={
  uri: 'https://picsum.photos/200/200', width: 200, height: 200, };

export default function FlatListBasic() {
  const [fruit, setFruit] = useState([{key:'사과'},{key:'복숭아'},{key:'수박'}]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const addFruit = () => {
    if (inputValue.trim() !== '') {
      setFruit([...fruit, { key: inputValue }]);
    }
    setInputValue('');
    setTimeout(() => inputRef.current.focus(), 10);
  }

  
  return (
    <View style={style.container}>
      <Image source={img} style={style.image}/>
      <TextInput placeholder="과일 이름을 입력하세요." onChangeText={(text) => setInputValue(text)} 
        value={inputValue} onSubmitEditing={addFruit} style={style.input} ref={inputRef} />
      <FlatList
        data={fruit}
        renderItem={({item}) => <Text style={style.item}>{item.key}</Text>}  
      />
    </View>
  );
} 
