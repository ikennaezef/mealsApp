import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MealsList from "../components/MealsList/MealsList";
import { useFavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
	const { ids } = useFavoritesContext();

	const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

	if (favoriteMeals.length === 0) {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>You don't have any favorite meals yet</Text>
			</View>
		);
	}

	return <MealsList data={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: "white",
		fontSize: 18,
		fontFamily: "jakarta-sans-bold",
	},
});
