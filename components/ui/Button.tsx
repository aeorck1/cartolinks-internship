import { View, Text, StyleSheet, Image } from "react-native";

export default function GenerateButton ({ buttonName }: { buttonName: string }) {
    return (
        <View>
            <View style={buttonStyle.thisButton} >
                {/* <Button title={buttonName} onPress={() => {}} color="#f194ff" /> */}
               <Image source={require('../../assets/images/Chat.jpg')} style={{ width: 24, height: 24 }} />
                <Text style={buttonStyle.textformat}>{buttonName}</Text>
            </View>
        </View>
    )
}

const buttonStyle = StyleSheet.create({
        thisButton: {
          marginTop: 80,
            backgroundColor: '#fefefeff',
            paddingVertical: 12,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap:10,
            alignItems: 'center',
            borderRadius: 8,
            
    },
    textformat: {
        color: '#000000ff',
        fontSize: 18,
        fontWeight: '600',
    },

})