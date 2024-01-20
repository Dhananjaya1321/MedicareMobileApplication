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
import {DoctorDetails} from "./pages/subPages/DoctorDetails.tsx";

type SectionProps = PropsWithChildren<{
    title: string;
}>;

function App(): React.JSX.Element {
    return (
        <>
            {/*<WelcomePage/>*/}
            {/*<LoginPage/>*/}
            {/*<CreateAccountPage/>*/}
            {/*<HomePage/>*/}

            {/*------------------------------------------------------------------------------------*/}
            {/*<AllCategories/>*/}
            {/*<SearchDetails/>*/}
            <DoctorDetails/>
        </>
    );
}

export default App;
