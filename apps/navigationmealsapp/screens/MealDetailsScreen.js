import {Image, Text, View, StyleSheet, ScrollView, Button} from 'react-native';
import {MEALS} from '../data/DummyData'
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/mealdetail/Subtitle";
import List from "../components/mealdetail/List";
import {useLayoutEffect} from "react";
import IconButton from '../components/IconButton'

function MealDetailsScreen({route, navigation}) {
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    function headerButtonPressHandler(){
        console.log('Pressed!')
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return <IconButton icon={'star'} color={'green'} onPress={headerButtonPressHandler} />
            }
        })
    }, [navigation, headerButtonPressHandler()])

    return <ScrollView style={styles.rootContainer} >
        <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>

        <MealDetails duration={selectedMeal.duration}
                     complexity={selectedMeal.complexity}
                     affordability={selectedMeal.affordability}
                     textStyle={styles.detailText}/>

        <View style={styles.listOuterContainer} >
            <View style={styles.listContainer} >
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients} />

                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps} />
            </View>
        </View>

    </ScrollView>
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'black',
    },
    detailText:{
        color:'black'
    },
    listOuterContainer: {
        alignItems:'center',
    },
    listContainer:{
        width:'80%',
    }
})
