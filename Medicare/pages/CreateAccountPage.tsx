import {KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, View} from "react-native";
import {InputField} from "../components/InputField.tsx";

export function CreateAccountPage() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#0D98BA'}}>
            <ScrollView style={{flex: 1}}>
                <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
}
