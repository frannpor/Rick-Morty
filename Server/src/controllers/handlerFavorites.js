let myFavorites = [];

const postFav = (req, res) => {
    try {
        const character = req.body;
        const charFound = myFavorites.find(fav => fav.id === character.id);
        if (charFound) throw Error("Ese personaje ya está en favoritos")
        myFavorites.push(character);
        return res.status(200).json(myFavorites);
    } catch (error) {
        return res.status(404).send(error.message);
    }
}

const deleteFav = (req, res) => {
    const { id } = req.params;
    myFavorites = myFavorites.filter((fav) => fav.id !== +id);
    return res.status(200).json(myFavorites);
};

module.exports = {
    postFav,
    deleteFav
};