import UsersSchema from '../models/user.js'

export const signupController = async (req, res) => {
    res.json({
                status: true,
                message: "Sign up successfully",
                data: []
            })
}
