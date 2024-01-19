import {Image, Pressable} from "react-native";
import React from "react";
// @ts-ignore
import icon from "../assets/icon/icons8-arrow-24.png";

export function CartButton({event}: props) {
    return (
        <Pressable
            style={{
                width: 60,
                height: 40,
                borderRadius: 0,
                // backgroundColor: 'red',
                position: 'absolute',
                justifyContent: 'center',
                alignItems:'center',
                right:0,
                bottom:0
            }}
            onPress={event}
        >
            <Image source={icon} style={{width:30}}/>
        </Pressable>
    );
}

type props = {
    event: any,
}
