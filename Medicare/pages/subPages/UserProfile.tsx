import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {Space} from "../../components/Space.tsx";

export function UserProfile() {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView style={styles.scrollView} contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.mainView}>
                    <Space height={50}/>
                    <Text style={styles.userName}>J. P. Isuru Dhananjaya</Text>
                    <Text style={styles.userName}>Galle</Text>
                    <Text style={styles.userName}>22222222222</Text>
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
    userName:{
        fontSize:22,
        color:'black'
    }
})
