import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import PostersImage from "@/components/posters";

export default function Index() {
  return (
   <SafeAreaView style={styles.body}>
     <View style= {styles.body}
    >
  <StatusBar backgroundColor="green" hideTransitionAnimation="fade" style="dark" />
      <View style={styles.container}  >
        <Text style={styles.text}>X</Text>

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
    padding: 10,
  },

  container: {
    marginTop: 15,
    paddingVertical: 15,
  },
  text : {
    color: 'white',
  }
});