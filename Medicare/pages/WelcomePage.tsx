import {ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
// @ts-ignore
import doctor from "../assets/image/doctor.png";
import React from "react";
import {Button} from "../components/Button.tsx";

export function WelcomePage() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <View style={{width: '100%', height: '60%', position: 'relative'}}>
                    <ImageBackground
                        source={doctor}
                        resizeMode="cover"
                        style={{
                            width: '100%',
                            height: '100%',
                            zIndex: 1,
                            justifyContent: 'center',
                            position: 'absolute',
                            bottom: -30
                        }}/>
                </View>
                <View style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    zIndex: 2,
                    borderTopRightRadius: 40,
                    borderTopLeftRadius: 40,
                    borderTopColor: 'white',
                    borderEndColor: 'white',
                    borderStartColor: 'white',
                    borderWidth: 2,
                    backgroundColor: '#0D98BA'
                }}>
                    <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'center',marginTop:20}}>
                        <Text style={{fontSize: 32, fontWeight: 'bold', color: 'white'}}>Find a Doctor!</Text>
                        <View style={{width: 60, height: 1, backgroundColor: '#32CBF1'}}></View>
                        <Text style={{fontSize: 14, color: 'white'}}>With your smart phone</Text>
                    </View>
                    <View style={{
                        flex: 4,
                        gap: 20,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: '100%',
                        // backgroundColor: 'red'
                    }}>
                        <Button
                            text={"Login"}
                            stylesPressable={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '60%',
                                borderRadius: 20,
                                borderWidth: 2,
                                borderColor: '#32CBF1',
                                backgroundColor: '#0D98BA',
                            }}
                            stylesText={{
                                fontSize: 18,
                                color: '#32CBF1'
                            }}
                            event={''}/*events*/
                        />
                        <Button
                            text={"Create account"}
                            stylesPressable={{
                                flex: 1,
                                height: 80,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '60%',
                                borderRadius: 20,
                                backgroundColor: '#32CBF1',
                                // marginBottom: 30
                            }}
                            stylesText={{
                                fontSize: 18,
                                color: '#0D98BA'
                            }}
                            event={''}/*events*/
                        />
                        <View style={{flex:.5}}></View>
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
});

