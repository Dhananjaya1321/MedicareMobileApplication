import {Image, Pressable, Text, View} from "react-native";
import React from "react";

export function NavButton({icon, event, name}: props) {
    return (
        <View>
            <Pressable
                style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center'}}
                onPress={event}
            >
                <Image source={icon} style={{width: 40, height: 40}}/>
                <Text style={{color: 'black', fontSize: 12, alignSelf: 'center'}}>{name}</Text>
            </Pressable>
        </View>
    );
}

type props = {
    icon: any,
    event: any,
    name: string
}
