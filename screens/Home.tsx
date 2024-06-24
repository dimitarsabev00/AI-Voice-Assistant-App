import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Features } from "../components";
import { dummyMessages } from "../constants";

const Home = () => {
  const [recording, setRecording] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState(dummyMessages);
  const [speaking, setSpeaking] = useState(false);
  const scrollViewRef = useRef();

  const stopRecording = () => {};

  const startRecording = () => {};

  const clear = () => {
    setMessages([]);
  };

  const stopSpeaking = () => {
    setSpeaking(false);
  };

  return (
    <View style={tw.style("flex-1 bg-white")}>
      <SafeAreaView style={tw.style("flex-1 flex mx-5")}>
        {/* bot icon */}
        <View style={tw.style("flex-row justify-center")}>
          <Image
            source={require("../assets/images/bot.png")}
            style={{ height: hp(15), width: hp(15) }}
          />
        </View>

        {/* features || message history */}
        {messages.length > 0 ? (
          <View style={tw.style("my-3 flex-1")}>
            <Text
              style={[
                tw.style("text-gray-700 font-semibold ml-5 mb-3"),
                { fontSize: wp(5) },
              ]}
            >
              Assistant
            </Text>

            <View
              style={[
                tw.style("bg-gray-200 rounded-3xl p-4"),
                { height: hp(58) },
              ]}
            >
              <ScrollView
                ref={scrollViewRef}
                bounces={false}
                style={tw.style("my-5")}
                showsVerticalScrollIndicator={false}
              >
                {messages.map((message, index) => {
                  if (message.role == "assistant") {
                    if (message.content.includes("https")) {
                      // result is an ai image
                      return (
                        <View
                          key={index}
                          style={tw.style("flex-row justify-start my-5")}
                        >
                          <View
                            style={tw.style(
                              "p-3 flex rounded-2xl bg-green-100 rounded-tl-none"
                            )}
                          >
                            <Image
                              source={{ uri: message.content }}
                              resizeMode="contain"
                              style={[
                                tw.style("rounded-2xl"),
                                { height: wp(60), width: wp(60) },
                              ]}
                            />
                          </View>
                        </View>
                      );
                    } else {
                      // chat gpt response
                      return (
                        <View
                          key={index}
                          style={[
                            tw.style(
                              "bg-green-100 p-2 my-5 rounded-xl rounded-tl-none"
                            ),
                            { width: wp(70) },
                          ]}
                        >
                          <Text
                            style={[
                              tw.style("text-gray-800"),
                              { fontSize: wp(4) },
                            ]}
                          >
                            {message.content}
                          </Text>
                        </View>
                      );
                    }
                  } else {
                    // user input text
                    return (
                      <View
                        key={index}
                        style={tw.style("flex-row justify-end")}
                      >
                        <View
                          style={[
                            tw.style("bg-white p-2 rounded-xl rounded-tr-none"),
                            { width: wp(70) },
                          ]}
                        >
                          <Text style={{ fontSize: wp(4) }}>
                            {message.content}
                          </Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}

        {/* recording, clear and stop buttons */}
        <View style={tw.style("flex justify-center items-center")}>
          {recording ? (
            <TouchableOpacity onPress={stopRecording}>
              {/* recording stop button */}
              <Image
                source={require("../assets/images/voiceLoading.gif")}
                style={[
                  tw.style("rounded-full"),
                  { width: hp(10), height: hp(10) },
                ]}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={startRecording}>
              {/* recording start button */}
              <Image
                source={require("../assets/images/recordingIcon.png")}
                style={[
                  tw.style("rounded-full"),
                  { width: hp(10), height: hp(10) },
                ]}
              />
            </TouchableOpacity>
          )}
          {messages.length > 0 && (
            <TouchableOpacity
              onPress={clear}
              style={tw.style("bg-gray-400 rounded-3xl p-2 absolute right-10")}
            >
              <Text style={tw.style("text-white font-semibold")}>Clear</Text>
            </TouchableOpacity>
          )}
          {speaking && (
            <TouchableOpacity
              onPress={stopSpeaking}
              style={tw.style("bg-red-400 rounded-3xl p-2 absolute left-10")}
            >
              <Text style={tw.style("text-white font-semibold")}>Stop</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
