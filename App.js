import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
const logoImage = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1 }}>
      {/* //View Component\\ */}
      {/* <View
        style={{ backgroundColor: "lightblue", width: 200, height: 200 }}
      ></View>
      <View
        style={{ backgroundColor: "lightgreen", width: 200, height: 200 }}
      ></View> */}

      {/* //Text Component\\ */}
      {/* <Text>
        <Text style={{ color: "white" }}>Hello</Text> World!!
      </Text> */}

      {/* //Image Component\\ */}
      {/* <Image source={logoImage} style={{ width: 300, height: 300 }} />
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/05/13/22/051322399e00355f663dc7d3380464e9.jpg",
        }}
        style={{ width: 300, height: 300 }}
      />
      <ImageBackground
        source={{
          uri: "https://cdn.pixabay.com/photo/2020/07/12/18/25/background-5398296_640.png",
        }}
        style={{ flex: 1 }}
      >
        <Text>Image Text</Text>
      </ImageBackground> */}

      {/* //Scroll View\\ */}
      <ScrollView>
        <Image source={logoImage} style={{ width: 300, height: 300 }} />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Image source={logoImage} style={{ width: 300, height: 300 }} />
      </ScrollView>
    </View>
  );
}
