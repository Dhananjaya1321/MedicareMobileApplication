import {Image, Text, View} from "react-native";
// @ts-ignore
import logo from "../assets/image/logo.png";

export function Logo() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
        }}>
            <Image source={logo} style={{width: 200}}/>
            <Text style={{fontSize: 28, color: 'white'}}>Medicare</Text>
        </View>
    );
}
