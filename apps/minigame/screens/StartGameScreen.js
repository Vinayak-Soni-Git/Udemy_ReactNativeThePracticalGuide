import {TextInput, View, StyleSheet, Alert, Text} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import {useState} from "react";
import Title from "../components/Title";
import Card from "../components/Card";

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler() {
        setEnteredNumber('')
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number ', 'Number had to be a number between 1 and 99',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return
        }
        onPickNumber(chosenNumber)
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <Text style={styles.instructionText}>Enter a Number</Text>
                <TextInput style={styles.numberInput}
                           maxLength={2}
                           keyboardType={'number-pad'}
                           autoCapitalize={'none'}
                           autoCorrect={false}
                           onChangeText={numberInputHandler}
                           value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>

                </View>
            </Card>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',

    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        backgroundColor: '#72063c',
    },
    instructionText: {
        color: 'white',
        fontSize: 20,
        fontWeight:'bold',
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
})
