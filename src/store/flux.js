const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorito: [],
			listadelete: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			handleAddFavorito: (ave) => {
				//get the store
				const mystore = getStore();

				//reset the global store
				setStore({
					...mystore,
					favorito:[...mystore.favorito,ave]
				});
			}
		}
	};
};

export default getState;