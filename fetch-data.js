import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
// import { db } from "./config";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const starCountRef = ref(db, "products/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newPosts = Object.keys.data.map((key) => ({
        id: key,
        ...data[key],
      }));
      console.log(newPosts, "123");
      setData(newPosts);
    });
  }, []);
  console.log(data, "pramodh");
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <View key={index}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>{item.desc}</Text>
          </View>
        );
      })}
    </View>
  );
};
export default FetchData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
