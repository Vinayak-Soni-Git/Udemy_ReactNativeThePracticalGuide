import {View, SafeAreaView, StyleSheet, TouchableOpacity, Text} from "react-native";
import Routes from './routes/Routes';
const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
        <View style={styles.buttonViewContainer} >
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(Routes.NavigationApp)}>
                <Text style={styles.buttonText} >Navigation App</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(Routes.DrawerApp)}>
                <Text style={styles.buttonText} >Drawer App</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(Routes.BottomTabsApp)}>
                <Text style={styles.buttonText} >Bottom Tabs App</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(Routes.MiniGame)}>
                <Text style={styles.buttonText} >Mini Game</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
};

export default Home;


const styles = StyleSheet.create({
    buttonViewContainer:{
        padding:10,
        alignItems:'center',
    },
    button:{
        padding:20,
        backgroundColor:'skyblue',
        textAlign:'center',
        justifyContent:'center',
        borderRadius:4,
        marginTop:10,
        width:'50%',
        alignItems:'center'
    },
    buttonText:{
        color:'black',
        fontSize:16,
        fontWeight:'bold',

    }
})
