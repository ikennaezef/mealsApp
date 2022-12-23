import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { FavoritesContextProvider } from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				sceneContainerStyle: { backgroundColor: "#3f2f25" },
				headerTintColor: "white",
				headerStyle: { backgroundColor: "#351401" },
				drawerContentStyle: { backgroundColor: "#351401" },
				drawerInactiveTintColor: "white",
				drawerActiveTintColor: "#3f2f25",
				drawerActiveBackgroundColor: "#d6a180",
				headerTitleAlign: "center",
				headerTitleStyle: {
					fontFamily: "jakarta-sans-bold",
					fontSize: 18,
				},
			}}>
			<Drawer.Screen
				name="MealsCategories"
				component={CategoriesScreen}
				options={{
					title: "All Categories",
					drawerIcon: ({ color, size }) => (
						<Ionicons name="list" color={color} size={size} />
					),
				}}
			/>
			<Drawer.Screen
				name="Favorites"
				component={FavoritesScreen}
				options={{
					drawerIcon: ({ color, size }) => (
						<Ionicons name="heart" color={color} size={size} />
					),
				}}
			/>
		</Drawer.Navigator>
	);
};

export default function App() {
	const [fontsLoaded] = useFonts({
		"jakarta-sans": require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
		"jakarta-sans-bold": require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<>
			<StatusBar style="light" />
			<FavoritesContextProvider>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							contentStyle: { backgroundColor: "#3f2f25" },
							headerTintColor: "white",
							headerStyle: { backgroundColor: "#351401" },
							headerTitleAlign: "center",
							headerTitleStyle: {
								fontFamily: "jakarta-sans-bold",
								fontSize: 18,
							},
						}}>
						<Stack.Screen
							name="Drawer"
							component={MyDrawer}
							options={{
								title: "All Categories",
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="MealsOverview"
							component={MealsOverviewScreen}
						/>
						<Stack.Screen
							name="MealDetail"
							component={MealDetailScreen}
							options={{ title: "About The Meal" }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</FavoritesContextProvider>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
