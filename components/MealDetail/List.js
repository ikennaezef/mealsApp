import { StyleSheet, Text, View } from "react-native";
import React from "react";

const List = ({ data }) => {
	return data.map((dataPoint, index) => (
		<View key={index} style={styles.listItem}>
			<Text key={dataPoint} style={styles.listText}>
				{dataPoint}
			</Text>
		</View>
	));
};

export default List;

const styles = StyleSheet.create({
	listItem: {
		borderRadius: 6,
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginVertical: 4,
		marginHorizontal: 12,
		backgroundColor: "#eaa959",
	},
	listText: {
		color: "#422706",
		fontFamily: "jakarta-sans",
		fontSize: 14,
		textAlign: "center",
	},
});
