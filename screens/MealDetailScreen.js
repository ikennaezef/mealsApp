import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route }) => {
	const mealId = route.params.mealId;

	const currentMeal = MEALS.filter((meal) => meal.id === mealId)[0];
	console.log(currentMeal);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>MealDetailScreen for {mealId}</Text>
		</View>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 6,
	},
	text: {
		color: "white",
	},
});
