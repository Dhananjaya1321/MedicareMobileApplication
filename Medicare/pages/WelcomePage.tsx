import {ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
// @ts-ignore
import doctor from "../assets/image/doctor.png";
import React from "react";
import {Button} from "../components/Button.tsx";

export function WelcomePage() {

    let handleLogin=()=>{

    }

     let handleCreateAccount=()=>{

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainView}>
                <View style={styles.imageView}>
                    <ImageBackground
                        source={doctor}
                        resizeMode="cover"
                        style={styles.backgroundImage}/>
                </View>{/*image view*/}
                <View style={styles.detailsView}>
                    <View style={styles.detailsViewDetails}>
                        <Text style={styles.doctorText}>Find a Doctor!</Text>
                        <View style={styles.lineView}></View>
                        <Text style={styles.descriptionText}>With your smart phone</Text>
                    </View>
                    <View style={styles.detailsButtonView}>
                        <Button
                            text={"Login"}
                            stylesPressable={styles.loginButton}
                            stylesText={styles.buttonText}
                            event={handleLogin}/*events*/
                        />
                        <Button
                            text={"Create account"}
                            stylesPressable={styles.createAccountButton}
                            stylesText={styles.buttonText}
                            event={handleCreateAccount}/*events*/
                        />
                        <View style={{flex:.5}}></View>
                    </View>
                </View>{/*details view*/}
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainView: {
        width: '100%',
        backgroundColor: '#0D98BA',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imageView:{width: '100%', height: '60%', position: 'relative'},
    backgroundImage:{
        width: '100%',
        height: '100%',
        zIndex: 1,
        justifyContent: 'center',
        position: 'absolute',
        bottom: -30
    },
    detailsView:{
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
    },
    detailsViewDetails:{flex: 2, justifyContent: 'flex-start', alignItems: 'center',marginTop:20},
    doctorText:{fontSize: 32, fontWeight: 'bold', color: 'white'},
    lineView:{width: 60, height: 1, backgroundColor: '#32CBF1'},
    descriptionText:{fontSize: 14, color: 'white'},
    detailsButtonView:{
        flex: 4,
        gap: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    loginButton:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: '#0D98BA',
    },
    createAccountButton:{
        flex: 1,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        borderRadius: 20,
        backgroundColor: '#32CBF1',
    },
    buttonText:{
        fontSize: 18,
        color: 'white'
    }
});

