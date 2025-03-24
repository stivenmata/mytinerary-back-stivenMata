const error_400 = (error, req, res, next) => {
    if (error.status === 400 || error.name === "ValidationError" || (error.name === "CastError" && error.kind === "ObjectId")) {
        return res.status(400).json({ 
            success: false,
            message: error.message || "Bad Request",
            response: "Invalid request format"
        });
    }
    next(error); 
};

export default error_400;
