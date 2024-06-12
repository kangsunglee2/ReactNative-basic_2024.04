import React, { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet  } from "react-native";

const styles = StyleSheet.create({
  container: {

    margin: 10,
    alignItems: 'flex-start',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    
    textAlign: 'center',
    fontSize: 20
  }
});

export default function Count() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={ () => setCount((count +1 > 10)? 1 : count +1)}>
        <Text style={styles.buttonText}>증가</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={ () => setCount(0)}>
        <Text style={styles.buttonText}>리셋</Text>
      </TouchableOpacity>
    </View>
  );
} 