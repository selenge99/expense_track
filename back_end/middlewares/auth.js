const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  // console.log("nevtersen hereglegch shalgah"
  if (!req.headers.authorization) {
    res.status(401).json({ message: "nevtrene uu" });
  }

  const token = req.headers.authorization.split(" ")[1];
  //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM5M2Y0OGI0LTBiNjAtNGM2Ni04ZDQwLTRlODA3Yzg1NzY4OCIsImlhdCI6MTcyNTUwNTMzMiwiZXhwIjoxNzI1NTA4OTMyfQ.WkU3XyenPcw-zxnqfk-ipFPQWDrQ86xD4_bAm6JM9lc
  const user = jwt.verify(token, "JWT_TOKEN_PASS@123"); //{id:'dd'}
  req.user = user;
  next();
};
module.exports = { auth };
