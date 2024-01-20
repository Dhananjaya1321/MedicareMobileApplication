import React, {useState} from 'react'
import DatePicker from 'react-native-date-picker'

export default () => {
    const [date, setDate] = useState(new Date())

    return <DatePicker
        mode={"date"}
        date={date}
        onDateChange={setDate}
        theme={"light"}
        title={"Date"}
        textColor={"black"}
        androidVariant={"nativeAndroid"}
        fadeToColor={"#e9f3fd"}
        style={{
            alignSelf: 'center',
            backgroundColor:'#e9f3fd'
        }}
    />
}
