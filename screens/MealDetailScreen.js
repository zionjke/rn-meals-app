import React from 'react';
import {View, Text, StyleSheet,Button} from "react-native";

const MealDetailScreen = (props) => {

    const onNavigationGoToCategories = () => {
        props.navigation.popToTop() // navigate to first screen in Navigation Stack
    }

    return (
        <View style={styles.screen}>
            <Text>MealDetailScreen</Text>
            <Button title='Go Back to Categories' onPress={onNavigationGoToCategories}/>
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

export default MealDetailScreen;