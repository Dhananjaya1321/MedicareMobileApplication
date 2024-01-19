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

export function NavBar() {
    return (
        <View
            style={{
                width: '100%',
                height: 60,
                backgroundColor: 'white',
                position: 'absolute',
                bottom: 0,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}
        >
            <NavButton icon={homeNavBar} event={''} name={'Home'}/>
            <NavButton icon={categoryNavBar} event={''} name={'Category'}/>
            <NavButton icon={calenderNavBar} event={''} name={'Booking'}/>
            <NavButton icon={userNavBar} event={''} name={'Profile'}/>
        </View>
    );
}
