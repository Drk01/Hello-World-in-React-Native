import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("A Boring Text");

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>

      <Button
        title="Press Me"
        onPress={() => setOutputText("Hello World!!!!!")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
