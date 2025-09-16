import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
        </View>
    );
}



// Styles Goes here.
    const styles = StyleSheet.create({
question:{
color: 'white',
// marginBottom: 10,
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
        text: {
            color: 'white',
            marginTop: 10
        }
    });