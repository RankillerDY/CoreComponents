import { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  ActivityIndicator,
  Alert,
} from "react-native";
import Greet from "./component/Greet";
const logoImage = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModelVisible, setModelVisible] = useState(false);
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

      {/* <ScrollView>
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
      </ScrollView> */}

      {/* //Button\\ */}

      {/* <Button
        title="press"
        onPress={() => {
          console.log("press");
        }}
        color="midnightblue"
        disabled // For disable the ability of Button
      /> */}

      {/* //Pressable\\ */}

      {/* <Pressable
        onPress={() => {
          console.log("Image press");
        }}
      >
        <Image source={logoImage} style={{ width: 300, height: 300 }} />
      </Pressable> */}
      {/* // Pressable allow component like Image, Text can be "pressed",... */}
      {/* <Pressable
        onPress={() => {
          console.log("Text press");
        }}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Pressable> */}

      {/* // Modal \\ */}
      {/* <Button
        title="press"
        onPress={() => {
          setModelVisible(true);
        }}
        color="midnightblue"
      />

      <Modal
        visible={isModelVisible}
        onRequestClose={() => {
          // onRequestClose use to trigger when user click roll back arrow in android
          setModelVisible(false);
        }}
        animationType="fade" // animationType set the animation when trigger the modal
        presentationStyle="formSheet"
        // most of the properties in presentationStyle is for IOS
        // presentationStyle set how the modal will be present. Note*: IOS and Android are differ in how the modal will be present
      >
        <View style={{ backgroundColor: "lightblue", flex: 1, padding: 60 }}>
          <Text>Modal context</Text>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => {
              setModelVisible(false);
            }}
          />
        </View>
      </Modal> */}

      {/* // Status Bar \\ */}
      {/* Status Bar helps interact with the status bar of android, iphone like wifi, batery, status bar color,... */}
      {/* <StatusBar backgroundColor="lightgreen" barStyle="light-content" hidden /> */}
      {/* backgroundColor just work on android studio 
      barStyle can be use to set the text color of status bar, this work on both os. */}

      {/* // Acitivity Indicator \\ */}
      {/* Activity Indicator uses to tell user about an event is happening with loading animation */}
      {/* <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator color="midnightblue" />
      <ActivityIndicator color="midnightblue" animating={false} /> */}

      {/* // ALERT \\ */}
      {/* Alert uses to pop up a modal that alert the user about an event occur. */}
      {/* <Button
        title="Alert"
        onPress={() => {
          Alert.alert("Invalid data!");
        }}
      />
      <Button
        title="Alert 2"
        onPress={() => {
          Alert.alert("Invalid data!", "DOB incorrect");
        }}
      />
      <Button
        title="Alert 2"
        onPress={() => {
          Alert.alert("Invalid data!", "DOB incorrect", [
            {
              text: "Cancel",
              onPress: () => console.log("Pressed cancel"),
            },
            {
              text: "Ok",
              onPress: () => console.log("Pressed ok"),
            },
          ]);
        }}
      /> */}

      {/* // Custom Component \\ */}
      <Greet name="RankillerDY" />
      <Greet name="FrosterDY" />
    </View>
  );
}
