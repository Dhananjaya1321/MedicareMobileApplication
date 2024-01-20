import {Text, TextInput, View} from "react-native";

export function SearchBar({value, event}: props) {
    return (
        <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{alignSelf: 'flex-start', color: 'black'}}>Search</Text>
            <TextInput
                value={value}
                placeholder={'Search here'}
                style={{
                    borderRadius: 10,
                    width: '100%',
                    height: 50,
                    backgroundColor: '#e9f3fd',
                    borderColor: 'black',
                    borderWidth: 1,
                    paddingLeft: 15,
                    color: 'black'
                }}
                onPressOut={event}
            ></TextInput>
        </View>
    );
}

type props = {
    value: any,
    event: any
}
