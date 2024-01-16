import {Pressable, Text} from "react-native";
import React from "react";

export function Button({text,styles}:props) {
    return (
        <Pressable style={styles}>
            <Text>{text}</Text>
        </Pressable>
    );
}

type props={
    text:string,
    styles:any
}
