/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
    title: string;
}>;

function App(): React.JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <View style={styles.view1}></View>
                {/*<ImageBackground source={}/>*/}
                <Text style={styles.text}>Page content</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        width: '100%',
        // height: 100,
        backgroundColor: 'red',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    view1:{
        width: '10%',
        height: 100,
        backgroundColor: 'blue',
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
    },
});


export default App;
