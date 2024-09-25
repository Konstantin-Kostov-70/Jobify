import { UnauthenticatedError, UnauthorizedError, BadRequestError } from "../errors/customError.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) throw new UnauthenticatedError('authentication invalid');

    try {
        const { userId, role } = verifyJWT(token)
        const testUser = userId === '66f41590e95e09fde19abd41'
        req.user = { userId, role, testUser }
        
        next()  
    } catch (error) {
        throw new UnauthenticatedError('authentication invalid');
    }
}

export const authorizePermissions = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new UnauthorizedError('Unauthorize to access this route')
        }
        next()
    }
}

export const checkTestUser = (req, res, next) => {
   if(req.user.testUser) throw new BadRequestError('Demo user: Read only!');
   next();
}