import {SafeAreaView, ScrollView, View} from "react-native";

export function HomePage() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#e9f3fd'}}>
            <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
                <View style={{
                    flex: 1,
                    width: '100%',
                }}>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
