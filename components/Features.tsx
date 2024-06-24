import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import tw from "tailwind-react-native-classnames";

const Features = () => {
  return (
    <ScrollView
      style={[tw.style("my-5"), { height: hp(60) }]}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <Text
        style={[tw.style("font-semibold text-gray-700"), { fontSize: wp(6.5) }]}
      >
        Features
      </Text>
      <View style={tw.style("bg-green-200 p-4 rounded-xl my-3")}>
        <View style={tw.style("flex-row items-center py-2")}>
          <Image
            source={require("../assets/images/chatgptIcon.png")}
            style={[tw.style("rounded-full mr-3"), { height: hp(4), width: hp(4) }]}
          />
          <Text
            style={[
              tw.style("font-semibold text-gray-700"),
              { fontSize: wp(4.8) },
            ]}
          >
            ChatGPT
          </Text>
        </View>

        <Text
          style={[tw.style("text-gray-700 font-medium"), { fontSize: wp(3.8) }]}
        >
          ChatGPT can provide you with instant and knowledgeable responses,
          assist you with creative ideas on a wide range of topics.
        </Text>
      </View>
      <View style={tw.style("bg-purple-200 p-4 rounded-xl my-3")}>
        <View style={tw.style("flex-row items-center py-2")}>
          <Image
            source={require("../assets/images/dalleIcon.png")}
            style={[tw.style("rounded-full mr-3"), { height: hp(4), width: hp(4) }]}
          />
          <Text
            style={[
              tw.style("font-semibold text-gray-700"),
              { fontSize: wp(4.8) },
            ]}
          >
            DALL-E
          </Text>
        </View>

        <Text
          style={[tw.style("text-gray-700 font-medium"), { fontSize: wp(3.8) }]}
        >
          DALL-E can generate imaginative and diverse images from textual
          descriptions, expanding the boundaries of visual creativity.
        </Text>
      </View>
      <View style={tw.style("bg-blue-200 p-4 rounded-xl my-3")}>
        <View style={tw.style("flex-row items-center py-2")}>
          <Image
            source={require("../assets/images/smartaiIcon.png")}
            style={[tw.style("rounded-full mr-3"), { height: hp(4), width: hp(4) }]}
          />
          <Text
            style={[
              tw.style("font-semibold text-gray-700"),
              { fontSize: wp(4.8) },
            ]}
          >
            Smart AI
          </Text>
        </View>

        <Text
          style={[tw.style("text-gray-700 font-medium"), { fontSize: wp(3.8) }]}
        >
          A powerful voice assistant with the abilities of ChatGPT and Dall-E,
          providing you the best of both worlds.
        </Text>
      </View>
    </ScrollView>
  );
};
export default Features;
