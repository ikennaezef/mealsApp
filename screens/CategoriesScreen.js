import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CategoryTile from "../components/CategoryTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
	const pressHandler = (itemData) => {
		navigation.navigate("MealsOverview", {
			categoryId: itemData.item.id,
			categoryTitle: itemData.item.title,
		});
	};

	return (
		<View style={styles.screenContainer}>
			<FlatList
				data={CATEGORIES}
				keyExtractor={(item) => item.id}
				renderItem={(itemData) => (
					<CategoryTile
						title={itemData.item.title}
						color={itemData.item.color}
						onPress={pressHandler.bind(this, itemData)}
					/>
				)}
				numColumns={2}
			/>
		</View>
	);
};

export default CategoriesScreen;

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		marginTop: 30,
	},
});
