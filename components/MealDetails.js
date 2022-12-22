import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetails = ({ duration, complexity, affordability, styling }) => {
	return (
		<View style={styles.detailsContainer}>
			<Text style={[styles.altText, styling && styling]}>{duration}m</Text>
			<Text style={[styles.altText, styling && styling]}>
				{complexity.toUpperCase()}
			</Text>
			<Text style={[styles.altText, styling && styling]}>
				{affordability.toUpperCase()}
			</Text>
		</View>
	);
};

export default MealDetails;

const styles = StyleSheet.create({
	detailsContainer: {
		padding: 8,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	altText: {
		fontFamily: "jakarta-sans",
		fontSize: 14,
		marginHorizontal: 6,
	},
});
