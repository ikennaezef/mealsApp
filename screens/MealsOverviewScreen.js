import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsOverviewScreen = ({ route, navigation }) => {
	const id = route.params.categoryId;
	// const title = route.params.categoryTitle;

	useLayoutEffect(() => {
		const cat = CATEGORIES.find((category) => category.id === id).title;

		navigation.setOptions({
			title: cat,
		});
	}, [id, navigation]);

	const mealsToDisplay = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(id) >= 0
	);

	const renderMealItem = (itemData) => {
		return <MealItem meal={itemData.item} />;
	};

	return (
		<View style={styles.container}>
			{/* <Text style={styles.titleText}>{title}</Text> */}
			<FlatList
				data={mealsToDisplay}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	titleText: {
		fontSize: 20,
		fontFamily: "jakarta-sans-bold",
		textAlign: "center",
		marginBottom: 16,
	},
});
