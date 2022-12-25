import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext({
	ids: [],
	addFavorite: (id) => {},
	removeFavorite: (id) => {},
});

export const useFavoritesContext = () => useContext(FavoritesContext);

export const FavoritesContextProvider = ({ children }) => {
	const [favoriteMealIds, setFavoriteMealIds] = useState([]);

	const addFavorite = (id) => {
		setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
	};

	const removeFavorite = (id) => {
		setFavoriteMealIds((currentFavIds) =>
			currentFavIds.filter((mealId) => mealId !== id)
		);
	};

	const values = {
		ids: favoriteMealIds,
		addFavorite: addFavorite,
		removeFavorite: removeFavorite,
	};

	return (
		<FavoritesContext.Provider value={values}>
			{children}
		</FavoritesContext.Provider>
	);
};
