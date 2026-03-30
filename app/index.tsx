import { useState } from "react";
import {
  Alert,
  FlatList,
  Pressable,
  Text,
  TextInput
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen() {
  const [value, setValue] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const pressMe = () => {
    Alert.alert("Button Pressed!");
  };

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  return (
    <SafeAreaView>
      {/* {[...Array(100)].map((_, index) => (
        <Text key={index}>
          {" "}
          <Text>Hello from Home Screen</Text> {index + 1}
        </Text>
      ))} */}

      {/* <Button title="Click me" onPress={pressMe} />
      <Switch value={isEnabled} onValueChange={toggleSwitch} /> */}

      {/* <TextInput placeholder="Enter text here..." /> */}
      <TextInput
        keyboardType="number-pad"
        placeholder="Enter text here..."
        value={value}
        onChangeText={(text) => setValue(text)}
        multiline
        numberOfLines={5}
      />

      <Pressable
        onPress={pressMe}
        style={{
          padding: 10,
          marginTop: 20,
        }}
      >
        <Text>Press me</Text>
      </Pressable>

      {/* <Image
        style={{ width: 50, height: 50, marginTop: 20 }}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      /> */}

      {/* <ImageBackground
        style={{ width: 200, height: 200, marginTop: 20 }}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 80,
          }}
        >
          Image Background
        </Text>
      </ImageBackground> */}

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </SafeAreaView>
  );
}
export default HomeScreen;
