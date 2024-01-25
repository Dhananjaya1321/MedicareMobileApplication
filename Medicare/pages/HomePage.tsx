import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {Space} from "../components/Space.tsx";
// @ts-ignore
import brain from "../assets/icon/brain.png";
// @ts-ignore
import eye from "../assets/icon/eye.png";
// @ts-ignore
import heart from "../assets/icon/heart.png";
// @ts-ignore
import tooth from "../assets/icon/tooth.png";
// @ts-ignore
import category from "../assets/icon/categorize.png";
import {CategoryButton} from "../components/CategoryButton.tsx";
import {DoctorCard} from "../components/DoctorCard.tsx";
import {NavBar} from "../components/NavBar.tsx";
import {AdsAndOffers} from "../components/AdsAndOffers.tsx";
import {SearchBar} from "../components/SearchBar.tsx";
import {useState} from "react";

export function HomePage(props:any) {
    const [search, setSearchValue] = useState('');
    let handleSearchEvent = function (event: any) {
        setSearchValue(event);
    }
    let handleCategoryButtons = function (event: any) {

    }
    let handleCategoryButton = function (event: any) {

    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView style={styles.scrollView} contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.mainView}>
                    <View style={styles.subMainView}>
                        <Space height={40}/>
                        <SearchBar value={search} event={handleSearchEvent}/>
                        <Space height={30}/>
                        <AdsAndOffers/>{/*AdsAndOffers and offer section*/}
                        {/*--------------------------------------------------------------------------------------------*/}

                        <Space height={10}/>

                        <View style={styles.cartAndCategoryView}>
                            <Text style={styles.categoryText}>Categories</Text>
                            <View style={styles.categoryView}>
                                <CategoryButton icon={eye} event={handleCategoryButtons} categoryName={'eye'}/>
                                <CategoryButton icon={heart} event={handleCategoryButtons} categoryName={'heart'}/>
                                <CategoryButton icon={tooth} event={handleCategoryButtons} categoryName={'tooth'}/>
                                <CategoryButton icon={category} event={handleCategoryButton} categoryName={'other'}/>
                            </View>{/*Category items section*/}
                        </View>{/*Category section*/}
                        {/*--------------------------------------------------------------------------------------------*/}

                        <Space height={20}/>

                        <View style={styles.cartAndCategoryView}>
                            <Text style={styles.topDoctorsText}>Top Doctors</Text>
                            <View style={styles.doctorsCardView}>
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
                        </View>{/*card section*/}

                        <Space height={70}/>
                        {/*--------------------------------------------------------------------------------------------*/}
                    </View>{/*This view width is 90% on screen*/}
                </View>{/*This view width is 100% on screen*/}
            </ScrollView>
            <NavBar/>{/*bottom navigation bar*/}
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
    subMainView: {
        flex: 1,
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    cartAndCategoryView: {width: '100%'},
    categoryText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 15
    },
    categoryView: {
        width: '100%',
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // backgroundColor: 'blue',
        height: 70
    },
    topDoctorsText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10
    },
    doctorsCardView: {
        width: '100%',
        flexDirection: 'column',
        gap: 10,
        alignItems: 'center',
    }
})
