import User from '../models/User.js';
import Product from '../models/Product.js';

/*READ*/
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

/*UPDATE*/
export const addRemoveFavorite = async (req, res) => {
    try {
        const { userId, productId } = req.params;
        const user = await User.findById(userId);
        const product = await Product.findById(productId);
        res.status(200).json(product);

        if (user.favorites.includes(productId)) {
            user.favorites = user.favorites.filter((id) => id !== productId);
        } else {
            user.favorites.push(productId);
        }
        await user.save();

        const favorites = await Promise.all(
            user.favorites.map((favorite) => {
                return Product.findById(favorite);
            })
        );
        const formattedFavorites = favorites.map(
            ({_id, title, description, price, pictures}) => {
            return {_id, title, description, price, pictures};
            }
        );

        res.status(200).json(formattedFavorites);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}