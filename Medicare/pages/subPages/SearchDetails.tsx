import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {GoBackButton} from "../../components/GoBackButton.tsx";
import {DoctorCard} from "../../components/DoctorCard.tsx";
import {Space} from "../../components/Space.tsx";
import {SearchBar} from "../../components/SearchBar.tsx";
import {useState} from "react";

export function SearchDetails() {
    const [search, setSearch] = useState('');
    let handleGoBackEvent = () => {

    }
    let handleSearchEvent = (event: any) => {
        setSearch(event);
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <GoBackButton event={handleGoBackEvent}/>
            <ScrollView style={styles.scrollView} contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.mainView}>
                    <Space height={80}/>

                    <View style={{width: '90%'}}>
                        <SearchBar value={search} event={handleSearchEvent}/>
                        <Space height={40}/>
                        <View style={styles.doctorCardView}>
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

let styles = StyleSheet.create({
    safeAreaView: {flex: 1, backgroundColor: '#e9f3fd'},
    scrollView: {flex: 1},
    mainView: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    doctorCardView:{
        width: '100%',
        flexDirection: 'column',
        gap: 10,
        alignItems: 'center',
    }
});
