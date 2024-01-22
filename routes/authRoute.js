import express from "express"
import { forgetPasswordController, loginController, logoutController, signupController } from "../controllers/authController.js"

// create a const variable = getting express.Router() 
// function to route from app.use('/auth', authRoute)
const authRoute = express.Router()

authRoute.post("/signup", signupController)
authRoute.post("/login", loginController)
authRoute.post("/logout", logoutController)
authRoute.put("/forgetPassword", forgetPasswordController)

export { authRoute }
