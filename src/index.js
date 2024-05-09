```javascript
// index.js

const jwt = require('jsonwebtoken');

const authenticationMiddleware = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    // Verify and decode the JWT token
    const decodedToken = jwt.verify(token, 'your_secret_key'); 

    req.user = decodedToken;
    
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};

module.exports = authenticationMiddleware;
```
