import {SafeAreaView, ScrollView, View} from "react-native";
import {Space} from "../../components/Space.tsx";
import {CategoryButton} from "../../components/CategoryButton.tsx";
// @ts-ignore
import brain from "../../assets/icon/brain.png";
// @ts-ignore
import heart from "../../assets/icon/heart.png";
// @ts-ignore
import eye from "../../assets/icon/eye.png";
// @ts-ignore
import neuron from "../../assets/icon/neuron.png";
// @ts-ignore
import rash from "../../assets/icon/rash.png";
// @ts-ignore
import tooth from "../../assets/icon/tooth.png";
import {GoBackButton} from "../../components/GoBackButton.tsx";

export function AllCategories() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#e9f3fd'}}>
            <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
                <View style={{
                    flex: 1,
                    width: '100%',
                    alignItems: 'center',
                }}>
                    <GoBackButton event={''}/>
                    <Space height={80}/>
                    <View style={{
                        width: '90%',
                        gap: 25,
                        // backgroundColor:'red',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <CategoryButton icon={brain} event={''} categoryName={'brain'}/>
                        <CategoryButton icon={heart} event={''} categoryName={'heart'}/>
                        <CategoryButton icon={eye} event={''} categoryName={'eye'}/>
                        <CategoryButton icon={neuron} event={''} categoryName={'neuron'}/>
                        <CategoryButton icon={rash} event={''} categoryName={'rash'}/>
                        <CategoryButton icon={tooth} event={''} categoryName={'tooth'}/>
                        <CategoryButton icon={brain} event={''} categoryName={'brain'}/>
                        <CategoryButton icon={heart} event={''} categoryName={'heart'}/>
                        <CategoryButton icon={eye} event={''} categoryName={'eye'}/>
                        <CategoryButton icon={neuron} event={''} categoryName={'neuron'}/>
                        <CategoryButton icon={rash} event={''} categoryName={'rash'}/>
                        <CategoryButton icon={tooth} event={''} categoryName={'tooth'}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
