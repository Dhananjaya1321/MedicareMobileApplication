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
            <AllCategories/>

        </>
    );
}

export default App;
