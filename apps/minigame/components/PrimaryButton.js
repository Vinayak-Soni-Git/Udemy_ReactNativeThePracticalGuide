import {Text, View, Pressable, StyleSheet} from "react-native";

function PrimaryButton({children, onPress}) {
    return (<View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed})=> pressed ? [styles.container, styles.pressed] :styles.container}
                       onPress={onPress}
                       android_ripple={{color: '#ccc'}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>

    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden',

    },
    container: {
        backgroundColor: 'purple',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        margin: 4,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed:{
        opacity:0.5,
    }
})
