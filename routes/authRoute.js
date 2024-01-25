// Importng necessary modules
import express from "express"
import { forgetPasswordController, loginController, logoutController, signupController } from "../controllers/authController.js"

// create a router instance from express
const authRoute = express.Router()

// setting up routes with corres pondng controller functions

// Route for user registration (signup)
authRoute.post("/signup", signupController)

// Route for user login
authRoute.post("/login", loginController)

// Route for user logout
authRoute.post("/logout", logoutController) 

// Route for handling password reset requests
// Note: Using HTTP PUT method for updating password as it's a resource modification
authRoute.put("/forgetPassword", forgetPasswordController)

// Exporting the authRoute for use in other parts of the application
export { authRoute }
