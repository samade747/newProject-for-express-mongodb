// Importing the UserSchema model for interacting with the 'users' collection in the database
import UsersSchema from '../models/user.js'

export const signupController = async (req, res) => {
    try{
        const { userName, userEmail, password } = req.body

        console.log(userName, "===> userName" )
        console.log(typeof userName)

        // check for missing fields and respond with an error if any are missing
        if(!userName || !userEmail || !password) return res.status(400).json({
            status: false,
            message: "Missng fields pls fill all fields"
        })

        console.log(password, "===> password")

        // checking if the password length is at least 8 charaters long
        if(password.length < 8 ) return res.status(400).json({
            status: false,
            message: 'password length should be min 8 characters'
        })

        // creating a user object with the provided information 
        const user = {
            userName: userName,
            email: userEmail,
            password: password
        }

        /// creating a user object with provided information
        const UsersSchemaCheck = new UsersSchema(user)

        


    }





    


}
