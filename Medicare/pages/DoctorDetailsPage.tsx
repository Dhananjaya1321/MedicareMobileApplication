import {ImageBackground, SafeAreaView, ScrollView, Text, View} from "react-native";
// @ts-ignore
import image from "../assets/image/doctor.png";
import {Space} from "../components/Space.tsx";
import {Button} from "../components/Button.tsx";
import {GoBackButton} from "../components/GoBackButton.tsx";

export function DoctorDetailsPage() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#0D98BA'}}>
            <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
                <View style={{
                    flex: 1,
                    width: '100%',
                    alignItems: 'center',
                }}>
                    <GoBackButton event={''}/>
                    <ImageBackground source={image} style={{width: 300, height: 500}}/>
                    <View style={{
                        width: '100%',
                        height: 400,
                        backgroundColor: 'white',
                        position: 'absolute',
                        bottom: 0,
                        borderTopRightRadius: 30,
                        borderTopLeftRadius: 30,
                        alignItems: 'center',
                    }}>
                        <View style={{width: '85%'}}>
                            <Space height={20}/>


                            <Text style={{color: 'black', fontSize: 22, fontWeight: 'bold'}}>J. P. Isuru
                                Dhananjaya</Text>
                            <Text style={{fontSize: 18, color: 'black', marginTop: 2}}>Cardiologist</Text>
                            <Space height={20}/>


                            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{color: 'black', fontSize: 24, fontWeight: 'bold'}}>2K</Text>
                                    <Text style={{color: 'black', fontSize: 18}}>Patients</Text>
                                </View>

                                <View style={{width: 1, height: '100%', backgroundColor: '#0D98BA', alignSelf: 'center'}}/>

                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{color: 'black', fontSize: 24, fontWeight: 'bold'}}>7</Text>
                                    <Text style={{color: 'black', fontSize: 18}}>Experience</Text>
                                </View>
                            </View>
                            <Space height={20}/>


                            <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>About</Text>
                            <Text style={{fontSize: 14, color: 'black', marginTop: 2}}>Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Adipisci aliquam, asperiores cumque eaque earum eos
                                excepturi facere facilis harum iusto nam non odio possimus, quas quisquam quos sunt vel
                                vitae.</Text>
                            <Space height={20}/>



                            <Button
                                text={'Book and appoint'}
                                stylesPressable={{
                                    width: '80%',
                                    height: 50,
                                    backgroundColor: '#0D98BA',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignSelf: 'center',
                                    borderRadius:10

                                }}
                                stylesText={{
                                    color: 'white',
                                    fontSize: 18
                                }}
                                event={''}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
