import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { NavigationProp,useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import tw from "tailwind-react-native-classnames";

type RootStackParamList = {
    Home: undefined;
  };
  
const Welcome = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={tw.style("flex-1 flex justify-around bg-white")}>
      {/* title */}
      <View>
        <Text
          style={[
            tw.style("text-center font-bold text-gray-700 mb-5"),
            { fontSize: wp(10) },
          ]}
        >
          AI Assistant App
        </Text>
        <Text
          style={[
            tw.style("text-center tracking-wider font-semibold text-gray-600"),
            { fontSize: wp(4) },
          ]}
        >
          The future is here, powerеd by AI.
        </Text>
      </View>

      {/* assistant image */}
      <View style={tw.style("flex-row justify-center")}>
        <Image
          source={require("../assets/images/welcome.png")}
          style={{ height: wp(75), width: wp(75) }}
        />
      </View>

      {/* start button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={tw.style("bg-green-600 mx-5 p-4 rounded-2xl")}
      >
        <Text
          style={[
            tw.style("text-center font-bold text-white"),
            { fontSize: wp(6) },
          ]}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Welcome;
