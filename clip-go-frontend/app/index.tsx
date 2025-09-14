import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [url, setURL] = useState('');
  const [loaded, error] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Bold.ttf"),
  });

  useEffect(() => {
    if(loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if(!loaded && !error) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f9f2e5",
      }}
    >
      <View
        style={{
          marginTop: 12,
          borderRadius: 8,
          // borderWidth: 2,
          // borderColor: "black",
          backgroundColor: "#fff",
          height: 280,
          width: "90%",
          padding: 8,
          elevation: 20,
          shadowColor: "#171717",
        }}
      >
        <Text
          style={{
            fontFamily: "Inter-Black",
            fontSize: 30,
            marginTop: 28,
            textAlign: "center",
          }}
        >
          Turn Shorts into Reels
        </Text>
        <TextInput
          placeholderTextColor={"black"}
          style={{
            borderWidth: 2,
            borderColor: "black",
            marginTop: 28,
            borderRadius: 8,
            padding: 12,
            height: 50,
            color: "black",
            width: "90%",
            alignSelf: "center",
          }}
          placeholder="Drop your YouTube Shorts link"
          onChangeText={(newURL) => setURL(newURL)}
          value={url}
        />
        <View
          style={{
            marginTop: 28,
            width: "30%",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#007bff",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 20,
            }}
            onPress={() => Alert.alert(url)}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Save Short
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
