import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import MainNavigationApp from "./apps/navigationmealsapp/MainNavigationApp";
import Home from "./apps/Home";
import Routes from './apps/routes/Routes'
import MainDrawerApp from "./apps/drawerapp/MainDrawerApp";
import MainBottomTabsApp from "./apps/bottomtabsapp/MainBottomTabsApp";
import MainMiniGame from "./apps/minigame/MainMiniGame";
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name={Routes.Home} component={Home} />
                <Stack.Screen name={Routes.NavigationApp} component={MainNavigationApp} options={{
                    headerShown:false
                }}/>
                <Stack.Screen name={Routes.DrawerApp} component={MainDrawerApp} options={{
                    headerShown:false
                }}/>
                <Stack.Screen name={Routes.BottomTabsApp} component={MainBottomTabsApp} options={{
                    headerShown:false
                }}/>
                <Stack.Screen name={Routes.MiniGame} component={MainMiniGame} options={{
                    headerShown:false
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}
