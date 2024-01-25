import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
// @ts-ignore
import icon from '../assets/icon/success.png';
import {Button} from "../components/Button.tsx";
import {Space} from "../components/Space.tsx";

export const BookingConformationPage = (props:any) => {
    let handleDoneButtonEvent = () => {
        props.navigation.push('HomePage');
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView style={styles.scrollView} contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.mainView}>
                    <View style={styles.imageView}>
                        <Image source={icon}/>
                        <Text style={styles.text}>Booking Successful</Text>
                    </View>
                    <Button
                        text={'Done'}
                        stylesPressable={styles.doneButton}
                        stylesText={styles.doneButtonText}
                        event={handleDoneButtonEvent}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


let styles = StyleSheet.create({
    safeAreaView: {flex: 1, backgroundColor: '#0D98BA'},
    scrollView: {flex: 1},
    mainView: {
        alignSelf:'center',
        flex: 1,
        width: '90%',
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'column',
        gap:150
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15
    },
    text: {
        fontSize: 22,
        color: 'white'
    },
    doneButton: {
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 60,
        backgroundColor: '#ffffff'
    },
    doneButtonText:{
        color:'#005462',
        fontSize:22
    }
})
