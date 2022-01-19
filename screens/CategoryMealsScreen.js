import React from 'react';
import {View, Text, StyleSheet, Button, Platform} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealsScreen = (props) => {
    const id = props.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(category => category.id === id)
    const {title, color} = selectedCategory

    const onNavigateToMealDetail = () => {
        props.navigation.navigate({routeName: 'MealDetail'})
    }

    const onNavigationGoBack = () => {
        props.navigation.goBack()
    }

    return (
        <View style={styles.screen}>
            <Text>Category Title:</Text>
            <Text>{title}</Text>
            <Button title="Go to Meal Detail!" onPress={onNavigateToMealDetail}/>
            <Button title='Go back!' onPress={onNavigationGoBack}/>
        </View>
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const id = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(category => category.id === id)
    const {title, color} = selectedCategory
    return {
        headerTitle: title,
        headerStyle: {
            backgroundColor: color
        },
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CategoryMealsScreen;