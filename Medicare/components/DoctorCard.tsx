import {Text, View} from "react-native";

export function DoctorCard() {
    return (
        <View
            style={{
                width: '100%',
                height: 100,
                borderRadius: 12,
                backgroundColor: 'green',
                flexDirection: 'row',
                alignItems: 'center',
                gap:10,
                position:'relative'
            }}>
            <View style={{width: 80, height: 80, backgroundColor: 'red',marginLeft:10,borderRadius:10}}></View>
            <View style={{width: 250,height: 80}}>
                <Text style={{fontSize:22, color:'black'}}>J. P. Isuru Dhananjaya</Text>
                <Text style={{fontSize:16, color:'black'}}>Cardiologist</Text>
            </View>

        </View>
    );
}
