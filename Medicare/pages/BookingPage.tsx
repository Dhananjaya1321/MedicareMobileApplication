import {SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {GoBackButton} from "../components/GoBackButton.tsx";
import {Space} from "../components/Space.tsx";
import DatePicker from "../components/DatePicker.tsx";
import {Button} from "../components/Button.tsx";
import {TimePicker} from "../components/TimePicker.tsx";

export function BookingPage(props:any) {
    let handleGoBackEvent = () => {
        props.navigation.goBack();
    }

    let handleBookNowButtonEvent = () => {
        props.navigation.push('BookingConformationPage');
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView style={styles.scrollView} contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.mainView}>
                    <GoBackButton event={handleGoBackEvent}/>
                    <Space height={50}/>

                    <View style={{width: '85%'}}>
                        <Space height={20}/>


                        <Text style={styles.doctorNameText}>J. P. Isuru
                            Dhananjaya</Text>
                        <Text style={styles.doctorCategoryText}>Cardiologist</Text>
                        <Space height={20}/>

                        <View style={styles.horizontalLine}/>
                        <Space height={20}/>

                        <Text style={styles.selectDateText}>Select
                            Date</Text>
                        <Space height={10}/>
                        <DatePicker/>

                        <View>
                            <TimePicker title={'Morning'} time1={'8:00'} time2={'9:00'} time3={'10:00'}/>
                            <TimePicker title={'Afternoon'} time1={'4:00'} time2={'5:00'} time3={'6:00'}/>
                            <TimePicker title={'Night'} time1={'8:00'} time2={'9:00'} time3={'10:00'}/>
                        </View>

                        <Space height={35}/>
                        <Button
                            text={'Book now'}
                            stylesPressable={styles.bookNowButton}
                            stylesText={styles.bookNowButtonText}
                            event={handleBookNowButtonEvent}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

let styles = StyleSheet.create({
    safeAreaView: {flex: 1, backgroundColor: '#e9f3fd'},
    scrollView: {flex: 1},
    mainView: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    doctorNameText: {color: 'black', fontSize: 22, fontWeight: 'bold'},
    doctorCategoryText: {fontSize: 18, color: 'black', marginTop: 2},
    horizontalLine: {width: '80%', height: 1, backgroundColor: '#0D98BA', alignSelf: 'center'},
    selectDateText: {fontSize: 18, color: 'black', marginTop: 2, fontWeight: 'bold'},
    bookNowButton: {
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 60,
        backgroundColor: '#0D98BA'
    },
    bookNowButtonText: {
        fontSize: 22, color: 'white', fontWeight: 'bold'
    }
});
