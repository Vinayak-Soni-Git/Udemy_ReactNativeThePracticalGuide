import {Image, Text, View, StyleSheet} from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer} >
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer} >
                <Image style={styles.imageStyle} source={require('../../../assets/images/success.png')}/>
            </View>
            <Text style={styles.summaryText} >Your phone needed <Text style={styles.highlight} >{roundsNumber} </Text>
                 rounds to guess the number{' '}<Text style={styles.highlight} >{userNumber}</Text>.</Text>
            <PrimaryButton onPress={onStartNewGame} >Start New Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center',

    },
    imageContainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:'white',
        overflow:'hidden',
        margin:36,
    },
    imageStyle:{
        width:'100%',
        height:'100%',
    },
    summaryText:{
        fontFamily:'open-sans',
        fontSize:24,
        textAlign:'center',
        marginBottom:24,
    },
    highlight:{
        fontFamily:'open-sans-bold',
        color:'yellow',
    }
})
