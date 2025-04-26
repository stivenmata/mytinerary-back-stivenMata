import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        await User.findOneAndUpdate(
            { email: req.user.email },
            { online: true }
        );
        return res.status(200).json({
            success: true,
            message: "Signed In",
            token: req.token
        });
    } catch (error) {
        next(error);
    }
};
