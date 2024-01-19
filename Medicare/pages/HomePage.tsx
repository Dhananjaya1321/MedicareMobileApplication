import {SafeAreaView, ScrollView, Text, View} from "react-native";
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
                        backgroundColor: 'white'
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
                        <Space style={{width: '100%', height: 50, backgroundColor: 'blue'}}/>

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

                        <Space style={{width: '100%', height: 50, backgroundColor: 'blue'}}/>

                        <View style={{width: '100%'}}>
                            <Text style={{
                                fontSize: 18,
                                color: 'black',
                                fontWeight: 'bold',
                                marginBottom: 10
                            }}>Top Doctors</Text>

                        </View>
                    </View>{/*This view width is 90% on screen*/}
                </View>{/*This view width is 100% on screen*/}
            </ScrollView>
        </SafeAreaView>
    );
}
