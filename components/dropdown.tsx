
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface DropdownProps {
    label: string;
    options: string[];
    value?: string;
    onValueChange?: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, value, onValueChange }) => {
    const [selectedValue, setSelectedValue] = useState(value || options[0] || '');

    const handleValueChange = (itemValue: string) => {
        setSelectedValue(itemValue);
        if (onValueChange) onValueChange(itemValue);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Picker
                style={styles.dropdownContainer}
                dropdownIconColor='white'
                selectedValue={selectedValue}
                onValueChange={handleValueChange}
            >
                {options.map((option, index) => (
                    <Picker.Item key={index} label={option} value={option} style={styles.pickerItem} />
                ))}
            </Picker>
        </View>
    );
};

export default Dropdown;

const styles = StyleSheet.create({
container:{
    display: 'flex',
    flexDirection: 'row',
    borderColor: "red",
    borderWidth: 4,
    backgroundColor: 'blue',
},

    dropdownContainer: {
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
    },
    label: {
        color: 'white',
        marginBottom: 5,
    },
    pickerItem: {
        color: 'white',
        width: '50%',
        backgroundColor: 'black', // This will set the background color of the picker item
    }
})