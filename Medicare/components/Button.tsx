import {Pressable, Text} from "react-native";
import React from "react";

export function Button({text,stylesPressable,stylesText}:props) {
    return (
        <Pressable style={stylesPressable}>
            <Text style={stylesText}>{text}</Text>
        </Pressable>
    );
}

type props={
    text:string,
    stylesPressable:any,
    stylesText:any
}
