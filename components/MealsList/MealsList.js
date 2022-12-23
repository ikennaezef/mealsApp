import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

const MealsList = ({ data }) => {
	const renderMealItem = (itemData) => {
		return <MealItem meal={itemData.item} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default MealsList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
