import {Image, Text, View} from "react-native";
// @ts-ignore
import homeNavBar from "../assets/icon/home-nav-bar.png";
// @ts-ignore
import categoryNavBar from "../assets/icon/category-nav-bar.png";
// @ts-ignore
import calenderNavBar from "../assets/icon/calendar-nav-bar.png";
// @ts-ignore
import userNavBar from "../assets/icon/user-nav-bar.png";

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
            <View style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={homeNavBar} style={{width: 40, height: 40}}/>
                <Text style={{color: 'black', fontSize: 12, alignSelf: 'center'}}>Home</Text>
            </View>
            <View style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={categoryNavBar} style={{width: 40, height: 40}}/>
                <Text style={{color: 'black', fontSize: 12, alignSelf: 'center'}}>Category</Text>
            </View>
            <View style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={calenderNavBar} style={{width: 40, height: 40}}/>
                <Text style={{color: 'black', fontSize: 12, alignSelf: 'center'}}>booking</Text>
            </View>
            <View style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={userNavBar} style={{width: 40, height: 40}}/>
                <Text style={{color: 'black', fontSize: 12, alignSelf: 'center'}}>profile</Text>
            </View>
        </View>
    );
}
