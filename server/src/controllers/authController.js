
const loginUser = async (req, res) => {
    try {

        const {authToken} = req.body;

        if(!authToken){
          return res.status(403).json({error:"invalid token"})
        }
  

        const cookieJwtOptions = {
            expires: Date.now() + 1000 * 60 * 60,
            maxAge: 1000 * 60 * 60,
            httpOnly: true,
            sameSite:"none",
            secure: true
        }


        console.log(cookieJwtOptions)

      return res.cookie("authToken", authToken, cookieJwtOptions);
    } catch (error) {
      return res.status(500).json({ error: "something went wrong" });
    }
  };


  const logoutUser = async (req, res) => {
    try {

  
        const jwtTokenOptions = {
          httpOnly: true,
          sameSite: "none",
          secure: true,
        };
        return res
          .clearCookie("authToken", jwtTokenOptions)
          .json({ message: "logout successfully" });
    
    } catch (error) {
      return res.status(500).json({ error: "something went wrong" });
    }
  };
  
  module.exports = { loginUser, logoutUser };
  