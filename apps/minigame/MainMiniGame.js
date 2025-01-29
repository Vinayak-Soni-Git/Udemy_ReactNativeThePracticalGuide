import {useState} from "react";
import StartGameScreen from "./screens/StartGameScreen";
import {StyleSheet, ImageBackground, SafeAreaView} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

export default function MainMiniGame(){
    const [userNumber, setUserNumber] = useState()
    const [gameOver, setGameOver] = useState(true)
    const [guessRounds, setGuessRounds] = useState(0)

    function pickedNumberHandler(pickedNumber){
        setUserNumber(pickedNumber)
        setGameOver(false)
    }
    const [fontsLoaded] = useFonts({
        'open-sans':require('../../assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold':require('../../assets/fonts/OpenSans-Bold.ttf')
    });

    if(!fontsLoaded){
        return <AppLoading/>
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
    if(userNumber){
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
    }
    if(gameOver && userNumber){
        screen = <GameOverScreen userNumber={userNumber}
                                 roundsNumber={guessRounds}
                                 onStartNewGame={startNewGameHandler} />
    }

    function gameOverHandler(numberOfRounds){
        setGameOver(true)
        setGuessRounds(numberOfRounds)
    }

    function startNewGameHandler(){
        setUserNumber(null)
        setGuessRounds(0)

    }

    return <LinearGradient style={styles.rootScreen}  colors={['purple', '#ddb52f']}>
        <ImageBackground
            source={require('../../assets/images/dices-svgrepo-com.png')}
            resizeMode={'contain'}
            style={styles.rootScreen}
            imageStyle={styles.backgroundImage}
        >
            <SafeAreaView style={styles.rootScreen} >
                {screen}
            </SafeAreaView>

        </ImageBackground>
    </LinearGradient>
}

const styles = StyleSheet.create({
    rootScreen:{
        flex:1,
    },
    backgroundImage:{
        opacity:0.15,
    }
})
