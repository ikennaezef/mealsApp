import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subtitle = ({ children }) => {
	return (
		<View style={styles.headingContainer}>
			<Text style={styles.headingText}>{children}</Text>
		</View>
	);
};

export default Subtitle;

const styles = StyleSheet.create({
	headingContainer: {
		marginHorizontal: 8,
		marginVertical: 4,
		borderBottomColor: "#eaa959",
		borderBottomWidth: 2,
		padding: 4,
	},
	headingText: {
		color: "#eaa959",
		fontSize: 16,
		fontFamily: "jakarta-sans-bold",
		textAlign: "center",
	},
});
