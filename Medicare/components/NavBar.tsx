import {Image, Text, View} from "react-native";
// @ts-ignore
import homeNavBar from "../assets/icon/home-nav-bar.png";
// @ts-ignore
import categoryNavBar from "../assets/icon/category-nav-bar.png";
// @ts-ignore
import calenderNavBar from "../assets/icon/calendar-nav-bar.png";
// @ts-ignore
import userNavBar from "../assets/icon/user-nav-bar.png";
import {NavButton} from "./NavButton.tsx";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {HomePage} from "../pages/HomePage.tsx";
import {AllCategories} from "../pages/subPages/AllCategories.tsx";

export function NavBar(props: any) {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName={'HomePage'} screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={HomePage} options={{
                tabBarIcon: ({focused}) => (
                    <Image
                        source={homeNavBar}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? 'black' : 'gray',
                        }}
                    />
                ),
            }}
            />
            <Tab.Screen name="Categories" component={AllCategories} options={{
                tabBarIcon: ({focused}) => (
                    <Image
                        source={categoryNavBar}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? 'black' : 'gray',
                        }}
                    />
                ),
            }}/>
        </Tab.Navigator>
    );
}
