const {OAuth2Client} = require("google-auth-library")
const envVariables = require("../constants/index")

const {GOOGLE_OAUTH_CLIENT_ID, GOOGLE_OAUTH_CLIENT_SECRET} = envVariables;

const client = new OAuth2Client(GOOGLE_OAUTH_CLIENT_SECRET)


const Authenticate = async(req, res, next) => {


  console.log(req.cookies)
  const { authToken } = req.cookies;

  if (!authToken) {
    return res.status(401).json({ error: "You must be signed in" });
  }

  try {
    const ticket = await client.verifyIdToken({
      idToken: authToken,
      audience: GOOGLE_OAUTH_CLIENT_ID
    })
  
    req.user = ticket.getPayload()

    next()
  }catch(error){
    res.status(500).json({ error: error})
  }

};

module.exports = Authenticate;
