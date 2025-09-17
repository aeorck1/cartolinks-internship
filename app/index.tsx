import { Text, View, StyleSheet, useColorScheme, StatusBar } from "react-native";
// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import PostersImage from "@/components/posters";

export default function Index() {
const scheme = useColorScheme()
const isDark = scheme ==="dark";


  return (
   <SafeAreaView style={styles.body}>
     <StatusBar showHideTransition="slide" backgroundColor={!isDark ? "#fff" : "#000"} barStyle={isDark ? "light-content" : "dark-content"} />
     <View style= {styles.body}
    >
 
      <View style={styles.container}  >
        <Text style={styles.text}></Text>
    
        <PostersImage />
      </View>
    </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  body:{
    backgroundColor: 'black',
    flex: 1,
    padding: 2,
  },

  container: {
    marginTop: 15,
    paddingVertical: 15,
  },
  text : {
    color: 'white',
  }
});