import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Favoritos = () => {
    return (
        <View style={styles.container}>
            <Text>Favoritos</Text>
        </View>
    );
};

export default Favoritos;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});