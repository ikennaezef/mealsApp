import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

const MealItem = ({ meal }) => {
	const navigation = useNavigation();

	const pressHandler = () => {
		navigation.navigate("MealDetail", {
			mealId: meal.id,
		});
	};

	return (
		<View style={styles.container}>
			<Pressable
				onPress={pressHandler}
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}>
				<View style={styles.mealItem}>
					<View style={styles.imageContainer}>
						<Image source={{ uri: meal.imageUrl }} style={styles.image} />
					</View>
					<Text style={styles.mealTitle}>{meal.title}</Text>
					<MealDetails
						affordability={meal.affordability}
						complexity={meal.complexity}
						duration={meal.duration}
					/>
				</View>
			</Pressable>
		</View>
	);
};

export default MealItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 10,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
		borderRadius: 8,
		backgroundColor: "white",
		elevation: 4,
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 8,
	},
	mealItem: {
		borderRadius: 8,
		overflow: "hidden",
	},
	imageContainer: {
		marginBottom: 4,
	},
	image: {
		width: "100%",
		height: 200,
	},
	buttonPressed: {
		opacity: 0.5,
	},

	mealTitle: {
		fontFamily: "jakarta-sans-bold",
		fontSize: 16,
		textAlign: "center",
		marginBottom: 4,
	},
});
