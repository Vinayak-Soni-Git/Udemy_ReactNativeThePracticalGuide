import {useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import {StatusBar} from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function Main() {
    const [modelIsVisible, setModelIsVisible] = useState(false)
    const [courseGoals, setCourseGoals] = useState([]);

    function startAddGoalHandler() {
        setModelIsVisible(true)
    }

    function endAddGoalHandler() {
        setModelIsVisible(false);
    }

    function addGoalHandler(enteredGoalText) {
        setCourseGoals(currentCourseGoals => [...currentCourseGoals,
            {text: enteredGoalText, id: Math.random().toString()}]);
        endAddGoalHandler();
    }

    function deleteGoalHandler(id) {
        setCourseGoals(currentCourseGoals => {
            return currentCourseGoals.filter((goal) => goal.id !== id)
        });
    }

    return (
        <>
            <StatusBar style='light'/>
            <View style={styles.appContainer}>
                <Button title='Add New Goal' color='#5e0acc' onPress={startAddGoalHandler}/>
                <GoalInput visible={modelIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
                <View style={styles.goalsContainer}>
                    <FlatList data={courseGoals} renderItem={itemData => {
                        return <GoalItem text={itemData.item.text} id={itemData.item.id}
                                         onDeleteItem={deleteGoalHandler}/>;
                    }}
                              keyExtractor={(item, index) => {
                                  return item.id;
                              }}
                              alwaysBounceVertical={false}>

                    </FlatList>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
    },
    goalsContainer: {
        flex: 4
    },
});
