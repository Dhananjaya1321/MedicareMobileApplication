import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {GoBackButton} from "../../components/GoBackButton.tsx";
import {DoctorCard} from "../../components/DoctorCard.tsx";
import {Space} from "../../components/Space.tsx";
import {SearchBar} from "../../components/SearchBar.tsx";

export function SearchDetails() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#e9f3fd'}}>
            <GoBackButton event={''}/>
            <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
                <View style={{
                    flex: 1,
                    width: '100%',
                    alignItems: 'center',
                    justifyContent:'center',
                }}>
                    <Space height={80}/>

                    <View style={{width: '90%'}}>
                        <SearchBar value={''} event={''}/>
                        <Space height={40}/>
                        <View style={{
                            width: '100%',
                            flexDirection: 'column',
                            gap: 10,
                            alignItems: 'center',
                        }}>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Cardiologist'}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Dermatologist'}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Endocrinologist'}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Gastroenterologist'}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Internists'}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Psychiatrist'}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Cardiologist'}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Dermatologist'}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Endocrinologist'}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Gastroenterologist'}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Internists'}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Psychiatrist'}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
