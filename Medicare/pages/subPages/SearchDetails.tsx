import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {GoBackButton} from "../../components/GoBackButton.tsx";
import {DoctorCard} from "../../components/DoctorCard.tsx";
import {Space} from "../../components/Space.tsx";
import {SearchBar} from "../../components/SearchBar.tsx";
import React, {useState} from "react";

export function SearchDetails(props:any) {
    const [search, setSearch] = useState('');
    let handleGoBackEvent = () => {
        props.navigation.goBack();
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
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Cardiologist'} navigation={props}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Dermatologist'} navigation={props}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Endocrinologist'} navigation={props}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Gastroenterologist'} navigation={props}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Internists'} navigation={props}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Psychiatrist'} navigation={props}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Cardiologist'} navigation={props}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Dermatologist'} navigation={props}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Endocrinologist'} navigation={props}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Gastroenterologist'} navigation={props}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Internists'} navigation={props}/>
                            <DoctorCard name={'J. P. Isuru Dhananjaya'} category={'Psychiatrist'} navigation={props}/>
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
