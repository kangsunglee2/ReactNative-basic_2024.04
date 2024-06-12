import React, { useEffect, useState } from "react"
import { View, FlatList, Text, ActivityIndicator } from "react-native";

export default function FetchExample() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then(res => res.json())  //then 위에 링크에서 받은 데이터
      .then(obj => {
        // console.log(obj);   // {id, title, releasYear}, Postman으로 확인할 것
        setData(obj.movies);
      })
      .catch(error => {console.log(error);})
      .finally(setLoading(false));  // 끝을낼때 사용
  }, []);

  return (
    <View style={{flex:1, padding:10,}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
    </View>
  );
} 