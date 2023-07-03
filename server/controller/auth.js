import { StatusCodes } from "http-status-codes"

import User from "../model/User.js"
import { NotFound, BadRequestError } from '../errors/index.js'

const register = async (req, res, next) => {
    
    const user = await User.create({ ...req.body })

    const token = await user.createJWT()

    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}

const login = async (req, res, next) => {

    const { email, password } = req.body;

    if (!email || !password) {
        throw new BadRequestError('Please provide email and password')
    }

    const user = await User.findOne({ email })

    if (!user) {
        throw new NotFound('Invalid Credentials')
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
        throw new NotFound('Invalid Credentials')
    }

    const token = await user.createJWT()

    res.status(StatusCodes.OK).json({ user: { name: user.name }, token })
}

export { login, register }