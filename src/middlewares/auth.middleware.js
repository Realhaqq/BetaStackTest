const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');

exports.isSignedIn = expressJwt({
  secret: 'BETASTACK',
  algorithms: ['HS256'],
});


exports.withAuth = (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).send({ message: 'Unauthorized: No token provided' });
  }

  const defaultToken = "jhghfde456789iokjHGFRDE45678uijBVFDREwSDFCGVBNkmlOIUYTresee5r6tyuH";
  if (token === defaultToken) {
    return next();
  } else {
    return res.status(401).send({ message: 'Unauthorized: Invalid Token' });
  }
  
};
