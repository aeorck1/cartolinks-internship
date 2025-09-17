import React, { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import GenerateButton from "./ui/Button";



export default function PostersImage() {
    // Dropdown state for which menu is open
    const [isVisible, setIsVisible] = useState<null | 'size' | 'category'>(null);
    // State for selected values
    const [selectedSize, setSelectedSize] = useState<string>("1080 x 1920 px");
    const [selectedCategory, setSelectedCategory] = useState<string>("Foods and Beverages");

    const images = [
        require('../assets/images/designs (1).jpg'),
        require('../assets/images/designs (2).jpg'),
        require('../assets/images/designs (3).jpg'),
        require('../assets/images/designs (4).jpg'),
        require('../assets/images/designs (5).jpg'),
        require('../assets/images/designs (6).jpg'),
    ];


    const dimensions = [
"1080 x 1920 px",
        "1200 x 628 px",
        "1080 x 1080 px",
        "1920 x 1080 px",
    ]

    const categories = [
        "Foods and Beverages",
        "Travel and Leisure",
        "Health and Wellness",
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
            

                {/* Size Selection */}
              <View style={styles.selectRow}>
                  <View style={[
                      styles.selectRowChild,
                      { borderBottomColor: '#333', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 8 }
                  ]}>
                    <Text style={styles.selectLabel}>Size</Text>
                    <Pressable
                        style={styles.selectBox}
                        onPress={() => setIsVisible(isVisible === 'size' ? null : 'size')}
                    >
                        <Text style={styles.selectValue}>{selectedSize}</Text>
                         <Ionicons name="chevron-forward" size={18} color="white" style={{ marginLeft: 8 }} />
                    </Pressable>
                </View>
           
                

                {/* Category Selection */}
                <View style={styles.selectRowChild}>
                    <Text style={styles.selectLabel}>Category</Text>
                    <Pressable
                        style={styles.selectBox}
                        onPress={() => setIsVisible(isVisible === 'category' ? null : 'category')}
                    >
                        <Text style={styles.selectValue}>{selectedCategory}</Text>
                        
                        
                        <Ionicons name="chevron-forward" size={18} color="white" style={{ marginLeft: 8 }} />
                    </Pressable>
                </View>
                </View>

     {isVisible === 'size' && (
                    <View style={styles.dropdownMenu}>
                        {dimensions.map((dim, idx) => (
                            <Pressable key={dim} onPress={() => { setSelectedSize(dim); setIsVisible(null); }}>
                                <Text style={styles.dropdownItem}>{dim}</Text>
                            </Pressable>
                        ))}
                    </View>
                )}


                {isVisible === 'category' && (
                    <View style={styles.dropdownMenu}>
                        {categories.map((cat, idx) => (
                            <Pressable key={cat} onPress={() => { setSelectedCategory(cat); setIsVisible(null); }}>
                                <Text style={styles.dropdownItem}>{cat}</Text>
                            </Pressable>
                        ))}
                    </View>
                )}
            </View>

            <GenerateButton buttonName="Generate" />
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
container:{
backgroundColor: '#bf5e5eff',
color: 'white',
position: 'relative',
},
chev:{
    width: 4,
    height: 4,    
    position: 'absolute',
    zIndex: 4,
},
label:{
    color: 'white',
},
dimensions:{
position: 'absolute',
top: 30,
backgroundColor: '#bb1111ff',
width: '50%',
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
           
        },
        settings: {
            color: '#b8b8b8ff',
            marginTop: 20,
            marginBottom: 6,
        },
        input: {
            position: 'relative',
            height: 150,
            width: '99%',
            backgroundColor: '#1e1e1e',
            padding: 8,
            borderRadius: 5,
            paddingHorizontal: 10,
            marginTop: 10,
            color: 'white',
            textAlignVertical: 'top',
        },
        appendImage:{
            position: 'absolute',
            right: 15,
            bottom: 10,
            width: 20,
            height: 20,
            filter: 'invert(1)',
        },
        selectRow: {
            flexDirection: 'column',
           borderRadius: 4,
           backgroundColor: 'rgba(35, 35, 35, 1)',
        padding: 8,
        },

        selectRowChild: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,            
        },

        selectLabel: {
            color: '#ffffff',
            fontSize: 16,
        
        },
        selectBox: {
            backgroundColor: '#232323',
            borderRadius: 8,
            paddingVertical: 10,
            paddingHorizontal: 16,
            minWidth: 140,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            
        },
        selectValue: {
            color: '#b8b8b8ff',
            fontSize: 16,
        },
        dropdownMenu: {
            backgroundColor: '#000000ff',
            borderRadius: 8,
            marginTop: 4,
            borderWidth: 1,
            borderColor: '#333',
            position: 'absolute',
            left: 0,
            right: 0,
            zIndex: 10,
        },
        dropdownItem: {
            color: 'white',
            paddingVertical: 12,
            paddingHorizontal: 16,
            fontSize: 16,
        },
    });