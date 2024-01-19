import {View} from "react-native";

export function AdsAndOffers() {
    return (
        <View style={{
            width: '100%',
            height: 220,
            // backgroundColor: 'red',
            // justifyContent: 'center',
            alignItems: 'center',
            flexDirection:'row',
            gap:10
        }}>
            <View style={{
                width: '90%',
                height: 200,
                backgroundColor: 'black',
                alignSelf: 'center',
                borderRadius: 20,
                alignItems: 'center'
            }}></View>
            <View style={{
                width: '90%',
                height: 200,
                backgroundColor: 'black',
                alignSelf: 'center',
                borderRadius: 20,
                alignItems: 'center'
            }}></View>
        </View>
    );
}
