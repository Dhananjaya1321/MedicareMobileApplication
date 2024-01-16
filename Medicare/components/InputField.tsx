import {Text, TextInput, View} from "react-native";

export function InputField({value, placeholder,event}: props) {
    return (
        <View style={{width: '80%', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{alignSelf: 'flex-start', color: 'black'}}>{placeholder}</Text>
            <TextInput
                value={value}
                placeholder={placeholder}
                style={{
                    borderRadius: 10,
                    width: '100%',
                    height: 50,
                    backgroundColor: 'white',
                    borderColor: 'black',
                    borderWidth: 1,
                    paddingLeft: 15,
                    color:'black'
                }}
                onPressOut={event}
            ></TextInput>
        </View>
    );
}

type props = {
    value: any,
    placeholder: string,
    event:any
}
