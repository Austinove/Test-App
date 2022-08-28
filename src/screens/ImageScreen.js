import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return <View>
        <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} />
        <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} />
        <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} />
    </View>;
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: 40
    }
});

export default ImageScreen;