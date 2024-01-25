import {Platform, StyleSheet, Text, View} from "react-native";
import {CartButton} from "./CartButton.tsx";

export function DoctorCard({name, category,navigation}: props) {
    let handleDoctorCardMoreDetailsEvent = (event: any) => {
        navigation.navigation.push('DoctorDetailsPage');
    }

    return (
        <View style={styles.cardMainView}>
            <View style={styles.profilePhotoView}></View>{/*profile photo*/}
            <View style={styles.profileDetailsView}>
                <Text style={styles.nameText}>{name}</Text>{/*name*/}
                <Text style={styles.categoryText}>{category}</Text>{/*category*/}
            </View>{/*details view*/}
            <CartButton event={handleDoctorCardMoreDetailsEvent}/>
        </View>
    );
}

type props = {
    name: string,
    category: string,
    navigation:any
}

const styles = StyleSheet.create({
    cardMainView: {
        width: '100%',
        height: 100,
        borderRadius: 12,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        position: 'relative',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    profilePhotoView: {width: 80, height: 80, backgroundColor: 'red', marginLeft: 10, borderRadius: 10},
    profileDetailsView: {width: 250, height: 80},
    nameText: {fontSize: 20, color: 'black'},
    categoryText: {fontSize: 14, color: 'black',marginTop:5}
});
