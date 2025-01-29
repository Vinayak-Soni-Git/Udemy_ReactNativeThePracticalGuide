import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import {Ionicons} from "@expo/vector-icons";

const Drawer = createDrawerNavigator();


function MainDrawerApp(){
    return(
        <Drawer.Navigator screenOptions={{
            headerStyle:{backgroundColor:'purple'},
            headerTintColor:'white',
        }} >
            <Drawer.Screen name={'Welcome'} component={WelcomeScreen} options={{
                drawerIcon:({color})=><Ionicons name={'home'} color={color} size={18}/>
            }} />
            <Drawer.Screen name={'User'} component={UserScreen} options={{
                drawerIcon:({color})=><Ionicons name={'person'} color={color} size={18}/>
            }} />
        </Drawer.Navigator>
    )
}


export default MainDrawerApp;
