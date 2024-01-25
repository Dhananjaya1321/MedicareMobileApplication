import {
    SafeAreaView,
    ScrollView, StyleSheet,
    View
} from "react-native";
import {Button} from "../components/Button.tsx";
import {InputField} from "../components/InputField.tsx";
import {useState} from "react";
import {Logo} from "../components/Logo.tsx";
import {GoBackButton} from "../components/GoBackButton.tsx";

export function LoginPage(props:any) {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let handleUsernameChange = function (event: any) {
        setUsername(event);
    }
    let handlePasswordChange = function (event: any) {
        setPassword(event);
    }
    let handleGoBack = function () {
        props.navigation.goBack();
    }
    let handleLogin = function () {
        props.navigation.push('HomePage');
    }
    let handleForgotPassword = function () {

    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView style={styles.scrollView} contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.mainView}>
                    <GoBackButton event={handleGoBack}/>
                    <Logo/>
                    <View style={styles.loginFormDetailsView}>
                        <InputField value={username} placeholder={'Username'} event={handleUsernameChange}/>
                        <View style={styles.loginFormPasswordFieldView}>
                            <InputField value={password} placeholder={'Password'} event={handlePasswordChange}/>
                            <Button
                                text={'Forgot Password ?'}
                                stylesPressable={styles.loginButton}
                                stylesText={styles.loginButtonText}
                                event={handleForgotPassword}/*event*/
                            />
                        </View>
                        <Button
                            text={'Login'}
                            stylesPressable={styles.forgotPasswordButton}
                            stylesText={styles.forgotPasswordButtonText}
                            event={handleLogin}/*event*/
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaView: {flex: 1, backgroundColor: '#0D98BA'},
    scrollView: {flex: 1},
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginFormDetailsView: {
        flex: 1,
        gap: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 16,
    },
    loginFormPasswordFieldView: {
        gap: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
    },
    loginButton: {
        width: '80%',
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        // alignItems: 'start',
        marginTop: 10,
    },
    loginButtonText: {
        fontSize: 14,
        paddingLeft: 5,
        color: '#008dc0'
    },
    forgotPasswordButton: {
        width: '80%',
        height: 50,
        backgroundColor: '#008dc0',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    forgotPasswordButtonText: {
        fontSize: 18,
        color: 'white'
    }
})
