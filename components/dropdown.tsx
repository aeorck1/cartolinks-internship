
import React, {useState} from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';


const Dropdown = (labelThis:any) => {
const [isVisible, setIsVisible] = useState(false);
    return (
        <View style={styles.container}>
            {/* <Text style={styles.label}>{label}</Text> */}
            <Pressable 
            onPress={()=> setIsVisible(!isVisible)} >
                <Text>hi</Text>
            </Pressable>

            {isVisible && (
                <View style={styles.dropdownContainer}><Text>{labelThis}</Text></View>
            )}
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