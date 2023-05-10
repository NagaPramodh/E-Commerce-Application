import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { ref, set } from "firebase/database";
import { db } from "./config";

const AddData = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const dataAddOn = () => {
    set(ref(db, "products/" + name), {
      name: name,
      price: price,
      desc: desc,
    });
    setName("");
    setPrice("");
  };
  console.log("pramodh");
  return (
    <View style={styles.container}>
      {/* <Text>Hello World</Text> */}
      <TextInput
        placeholder="name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <TextInput
        placeholder="image"
        value={price}
        onChangeText={(text) => setPrice(text)}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <TextInput
        placeholder="image"
        value={desc}
        onChangeText={(text) => setDesc(text)}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Button title="add data" onPress={dataAddOn} />
    </View>
  );
};
export default AddData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
