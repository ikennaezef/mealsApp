import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryTile = ({ title, color, onPress }) => {
	return (
		<View style={[styles.gridItem, { backgroundColor: color }]}>
			<Pressable
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.buttonPressed : null,
				]}
				android_ripple={{ color: "#ccc" }}
				onPress={onPress}>
				<View style={styles.innerContainer}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
};

export default CategoryTile;

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		borderRadius: 10,
		margin: 10,
		height: 150,
		elevation: 4,
		backgroundColor: "white",
		overflow: Platform.OS === "android" ? "hidden" : "visible",
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 8,
	},
	button: {
		flex: 1,
	},
	buttonPressed: {
		opacity: 0.5,
	},
	innerContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 12,
	},
	title: {
		fontSize: 18,
		textAlign: "center",
		fontFamily: "jakarta-sans-bold",
	},
});
