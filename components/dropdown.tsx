import {Text, View} from 'react-native'
import { Picker } from '@react-native-picker/picker';

export default function Dropdown(text: string, options: string[]) {
    return (
        <View>
            <Text>{text}</Text>
            <Picker>
                {options.map((option, index) => (
                    <Picker.Item key={index} label={option} value={option} />
                ))}
            </Picker>
        </View>
    )
}
