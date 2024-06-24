import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
const Welcome = () => {
  return (
    <SafeAreaView>
      <Text style={tw.style("text-red-700")}>Welcome Screen</Text>
    </SafeAreaView>
  );
};

export default Welcome;
