import {SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {GoBackButton} from "../components/GoBackButton.tsx";
import {Space} from "../components/Space.tsx";
import DatePicker from "../components/DatePicker.tsx";
import {Button} from "../components/Button.tsx";
import {TimePicker} from "../components/TimePicker.tsx";

export function BookingPage() {

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#e9f3fd'}}>
            <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
                <View style={{
                    flex: 1,
                    width: '100%',
                    alignItems: 'center',
                }}>
                    <GoBackButton event={''}/>
                    <Space height={50}/>

                    <View style={{width: '85%'}}>
                        <Space height={20}/>


                        <Text style={{color: 'black', fontSize: 22, fontWeight: 'bold'}}>J. P. Isuru
                            Dhananjaya</Text>
                        <Text style={{fontSize: 18, color: 'black', marginTop: 2}}>Cardiologist</Text>
                        <Space height={20}/>

                        <View style={{width: '80%', height: 1, backgroundColor: '#0D98BA', alignSelf: 'center'}}/>
                        <Space height={20}/>

                        <Text style={{fontSize: 18, color: 'black', marginTop: 2, fontWeight: 'bold'}}>Select
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
                            stylesPressable={{
                                alignSelf:'center',
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '90%',
                                height: 60,
                                backgroundColor: '#0D98BA'
                            }}
                            stylesText={{
                                fontSize: 22, color: 'white', fontWeight: 'bold'
                            }}
                            event={''}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
