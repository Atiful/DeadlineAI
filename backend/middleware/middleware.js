const user = require("../Models/user");

exports.checkUserExist = async (req , res , next) => {
    const {email , password} = req.body;
    try{
        const User = await user.findOne({email : email});
        if(!User) return res.status(404).json({message : "User is Not Present in DataBase"});
        next();
    }
    catch(error){
        return next(error);
    }
}

