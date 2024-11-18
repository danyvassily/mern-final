import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import {errorHandler} from '../utils/error.js';

export const test = (req, res) => {
    res.json({ message: 'le back fonctionne' });
};

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.userId) {
        return next(errorHandler(403, 'vous ne pouvez pas mettre à jour cet utilisateur'));
    }

    if (req.body.password) {
        if (req.body.password.length < 6) {
            return next(errorHandler(400, 'Le mot de passe doit contenir au moins 6 caractères'));
        }
        req.body.password = await bcryptjs.hash(req.body.password, 10);
    }

    if (req.body.username) {
        if (req.body.username.length < 7 || req.body.username.length > 20) {
            return next(errorHandler(400, "Le nom d'utilisateur doit contenir entre 7 et 20 caractères"));
        }
        if (req.body.username.toLowerCase() !== req.body.username) {
            return next(errorHandler(400, "Le nom d'utilisateur doit être en minuscules"));
        }
        if (req.body.username.includes(' ')) {
            return next(errorHandler(400, "Le nom d'utilisateur ne peut pas contenir d'espaces"));
        }
        if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
            return next(errorHandler(400, "Le nom d'utilisateur doit contenir uniquement des lettres et des chiffres"));
        }
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.userId,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    profilePicture: req.body.profilePicture,
                    password: req.body.password,
                }
            },
            { new: true }
        );
        const { password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};