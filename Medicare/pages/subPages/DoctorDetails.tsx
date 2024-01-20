import {ImageBackground, SafeAreaView, ScrollView, View} from "react-native";
// @ts-ignore
import image from "../../assets/image/doctor.png";

export function DoctorDetails() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#0D98BA'}}>
            <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
                <View style={{
                    flex: 1,
                    width: '100%',
                    alignItems: 'center',
                }}>
                    <ImageBackground source={image} style={{width:300,height:500}}/>
                    <View style={{
                        width:'100%',
                        height:400,
                        backgroundColor:'white',
                        position:'absolute',
                        bottom:0,
                        borderTopRightRadius:30,
                        borderTopLeftRadius:30
                    }}>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
