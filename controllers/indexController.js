const User  = require('../models/userModel')
const {validationResult} = require('express-validator')

exports.homepage = (req, res, next) => {
    res.status(200).json({message: "Welcome to the homepage"})
}

exports.signup = async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json(errors.errors)
        }
        const {username, password, email} = req.body
        const user = new User ({
            username,
            password,
            email
        })
        const createduser = await user.save()
        res.status(201).json(createduser)
        
    } catch (error) {
        res.status(500).json(error)
    }
}
