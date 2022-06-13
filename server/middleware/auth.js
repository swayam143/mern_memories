const auth = async (req, res, next) => {
  //
  //wants to like
  //This middleware check before call any route api so it verify user is login before liking any post for example
  //
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;
    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "Swayam");
      req.userId = decodedData?.id;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
