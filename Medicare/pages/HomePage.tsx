import {Image, SafeAreaView, ScrollView, Text, View} from "react-native";
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
// @ts-ignore
import categoryNavBar from "../assets/icon/category-nav-bar.png";
// @ts-ignore
import homeNavBar from "../assets/icon/home-nav-bar.png";
// @ts-ignore
import userNavBar from "../assets/icon/user-nav-bar.png";
// @ts-ignore
import calenderNavBar from "../assets/icon/calendar-nav-bar.png";
import {CategoryButton} from "../components/CategoryButton.tsx";
import {DoctorCard} from "../components/DoctorCard.tsx";
import {NavBar} from "../components/NavBar.tsx";

export function HomePage() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#e9f3fd'}}>
            <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
                <View style={{
                    flex: 1,
                    width: '100%',
                    alignItems: 'center',
                }}>
                    <View style={{
                        flex: 1,
                        width: '90%',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        // backgroundColor: 'white'
                    }}>
                        <View style={{
                            width: '100%',
                            height: 220,
                            backgroundColor: 'red',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        </View>{/*Ads and offer section*/}
                        {/*--------------------------------------------------------------------------------------------*/}
                        <Space height={30}/>

                        <View style={{width: '100%'}}>
                            <Text style={{
                                fontSize: 18,
                                color: 'black',
                                fontWeight: 'bold',
                                marginBottom: 10
                            }}>Categories</Text>
                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    gap: 20,
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                    // backgroundColor: 'blue',
                                    height: 70
                                }}
                            >
                                <CategoryButton icon={eye} event={''} categoryName={'eye'}/>
                                <CategoryButton icon={heart} event={''} categoryName={'heart'}/>
                                <CategoryButton icon={tooth} event={''} categoryName={'tooth'}/>
                                <CategoryButton icon={category} event={''} categoryName={'other'}/>
                            </View>{/*Category items section*/}
                        </View>{/*Category section*/}
                        {/*--------------------------------------------------------------------------------------------*/}

                        <Space height={30}/>

                        <View style={{width: '100%'}}>
                            <Text style={{
                                fontSize: 18,
                                color: 'black',
                                fontWeight: 'bold',
                                marginBottom: 10
                            }}>Top Doctors</Text>
                            <View style={{
                                width: '100%',
                                flexDirection: 'column',
                                gap: 10,
                                // justifyContent: 'flex-start',
                                alignItems: 'center',
                                // backgroundColor: 'red',
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
