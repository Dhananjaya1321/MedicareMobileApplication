import {Image, Pressable, Text, View} from "react-native";
import React from "react";

export function CategoryButton({icon, event, categoryName}: props) {
    return (
        <View>
            <Pressable
                style={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center'

                }}
                onPress={event}
            >
                <Image source={icon} style={{width: 40, height: 40}}/>
            </Pressable>
            <Text style={{alignSelf:'center'}}>{categoryName}</Text>
        </View>
    );
}

type props = {
    icon: any,
    event: any,
    categoryName:string
}
