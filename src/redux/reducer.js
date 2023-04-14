import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharactersFav: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharactersFav, payload],
                allCharactersFav: [...state.allCharactersFav, payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
            }
        case FILTER:
            const filteredCharacters = state.allCharactersFav.filter(character => character.gender === payload)
            return {
                ...state,
                myFavorites:
                payload === "allCharacters"
                ? [...state.allCharactersFav]
                : filteredCharacters
            }
        case ORDER:
            const copyOfOrder = [...state.allCharactersFav]
            return {
                ...state,
                myFavorites:
                    payload === "A" ?
                        copyOfOrder.sort((a, b) => a.id - b.id)
                        : copyOfOrder.sort((a, b) => b.id - a.id)
            }
        default:
            return { ...state }
    }
}

export default reducer;