import {ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
// @ts-ignore
import image from "../assets/image/doctor.png";
import {Space} from "../components/Space.tsx";
import {Button} from "../components/Button.tsx";
import {GoBackButton} from "../components/GoBackButton.tsx";

export function DoctorDetailsPage(props:any) {
    let handleGoBackEvent = () => {
        props.navigation.goBack();
    }
    let handleBookAndAppointEvent = () => {
        props.navigation.push('BookingPage');
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView style={styles.scrollView} contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.mainView}>
                    <GoBackButton event={handleGoBackEvent}/>
                    <ImageBackground source={image} style={styles.backgroundImage}/>
                    <View style={styles.mainDetailsView}>
                        <View style={{width: '85%'}}>
                            <Space height={20}/>


                            <Text style={styles.doctorNameText}>J. P. Isuru
                                Dhananjaya</Text>
                            <Text style={styles.doctorCategoryText}>Cardiologist</Text>
                            <Space height={20}/>


                            <View style={styles.doctorPatientsAndExperienceMainView}>
                                <View style={styles.doctorPatientsAndExperienceView}>
                                    <Text style={styles.doctorPatientsAndExperienceCountText}>2K</Text>
                                    <Text style={styles.doctorPatientsAndExperienceText}>Patients</Text>
                                </View>

                                <View style={styles.doctorPatientsAndExperienceSeparationView}/>

                                <View style={styles.doctorPatientsAndExperienceView}>
                                    <Text style={styles.doctorPatientsAndExperienceCountText}>7</Text>
                                    <Text style={styles.doctorPatientsAndExperienceText}>Experience</Text>
                                </View>
                            </View>
                            <Space height={20}/>


                            <Text style={styles.doctorAboutText}>About</Text>
                            <Text style={styles.doctorAbout}>Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Adipisci aliquam, asperiores cumque eaque earum eos
                                excepturi facere facilis harum iusto nam non odio possimus, quas quisquam quos sunt vel
                                vitae.</Text>
                            <Space height={20}/>


                            <Button
                                text={'Book and appoint'}
                                stylesPressable={styles.bookAndAppointButton}
                                stylesText={styles.bookAndAppointButtonText}
                                event={handleBookAndAppointEvent}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

let styles = StyleSheet.create({
    safeAreaView: {flex: 1, backgroundColor: '#0D98BA'},
    scrollView: {flex: 1},
    mainView: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    backgroundImage: {width: 300, height: 500},
    mainDetailsView: {
        width: '100%',
        height: 400,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignItems: 'center',
    },
    doctorNameText: {color: 'black', fontSize: 22, fontWeight: 'bold'},
    doctorCategoryText: {fontSize: 18, color: 'black', marginTop: 2},
    doctorPatientsAndExperienceMainView: {flexDirection: 'row', justifyContent: 'space-around'},
    doctorPatientsAndExperienceView: {justifyContent: 'center', alignItems: 'center'},
    doctorPatientsAndExperienceCountText: {color: 'black', fontSize: 24, fontWeight: 'bold'},
    doctorPatientsAndExperienceText: {color: 'black', fontSize: 18},
    doctorPatientsAndExperienceSeparationView: {
        width: 1,
        height: '100%',
        backgroundColor: '#0D98BA',
        alignSelf: 'center'
    },
    doctorAboutText: {color: 'black', fontSize: 18, fontWeight: 'bold'},
    doctorAbout: {fontSize: 14, color: 'black', marginTop: 2},
    bookAndAppointButton: {
        width: '80%',
        height: 50,
        backgroundColor: '#0D98BA',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10
    },
    bookAndAppointButtonText: {
        color: 'white',
        fontSize: 18
    }
});
