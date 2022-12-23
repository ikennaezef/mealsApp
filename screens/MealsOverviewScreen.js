import React, { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsOverviewScreen = ({ route, navigation }) => {
	const id = route.params.categoryId;

	useLayoutEffect(() => {
		const cat = CATEGORIES.find((category) => category.id === id).title;

		navigation.setOptions({
			title: cat,
		});
	}, [id, navigation]);

	const mealsToDisplay = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(id) >= 0
	);

	return <MealsList data={mealsToDisplay} />;
};

export default MealsOverviewScreen;
