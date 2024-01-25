/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {WelcomePage} from "./pages/WelcomePage.tsx";
import {LoginPage} from "./pages/LoginPage.tsx";
import {CreateAccountPage} from "./pages/CreateAccountPage.tsx";
import {HomePage} from "./pages/HomePage.tsx";
import {AllCategories} from "./pages/subPages/AllCategories.tsx";
import {SearchDetails} from "./pages/subPages/SearchDetails.tsx";
import {DoctorDetailsPage} from "./pages/DoctorDetailsPage.tsx";
import {BookingPage} from "./pages/BookingPage.tsx";
import {BookingConformationPage} from "./pages/BookingConformationPage.tsx";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"WelcomePage"}>
                <Stack.Screen name="WelcomePage" component={WelcomePage} options={{headerShown: false}}/>
                <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>
                <Stack.Screen name="CreateAccountPage" component={CreateAccountPage} options={{headerShown: false}}/>
                <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
