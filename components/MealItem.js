import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";

const MealItem = ({ meal }) => {
	return (
		<View style={styles.container}>
			<Pressable
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}>
				<View style={styles.mealItem}>
					<View style={styles.imageContainer}>
						<Image source={{ uri: meal.imageUrl }} style={styles.image} />
					</View>
					<Text style={styles.mealTitle}>{meal.title}</Text>
					<View style={styles.textContainer}>
						<Text style={styles.altText}>{meal.duration}m</Text>
						<Text style={styles.altText}>{meal.complexity.toUpperCase()}</Text>
						<Text style={styles.altText}>
							{meal.affordability.toUpperCase()}
						</Text>
					</View>
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
	textContainer: {
		padding: 8,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	mealTitle: {
		fontFamily: "jakarta-sans-bold",
		fontSize: 16,
		textAlign: "center",
		marginBottom: 4,
	},
	altText: {
		fontFamily: "jakarta-sans",
		fontSize: 14,
		marginHorizontal: 6,
	},
});
