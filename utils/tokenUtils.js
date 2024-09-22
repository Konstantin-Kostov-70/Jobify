import jwt from 'jsonwebtoken';

export const createJWT = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE_IN,
    });
    return token;
}

export const verifyJWT = (token) => {
  const decoded = jwt.decode(token, process.env.JWT_SECRET);
  return decoded
}