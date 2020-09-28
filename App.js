import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Button, TouchableHighlight, SafeAreaView, Image, Alert } from "react-native";

export default function App() {
  const handlePress = () => console.log("Button pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={handlePress} title="Click Me" />
      <Button onPress={() => Alert.alert(
        "Alert box", "Choose one...", [{ text: "Yes" }, { text: "No" }, { text: "Maybe" }]
      )} title="Alert" />
      {/* <Image source={require('./assets/icon.png')} /> */}
      <TouchableHighlight onPress={() => console.log("Image Tapped!")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }} />
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
});
