import { Text, View, StyleSheet, useColorScheme, StatusBar, ScrollView } from "react-native";
// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import PostersImage from "@/components/posters";

export default function Index() {
const scheme = useColorScheme()
const isDark = scheme ==="dark";


  return (
   <SafeAreaView style={styles.body}>
     <StatusBar showHideTransition="slide" backgroundColor={!isDark ? "#fff" : "#000"} barStyle={isDark ? "light-content" : "dark-content"} />
     <ScrollView style= {styles.body}
    >
 
      <View style={styles.container}  >
        <Text style={styles.text}></Text>
    
        <PostersImage />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  body:{
    backgroundColor: 'black',
    flex: 1,
    padding: 4,
  },

  container: {
    marginTop: 15,
    paddingVertical: 15,
  },
  text : {
    color: 'white',
  }
});