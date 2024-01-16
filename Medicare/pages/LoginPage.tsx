import {Image, InputAccessoryView, SafeAreaView, Text, TextInput, View} from "react-native";
// @ts-ignore
import logo from "../assets/image/logo.png";
import {Button} from "../components/Button.tsx";
import {InputField} from "../components/InputField.tsx";
import {useState} from "react";

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
        <SafeAreaView style={{flex: 1}}>
            <View style={{
                width: '100%',
                backgroundColor: '#0D98BA',
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                    <Image source={logo} style={{width: 200}}/>
                    <Text style={{fontSize: 28, color: 'white'}}>Medicare</Text>
                </View>
                <View style={{
                    flex: 1,
                    gap: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    width: '100%',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}>
                    <InputField value={username} placeholder={'Username'} event={handleUsernameChange}/>
                    <InputField value={password} placeholder={'Password'} event={handlePasswordChange}/>

                    <Button text={'Login'}
                            stylesPressable={{
                                width: '80%',
                                height: 50,
                                backgroundColor: '#008dc0',
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 15
                            }}
                            stylesText={{
                                fontSize: 18,
                            }}
                    />
                </View>
            </View>
        </SafeAreaView>
    )

}
