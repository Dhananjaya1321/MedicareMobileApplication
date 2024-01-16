import {ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
// @ts-ignore
import doctor from "../assets/image/doctor.png";
import React from "react";

export function WelcomePage() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <ImageBackground source={doctor} resizeMode="cover" style={styles.image}/>
                <View style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    zIndex: 2
                }}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 32, fontWeight: 'bold', color: 'white'}}>Find a Doctor!</Text>
                        <View style={{width: 60,height:1,backgroundColor:'#32CBF1'}}></View>
                        <Text style={{fontSize: 14, color: 'white'}}>With your smart phone</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Pressable>
                            <Text>Login</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        width: '100%',
        backgroundColor: '#0D98BA',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    view1: {
        width: '10%',
        height: 100,
        backgroundColor: 'blue',
    },
    image: {
        width: '100%',
        height: 500,
        zIndex: 1,
        flex: 3,
        justifyContent: 'center',
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
    },
});

