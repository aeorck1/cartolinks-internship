import {Text, View, StyleSheet} from 'react-native'
import { Picker } from '@react-native-picker/picker';

export default function Dropdown(text: string, options: string[]) {
    return (
        <View>
            <Text>{text}</Text>
            <Picker style={styles.dropdownContainer} dropdownIconColor='white' >
                {options.map((option, index) => (
                    <Picker.Item key={index} label={option} value={option} />
                ))}
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    dropdownContainer: {
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
    }
})