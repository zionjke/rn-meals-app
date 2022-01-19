import {Platform} from "react-native";
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        // navigationOptions: {
        //     headerTitle: 'Meal Categories',
        // }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen
}, {
    // initialRouteName: 'Categories' first screen on init
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center'
    }
})

export default createAppContainer(MealsNavigator);