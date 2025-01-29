import {Text, View, StyleSheet} from "react-native";

function Subtitle({children}){
    return (
        <View style={styles.subtitleContainer} >
            <Text style={styles.subtitle} >{children}</Text>
        </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle:{
        color:'black',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
    },
    subtitleContainer:{
        padding:6,
        margin:4,
        marginHorizontal:12,
        marginVertical:4,
        borderBottomColor:'black',
        borderBottomWidth:2,
    },
})
