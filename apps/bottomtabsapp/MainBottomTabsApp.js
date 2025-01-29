import WelcomeScreen from "../drawerapp/screens/WelcomeScreen";
import {Ionicons} from "@expo/vector-icons";
import UserScreen from "../drawerapp/screens/UserScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();



function MainBottomTabsApp() {
    return (
        <BottomTab.Navigator screenOptions={{
            headerStyle: {backgroundColor: 'purple'},
            headerTintColor: 'white',
        }}>
            <BottomTab.Screen name={'Welcome'} component={WelcomeScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <Ionicons name={'home'} color={color} size={size} />
                )
            }}/>
            <BottomTab.Screen name={'User'} component={UserScreen}  options={{
                tabBarIcon: ({color, size}) => (
                    <Ionicons name={'person'} color={color} size={size} />
                )
            }}/>
        </BottomTab.Navigator>
    )
}

export default MainBottomTabsApp;
