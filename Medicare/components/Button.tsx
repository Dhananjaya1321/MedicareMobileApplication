import {Pressable, Text} from "react-native";
import React from "react";

export function Button({text,stylesPressable,stylesText,event}:props) {
    return (
        <Pressable style={stylesPressable} onPress={event}>
            <Text style={stylesText}>{text}</Text>
        </Pressable>
    );
}

type props={
    text:any,
    stylesPressable:any,
    stylesText:any,
    event:any
}
