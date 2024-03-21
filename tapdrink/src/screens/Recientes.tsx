import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Recientes = () => {
    return (
        <View style={styles.container}>
            <Text>Recientes</Text>
        </View>
    );
};

export default Recientes;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});