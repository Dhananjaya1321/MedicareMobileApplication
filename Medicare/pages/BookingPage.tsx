import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {GoBackButton} from "../components/GoBackButton.tsx";
import {Space} from "../components/Space.tsx";

export function BookingPage() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#0D98BA'}}>
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



                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
