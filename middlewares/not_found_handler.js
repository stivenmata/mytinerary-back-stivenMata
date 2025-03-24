const not_found_handler = (req, res, next) => {
    return res.status(404).json({ 

        success: false,
        message: `La petición con el método ${req.method} y la URL ${req.url} no fue encontrada`,
    
    });
    
}

export default not_found_handler