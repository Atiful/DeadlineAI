const express = require("express");
const router = express.Router();
const passport = require("passport");
const authController = require("../controllers/authController");
const { checkUserExist } = require("../middleware/middleware");
const wrapAsync = require("../utils/wrapAsync");

router.post(
  "/login",
  checkUserExist,
  passport.authenticate("local", { failureMessage: true }),
  wrapAsync(authController.login)
);


//   passport.authenticate("local", (err, user, info) => {
//     if (err) return next(err);
//     if (!user) {
//       return res.status(401).json({
//         message: info?.message || "Invalid email or password", // info.message can give details like "Incorrect username" or "Incorrect password"
//       });
//     }

//     req.logIn(user, (err) => {
//       if (err) return next(err); // handle any login issues
//       return res.status(200).json({
//         message: "User successfully logged in",
//         user,
//       });
//     });
//   })(req, res, next);
// });

router.post("/signup", wrapAsync(authController.signup));


router.get("/isLogin" , wrapAsync(authController.isLogin));

router.get("/logout" , wrapAsync(authController.logout));
module.exports = router;
