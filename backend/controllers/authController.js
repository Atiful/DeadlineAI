const user = require("../Models/user");


exports.login = async (req , res) => {
    return res.status(200).json({message : "user Sucessfully Login" , user : req.user});
};

exports.isLogin = async (req , res) => {
  res.json({user : req.user});
}

exports.logout = async(req , res , next) => {
  if(req?.user){
    req.logOut((error) => {
        if(error) return next(error);
    });
  }
  return res.status(200).json({message : "User Sucessfully logout"});
}


exports.signup = async (req, res, next) => {
    const { email, password } = req.body;
    const details = await user.deleteMany({ username: null });
  
      const existingUser = await user.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const newUser = new user({email});
  
      const registeredUser = await user.register(newUser, password);

      console.log("registeredUser");
  
      req.login(registeredUser, (error) => {
        if (error) return next(error);
        return res.status(201).json({ message: "Signup and login successful", user: registeredUser });
      });
  };
  