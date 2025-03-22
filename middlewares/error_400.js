const error_400 = (error, req, res, next) => {
    if (error.status === 400 || error.name === "ValidationError") {
        return res.status(400).json({ 
            success: false,
            message: error.message || "Bad Request",
            response: "This is a bad request"
        });
    }
    next(error); 
};

export default error_400;
