import {View} from "react-native";

export function Space({height,color}: props) {
    return (
        <View style={{width: '100%', height: height, backgroundColor:color}}></View>
    );
}

type props = {
    height: any,
    color?:any
}
