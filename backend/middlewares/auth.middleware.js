const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  let token = req.header("Authorization");
  if (!token || !token.startsWith("Bearer")) {
    return res.status(401).send("Access Denied");
  } else {
    try {
      token = token.split(" ")[1];
      const virefied = jwt.verify(token, process.env.secret);
      console.log("virefied", virefied);
      req.user = virefied;
      next();
    } catch (err) {
      return res.status(401).send({ message: "Invalid token", token });
    }
  }
};

module.exports = {
  auth,
};
