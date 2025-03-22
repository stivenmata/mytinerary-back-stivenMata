const error_handler = (error,req, res, next) => {
    return res.status(500).json
    ({ 
        success: false,
        message: "Internal Server Error",
        response: error.message,
    
    });    
    }
    
    export default error_handler