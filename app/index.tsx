import { Text, View, StyleSheet, useColorScheme, StatusBar, ScrollView } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import PostersImage from "@/components/posters";

export default function Index() {
const scheme = useColorScheme()
const isDark = scheme ==="dark";


  return (
// Initially was <SafeAreaView> but changed to <View> to fix some issues

   <View style={styles.body}>
     <StatusBar showHideTransition="slide" backgroundColor={!isDark ? "#fff" : "#000"} barStyle={isDark ? "light-content" : "dark-content"} />
     <ScrollView style= {styles.body}
    >
 
      <View style={styles.container}  >
        <Text style={styles.text}></Text>
    
        <PostersImage />
      </View>
    </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  body:{
    backgroundColor: 'black',
    flex: 1,
    padding: 2,
  },

  container: {
    // marginTop: 15,
   
  
  },
  text : {
    color: 'white',
  }
});