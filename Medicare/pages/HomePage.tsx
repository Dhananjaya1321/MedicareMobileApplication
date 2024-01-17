import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {Space} from "../components/Space.tsx";

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
                        backgroundColor:'white'
                    }}>

                        <View style={{
                            width: '100%',
                            height: 220,
                            backgroundColor: 'red',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>

                        </View>{/*Ads and offer section*/}
                        <Space style={{width:'100%',height:50,backgroundColor:'blue'}}/>
                        <View style={{width:'100%',backgroundColor:'red'}}>
                            <Text style={{fontSize:18,color:'black',fontWeight:'bold',marginBottom:10}}>Categories</Text>
                            <View style={{width:'100%'}}>

                            </View>{/*Category items section*/}
                        </View>{/*Category section*/}
                    </View>{/*This view width is 90% on screen*/}
                </View>{/*This view width is 100% on screen*/}
            </ScrollView>
        </SafeAreaView>
    );
}
