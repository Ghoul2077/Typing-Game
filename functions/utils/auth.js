const jwt = require("jsonwebtoken");
const jwks = require("jwks-rsa");
const { promisify } = require("util");

const jwksClient = jwks({
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
});

let signingKey;

const getAccessTokenFromHeader = (headers) => {
    const rawAuthorization = headers.authorization;

    if (!rawAuthorization) {
        return null;
    }

    const authorizationPart = rawAuthorization.split(" ");
    if (authorizationPart[0] !== "Bearer" || authorizationPart.length !== 2)
        return null;

    const accessToken = authorizationPart[1];
    return accessToken;
};

const validateAccessToken = async (token) => {
    if (!signingKey) {
        const getSigningKey = promisify(jwksClient.getSigningKey);
        try {
            const key = await getSigningKey(process.env.AUTH0_KEY_ID);
            signingKey = key.getPublicKey();
        } catch (err) {
            console.error(err);
            return null;
        }
    }
    try {
        const decoded = jwt.verify(token, signingKey);
        console.log(decoded);
        return decoded;
    } catch (err) {
        console.error(err);
        return null;
    }
};

module.exports = {
    getAccessTokenFromHeader,
    validateAccessToken
};
