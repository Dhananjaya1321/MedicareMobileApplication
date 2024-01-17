import {
    Image,
    InputAccessoryView,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView, StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
// @ts-ignore
import logo from "../assets/image/logo.png";
import {Button} from "../components/Button.tsx";
import {InputField} from "../components/InputField.tsx";
import {useState} from "react";
import {Logo} from "../components/Logo.tsx";
import {GoBackButton} from "../components/GoBackButton.tsx";

export function LoginPage() {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let handleUsernameChange = function (event: any) {
        setUsername(event);
    }
    let handlePasswordChange = function (event: any) {
        setPassword(event);
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#0D98BA'}}>
            <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <GoBackButton event={''}/>
                    <Logo/>
                    <View style={{
                        flex: 1,
                        gap: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        width: '100%',
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        padding: 16,
                    }}>
                        <InputField value={username} placeholder={'Username'} event={handleUsernameChange}/>
                        <View style={{
                            gap: 0,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            width: '100%',
                        }}>
                            <InputField value={password} placeholder={'Password'} event={handlePasswordChange}/>
                            <Button
                                text={'Forgot Password ?'}
                                stylesPressable={{
                                    width: '80%',
                                    backgroundColor: 'white',
                                    justifyContent: 'flex-start',
                                    alignItems: 'start',
                                    marginTop: 10,
                                }}
                                stylesText={{
                                    fontSize: 14,
                                    paddingLeft: 5,
                                    color: '#008dc0'
                                }}
                                event={""}/*event*/
                            />
                        </View>

                        <Button
                            text={'Login'}
                            stylesPressable={{
                                width: '80%',
                                height: 50,
                                backgroundColor: '#008dc0',
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 15,
                            }}
                            stylesText={{
                                fontSize: 18,
                                color: 'white'
                            }}
                            event={''}/*event*/
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
