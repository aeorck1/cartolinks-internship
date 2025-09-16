import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
// import { mappedImages } from "@/images";



export default function PostersImage() {
    const images = [
        require('../assets/images/designs (1).jpg'),
        require('../assets/images/designs (2).jpg'),
        require('../assets/images/designs (3).jpg'),
        require('../assets/images/designs (4).jpg'),
        require('../assets/images/designs (5).jpg'),
        require('../assets/images/designs (6).jpg'),
    ];

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return(
        <View>
            <Text style={styles.question}>What type of poster do you want to create?</Text>
            <FlatList
                horizontal
                data={images}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => setSelectedIndex(index)} activeOpacity={0.8}>
                        <Image
                            source={item}
                            style={[
                                styles.poster,
                                selectedIndex === index && { borderWidth: 3, borderColor: 'white'  }
                            ]}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                )}
                contentContainerStyle={{ alignItems: 'center' }}
                style={styles.scrollView}
                showsHorizontalScrollIndicator={false}
            />

        <View>
            <TextInput
                style={styles.input}
                placeholder="Enter poster title"
                placeholderTextColor="gray"
                multiline={true}
                numberOfLines={6}
                 />
            <Image source={require('../assets/images/append-image.png')} style={styles.appendImage} />
        </View>

            <View style={styles.settingsSection}>
                <Text style={styles.settings}>Settings</Text>
                
            </View>
        </View>
    );
}



// Styles Goes here.
    const styles = StyleSheet.create({
question:{
color: 'white',
fontSize: 20,
fontWeight: '800',
fontFamily: 'Sans-serif',

},

        scrollView: {
            height: 110,
            marginTop:4,
            paddingVertical: 15,
         
            

        },
        poster: {
            width: 75,
            height: 100,
            backgroundColor: 'gray',
            marginHorizontal: 5,
            borderRadius: 10,
        },

        settingsSection: {
            marginTop: 20,
            borderTopWidth: 1,
            borderColor: '#3a3a3aff',
            borderWidth: 2,
        },
        settings: {
            color: '#b8b8b8ff',
            marginTop: 20
        },
        input: {
            position: 'relative',
            height: 150,
            width: '99%',
            backgroundColor: '#1e1e1e',
            padding: 6,
            paddingVertical: 6,
            borderRadius: 5,
            paddingHorizontal: 10,
            marginTop: 10,
            color: 'white',
            textAlignVertical: 'top', // Ensures text starts at the top
        },
        appendImage:{
            position: 'absolute',
            right: 15,
            bottom: 10,
            width: 20,
            height: 20,
            filter: 'invert(1)',
        }
    });