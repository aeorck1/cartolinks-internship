import React, { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import GenerateButton from "./ui/Button";
import {LinearGradient} from 'expo-linear-gradient';



export default function PostersImage() {
    // Dropdown state for which menu is open
    const [isVisible, setIsVisible] = useState<null | 'size' | 'category'>(null);
    const [section, setSection] = useState<string | 'smartScript' | 'advancedScript'>("smartScript");
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
        require('../assets/images/designs (7).jpg'),
        require('../assets/images/designs (8).jpg'),
        require('../assets/images/designs (9).jpg'),
        require('../assets/images/designs (10).jpg'),
        require('../assets/images/designs (11).jpg'),
        require('../assets/images/designs (12).jpg'),
        require('../assets/images/designs (13).jpg'),
    ];

const advancedSection = () =>{
    setSection("advancedScript")
}

    const switchSection = () =>{
        if (section === "advancedScript") {
            setSection("smartScript");
        } else {
            setSection("advancedScript");
        }
    }
    const smartSection = () =>{
        setSection("smartScript")
    }

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
        "Brand Promotion",
        "Podcasts",
    ];
    

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return(
      <View style={styles.mainView}>
<Ionicons name="close" size={28} color="white" onPress={switchSection} style={{
    left: 0,
    marginBottom: 15,
}} />
       <View style={styles.scripts}>
        <TouchableOpacity
            onPress={smartSection}
            accessibilityLabel="Switch to smart script poster creation section"
            style={{
                marginBottom: 10,
                width: '45%',
                
            }}
        >
            <Text style={styles.advanced}> Smart script</Text>
            {section === "smartScript" && (
                <LinearGradient
                    colors={['#0aace2ff', '#185a9d', '#644fe8ff']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                        height: 4,
                        width: '100%',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        borderRadius: 2,
                    }}
                />
            )}
        </TouchableOpacity>

        <TouchableOpacity
            onPress={advancedSection}
            accessibilityLabel="Switch to advanced poster creation section"
            style={{
                marginBottom: 10,
                width: '45%',
            }}
        >
            <Text style={styles.advanced}> Advanced script</Text>
            {section === "advancedScript" && (
                <LinearGradient
                    colors={['#0aace2ff', '#185a9d', '#644fe8ff']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                        height: 3,
                        width: '100%',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        borderRadius: 2,
                    }}
                />
            )}
        </TouchableOpacity>

        </View>
         {section === "smartScript" && (
             <View>
            <Text style={styles.question}>What type of poster do you want to create?</Text>
            <FlatList
                horizontal
                data={images}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => (
                   <TouchableOpacity
  onPress={() => setSelectedIndex(index)}
  activeOpacity={0.8}
  accessibilityRole="imagebutton"
  accessibilityLabel={`Poster option ${index + 1}`}
  accessibilityState={{ selected: selectedIndex === index }}
>
  <Image
    source={item}
    style={[
      styles.poster,
      selectedIndex === index && { borderWidth: 3, borderColor: "white" },
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
  accessibilityLabel="Poster title input"
  accessibilityHint="Enter the title text for your poster"
/>

            <Image source={require('../assets/images/append-image.png')} style={styles.appendImage} />
        </View>

           <View style={styles.settingsSection}>
  <Text style={styles.settings}>Settings</Text>

  {/* Size Selection */}
 <View style={styles.selectRow}>
     <View style={[styles.selectRow]}>
    <View style={[styles.selectRowChild, styles.rowWithBorder]}>
      <Text style={styles.selectLabel}>Size</Text>
      <Pressable
        style={styles.selectBox}
        onPress={() => setIsVisible(isVisible === "size" ? null : "size")}
      >
        <Text style={styles.selectValue}>{selectedSize}</Text>
        <Ionicons
          name="chevron-forward"
          size={18}
          color="white"
          style={{ marginLeft: 8 }}
        />
      </Pressable>

      
    </View>

    {isVisible === "size" && (
      <View style={styles.dropdownMenu}>
        {dimensions.map((dim) => (
          <Pressable
            key={dim}
            onPress={() => {
              setSelectedSize(dim);
              setIsVisible(null);
            }}
          >
            <Text style={styles.dropdownItem}>{dim}</Text>
          </Pressable>
        ))}
      </View>
    )}
  </View>

  {/* Category Selection */}
  <View style={styles.selectRow}>
    <View style={styles.selectRowChild}>
      <Text style={styles.selectLabel}>Category</Text>
      <Pressable
        style={styles.selectBox}
        onPress={() =>
          setIsVisible(isVisible === "category" ? null : "category")
        }
      >
        <Text style={styles.selectValue}>{selectedCategory}</Text>
        <Ionicons
          name="chevron-forward"
          size={18}
          color="white"
          style={{ marginLeft: 8 }}
        />
      </Pressable>
    </View>

    {isVisible === "category" && (
      <View style={styles.dropdownMenu}>
        {categories.map((cat) => (
          <Pressable
            key={cat}
            onPress={() => {
              setSelectedCategory(cat);
              setIsVisible(null);
            }}
          >
            <Text style={styles.dropdownItem}>{cat}</Text>
          </Pressable>
        ))}
      </View>
    )}
  </View>
    </View>
</View>


           <GenerateButton
  buttonName="Generate"
  funcTrigger={() => {}}
    hint="Generates a poster based on the selected options"
/>

        </View>)}

        {section === "advancedScript" && (<View>
           <Text style={styles.question}>Advanced Poster Creation</Text>
         

           </View>
           )}
      </View>
    );
}



// Styles Goes here.
    const styles = StyleSheet.create({
mainView:{
    padding: 0
},
scripts:{
    width: '100%',
    flexDirection: 'row',
    gap: 20,
    marginBottom: 10,
    display: 'flex',
    // justifyContent: 'space-between',
    
},

smart:{
color: 'white',
fontSize: 20,
fontWeight: '800',
fontFamily: 'System',
},
advanced:{
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
    fontFamily: 'System',
    paddingBottom: 10,
    textAlign: 'center',
    
},

question:{
color: 'white',
fontSize: 20,
fontWeight: '800',
fontFamily: 'System',

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

        rowWithBorder: {
  borderBottomColor: "#333",
  borderBottomWidth: 1,
  paddingBottom: 8,
  marginBottom: 8,
},

dropdownMenu: {
  backgroundColor: "#000",
  borderRadius: 8,
  marginTop: 4,
  borderWidth: 1,
  borderColor: "#333",
  // ❌ no absolute positioning anymore
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
        dropdownItem: {
            color: 'white',
            paddingVertical: 12,
            paddingHorizontal: 16,
            fontSize: 16,
        },
    });