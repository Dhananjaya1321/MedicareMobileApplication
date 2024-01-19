import {Image, Pressable, Text} from "react-native";
import React from "react";
// @ts-ignore
import goBackIcon from "../assets/icon/arrow_back.png";
// @ts-ignore
import goBackIconBlack from "../assets/icon/left-black-icon.png";

export function GoBackButton({event}: props) {
    return (
        <Pressable style={{
            width: 50,
            height: 50,
            // backgroundColor: 'red',
            borderRadius: 50,
            position: 'absolute',
            top: 5,
            left: 5,
            justifyContent: 'center',
            alignItems: 'center'
        }} onPress={event}>
            <Image source={goBackIconBlack} style={{width:40,height:40}}/>
        </Pressable>
    );
}

type props = {
    event: any,
}
