import React from 'react';
import {View, Text, StyleSheet,Button} from "react-native";

const CategoryMealsScreen = (props) => {

    const onNavigateToMealDetail = () => {
        props.navigation.navigate({routeName:'MealDetail'})
    }

    return (
        <View style={styles.screen}>
            <Text>CategoryMealsScreen</Text>
            <Button title="Go to Meal Detail!" onPress={onNavigateToMealDetail}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CategoryMealsScreen;