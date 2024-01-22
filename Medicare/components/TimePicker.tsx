import {Text, View} from "react-native";
import {Button} from "./Button.tsx";

export const TimePicker = () => {
    return (
        <>
            <Text style={{color: 'black', fontSize: 22}}>Morning</Text>
            <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
                <Button
                    event={''}
                    stylesText={{fontSize: 18, color: 'black', fontWeight: 'bold'}}
                    text={'8:00'}
                    stylesPressable={{
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 50,
                        backgroundColor: '#0D98BA'
                    }}
                />
                <Button
                    event={''}
                    stylesText={{fontSize: 18, color: 'black', fontWeight: 'bold'}}
                    text={'8:00'}
                    stylesPressable={{
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 50,
                        backgroundColor: '#0D98BA'
                    }}
                />
                <Button
                    event={''}
                    stylesText={{fontSize: 18, color: 'black', fontWeight: 'bold'}}
                    text={'8:00'}
                    stylesPressable={{
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 50,
                        backgroundColor: '#0D98BA'
                    }}
                />
            </View>
        </>
    );
};
