import {Text, View} from "react-native";
import {Button} from "./Button.tsx";
import {Space} from "./Space.tsx";

export const TimePicker = ({title, time1, time2, time3}:props) => {
    return (
        <>
            <Space height={20}/>
            <Text style={{color: 'black', fontSize: 18}}>{title}</Text>
            <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
                <Button
                    event={''}
                    stylesText={{fontSize: 18, color: 'black', fontWeight: 'bold'}}
                    text={time1}
                    stylesPressable={{
                        borderColor:'#0D98BA',
                        borderWidth:1,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 50,
                        backgroundColor: '#e9f3fd'
                    }}
                />
                <Button
                    event={''}
                    stylesText={{fontSize: 18, color: 'black', fontWeight: 'bold'}}
                    text={time2}
                    stylesPressable={{
                        borderColor:'#0D98BA',
                        borderWidth:1,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 50,
                        backgroundColor: '#e9f3fd'
                    }}
                />
                <Button
                    event={''}
                    stylesText={{fontSize: 18, color: 'black', fontWeight: 'bold'}}
                    text={time3}
                    stylesPressable={{
                        borderColor:'#0D98BA',
                        borderWidth:1,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 50,
                        backgroundColor: '#e9f3fd'
                    }}
                />
            </View>
        </>
    );
};

type props = {
    title: 'Morning' | 'Afternoon' | 'Night',
    time1: string,
    time2: string,
    time3: string
}
