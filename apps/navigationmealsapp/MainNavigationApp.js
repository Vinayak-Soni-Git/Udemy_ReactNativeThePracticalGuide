import React from 'react';
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FavouriteScreen from "./screens/FavouriteScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={'Categories'} component={CategoriesScreen}/>
            <Drawer.Screen name={'Favourites'} component={FavouriteScreen}/>
        </Drawer.Navigator>
    )
}

export default function MainNavigationApp() {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name={'MealsCategories'} component={DrawerNavigator} options={{
                    headerShown:false,
                }}/>
                <Stack.Screen
                    name={'MealsOverview'}
                    component={MealsOverviewScreen}
                    options={({route, navigation}) => {
                        const catId = route.params.categoryId;
                        return {
                            title: catId,
                        }
                    }}
                />
                <Stack.Screen name={'MealDetail'} component={MealDetailsScreen}/>
            </Stack.Navigator>
        </>
    )
}
