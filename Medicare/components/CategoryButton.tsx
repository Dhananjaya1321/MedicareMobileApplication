import {Image, Platform, Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";

export function CategoryButton({icon, event, categoryName}: props) {
    return (
        <View>
            <Pressable
                style={styles.shadowContainer}
                onPress={event}
            >
                <Image source={icon} style={styles.icon}/>
            </Pressable>
            <Text style={styles.text}>{categoryName}</Text>
        </View>
    );
}

type props = {
    icon: any,
    event: any,
    categoryName: string
}

const styles = StyleSheet.create({
    shadowContainer: {
        width: 65,
        height: 65,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    icon: {
        width: 40,
        height: 40
    },
    text: {
        alignSelf: 'center',
        color: 'black'
    }
});
