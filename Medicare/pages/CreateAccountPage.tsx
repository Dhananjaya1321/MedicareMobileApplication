import {Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, View} from "react-native";
import {InputField} from "../components/InputField.tsx";
import {useState} from "react";
// @ts-ignore
import logo from "../assets/image/logo.png";
import {Button} from "../components/Button.tsx";
import {Logo} from "../components/Logo.tsx";
import {Space} from "../components/Space.tsx";
import {GoBackButton} from "../components/GoBackButton.tsx";

export function CreateAccountPage() {
    let [fullName, setFullName] = useState('');
    let [nic, setNIC] = useState('');
    let [address, setAddress] = useState('');
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let handleNameChange = function (event: any) {
        setFullName(event);
    }
    let handleNICChange = function (event: any) {
        setNIC(event);
    }
    let handleAddressChange = function (event: any) {
        setAddress(event);
    }
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
                    width: '100%',
                }}>
                    <GoBackButton event={''}/>
                    <Space style={{width: '100%', height: 50}}/>
                    <Logo/>
                    <Space style={{width: '100%', height: 50}}/>
                    <View style={{
                        backgroundColor: 'white',
                        flex: 3,
                        gap: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderTopRightRadius: 30,
                        borderTopLeftRadius: 30
                    }}>
                        <Space style={{width: '100%', height: 20}}/>
                        <InputField value={fullName} placeholder={'Name'} event={handleNameChange}/>
                        <InputField value={nic} placeholder={'NIC (National Identity Card Number)'}
                                    event={handleNICChange}/>
                        <InputField value={address} placeholder={'Address'} event={handleAddressChange}/>
                        <InputField value={username} placeholder={'Username'} event={handleUsernameChange}/>
                        <InputField value={password} placeholder={'Password'} event={handlePasswordChange}/>
                        <Button
                            text={'Create account'}
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
                    <Space style={{width: '100%', height: 50, backgroundColor: 'white'}}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
