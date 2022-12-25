import React, { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { useFavoritesContext } from "../store/context/favorites-context";

const MealDetailScreen = ({ route, navigation }) => {
	const { ids, addFavorite, removeFavorite } = useFavoritesContext();

	const mealId = route.params.mealId;

	const currentMeal = MEALS.filter((meal) => meal.id === mealId)[0];

	const mealIsFavorite = ids.includes(mealId);

	const toggleFavoriteHandler = () => {
		if (mealIsFavorite) {
			removeFavorite(mealId);
		} else {
			addFavorite(mealId);
		}
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						icon={mealIsFavorite ? "heart" : "heart-outline"}
						color="white"
						onPress={toggleFavoriteHandler}
					/>
				);
			},
		});
	}, [navigation, toggleFavoriteHandler]);

	return (
		<ScrollView style={styles.container}>
			<Image source={{ uri: currentMeal?.imageUrl }} style={styles.mealImage} />
			<Text style={styles.title}>{currentMeal?.title}</Text>
			<MealDetails
				styling={{ color: "#fff" }}
				affordability={currentMeal?.affordability}
				duration={currentMeal?.duration}
				complexity={currentMeal?.complexity}
			/>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={currentMeal.ingredients} />
					<Subtitle>Steps</Subtitle>
					<List data={currentMeal.steps} />
				</View>
			</View>
		</ScrollView>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		paddingBottom: 24,
		marginBottom: 32,
	},
	mealImage: {
		width: "100%",
		height: 250,
		marginBottom: 6,
		borderBottomColor: "red",
		borderBottomWidth: 2,
	},
	title: {
		fontSize: 18,
		textAlign: "center",
		color: "white",
		fontFamily: "jakarta-sans-bold",
	},
	listOuterContainer: {
		alignItems: "center",
	},
	listContainer: {
		width: "80%",
	},
});
