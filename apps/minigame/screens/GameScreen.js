import {View, Text, StyleSheet, Alert, FlatList} from 'react-native';
import Title from "../components/Title";
import {useState, useEffect} from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import {Ionicons} from '@expo/vector-icons';
import GuessLogItem from "../components/game/GuessLogItem";


function generateRandomBetween(min, max, exclude) {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;

    if (randomNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return randomNum;
    }
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([initialGuess])

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length)
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(()=>{
        minBoundary = 1
        maxBoundary = 100
    },[])

    function nextGuessHandler(direction) {
        console.log('in next guess handler')
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert(" Don't lie", 'You know that this is wrong...', [
                {text: 'Sorry!', style: 'cancel'}
            ])
            return
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }
        const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRandomNumber)
        setGuessRounds(prevGuessRounds=>[newRandomNumber, ...prevGuessRounds])
    }

    const guessRoundsListLength = guessRounds.length;


    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <View>
                    <Text style={styles.instructionText} >Higher or lower?</Text>
                    <View style={styles.buttonsContainer} >
                        <View style={styles.buttonContainer} >
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                                <Ionicons name={'remove'} size={24} color={'white'}/>
                            </PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer} >
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                                <Ionicons name={'add'} size={24} color={'white'}/>
                            </PrimaryButton>
                        </View>

                    </View>
                </View>
            </Card>
            <View style={styles.listContainer} >
                {/*{guessRounds.map(guessRounds => <Text key={guessRounds}>{guessRounds}</Text>)}*/}
                <FlatList data={guessRounds} renderItem={(itemData)=>
                    <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}/>} keyExtractor={(item)=>item}></FlatList>
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop: 50,
    },
    buttonsContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    instructionText: {
        color: 'white',
        fontSize: 20,
        fontWeight:'bold',
    },
    listContainer:{
        flex:1,
        padding:16,

    }
})
