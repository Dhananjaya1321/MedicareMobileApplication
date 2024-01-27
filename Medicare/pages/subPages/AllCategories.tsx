import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
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

export function AllCategories(props:any) {
    let handleGoBackEvent=()=>{
        props.navigation.goBack();
    }

    let handleCategoryButtonEvent=()=>{
        props.navigation.push('SearchDetails');
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView style={styles.scrollView} contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.mainView}>
                    <GoBackButton event={handleGoBackEvent}/>
                    <Space height={80}/>
                    <View style={styles.categoryButtonView}>
                        <CategoryButton icon={brain} event={handleCategoryButtonEvent} categoryName={'brain'}/>
                        <CategoryButton icon={heart} event={handleCategoryButtonEvent} categoryName={'heart'}/>
                        <CategoryButton icon={eye} event={handleCategoryButtonEvent} categoryName={'eye'}/>
                        <CategoryButton icon={neuron} event={handleCategoryButtonEvent} categoryName={'neuron'}/>
                        <CategoryButton icon={rash} event={handleCategoryButtonEvent} categoryName={'rash'}/>
                        <CategoryButton icon={tooth} event={handleCategoryButtonEvent} categoryName={'tooth'}/>
                        <CategoryButton icon={brain} event={handleCategoryButtonEvent} categoryName={'brain'}/>
                        <CategoryButton icon={heart} event={handleCategoryButtonEvent} categoryName={'heart'}/>
                        <CategoryButton icon={eye} event={handleCategoryButtonEvent} categoryName={'eye'}/>
                        <CategoryButton icon={neuron} event={handleCategoryButtonEvent} categoryName={'neuron'}/>
                        <CategoryButton icon={rash} event={handleCategoryButtonEvent} categoryName={'rash'}/>
                        <CategoryButton icon={tooth} event={handleCategoryButtonEvent} categoryName={'tooth'}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

let styles=StyleSheet.create({
    safeAreaView:{flex: 1, backgroundColor: '#e9f3fd'},
    scrollView:{flex: 1},
    mainView:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
     categoryButtonView:{
         width: '90%',
         gap: 25,
         flexDirection: 'row',
         flexWrap: 'wrap',
         justifyContent: 'center',
         alignItems: 'center'
     },
})
