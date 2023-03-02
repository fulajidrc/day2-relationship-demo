const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try{
        const token = req.cookies.loginToken;
        if(token){
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            if(decoded){
                req.user = decoded;
                next();
            }else{
                return res.status(401).json({
                    message: 'Unauthorized Access'
                });
            }
        }else{
            return res.status(401).json({
                message: 'Unauthorized Access'
            });
        }
        
    }catch(error){
        console.log(error.message);
        return res.status(500).json({
            message: 'Server error!'
        });
    }
}

module.exports = auth;