import {ScrollView, View, Text, StyleSheet, Image} from "react-native";

export default function PostersImage() {
const images = [
    {id: 1, uri: '../assets/images/designs (1).jpg'},
    {id: 2, uri: '../assets/images/designs (2).jpg'},
    {id: 3, uri: '../assets/images/designs (3).jpg'},
    // Add more image URIs as needed
];



    return(
        <View>
            <ScrollView horizontal={true} style={styles.scrollView}>
                {images.map((image) => (
                    <View key={image.id} style={styles.poster}>
                        <Image source={{uri: image.uri}} style={{width: '100%', height: '100%'}} resizeMode="cover" />
                    </View>
                ))}
            </ScrollView>
            <Text style={styles.text}>Posters</Text>
        </View>
    );
}



// Styles Goes here.
    const styles = StyleSheet.create({
        scrollView: {
            height: 200,
            backgroundColor: 'black',
            marginTop: 15,
            paddingVertical: 15
        },
        poster: {
            width: 130,
            // height: 180,
            backgroundColor: 'gray',
            marginHorizontal: 5
        },
        text: {
            color: 'white',
            marginTop: 10
        }
    });