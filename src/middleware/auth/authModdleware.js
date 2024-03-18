const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../utils/constants');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
   // console.log(token,JWT_SECRET);
    if (token!==JWT_SECRET) {
      return res.status(403).json({ message: 'Access forbidden' });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
