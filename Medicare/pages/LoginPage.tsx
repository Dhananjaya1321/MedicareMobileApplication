import {Image, InputAccessoryView, SafeAreaView, Text, TextInput, View} from "react-native";
// @ts-ignore
import logo from "../assets/image/logo.png";
import {Button} from "../components/Button.tsx";

export function LoginPage() {
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
                    <View style={{width: '80%', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{alignSelf: 'flex-start',color:'black'}}>Username</Text>
                        <TextInput value={'Username'} style={{
                            borderRadius: 10,
                            width: '100%',
                            height: 50,
                            backgroundColor: 'red',
                            borderColor:'black',
                            borderWidth:1,
                            paddingLeft:15
                        }}></TextInput>
                    </View>
                    <View style={{width: '80%', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{alignSelf: 'flex-start',color:'black'}}>Username</Text>
                        <TextInput value={'Username'} style={{
                            borderRadius: 10,
                            width: '100%',
                            height: 50,
                            backgroundColor: 'red',
                            borderColor:'black',
                            borderWidth:1,
                            paddingLeft:15
                        }}></TextInput>
                    </View>
                    <Button text={'Login'} stylesPressable={{
                        width: '80%',
                        height: 50,
                        backgroundColor: 'red',
                        borderRadius: 10,
                        justifyContent: 'center', alignItems: 'center'
                    }} stylesText={{
                        fontSize: 18,
                    }}/>
                </View>
            </View>
        </SafeAreaView>
    );
}
