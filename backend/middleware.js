const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' }); // Unauthorized
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId; // Store decoded data in req.user for later use
    next();
  } catch (err) {
    console.error(err); // Log the error for debugging
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = {
  authMiddleware
};
