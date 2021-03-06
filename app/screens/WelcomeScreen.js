import React from 'react'
import { Image, ImageBackground, StyleSheet, View } from 'react-native'

export default function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")} />
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65"
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4cedc4"
    },
    logo: {
        position: "absolute",
        width: 100,
        height: 100,
        top: 50
    },
});
