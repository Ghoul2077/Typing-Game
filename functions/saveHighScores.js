const { table, getHighScores } = require("./utils/airtable.js");
const {
    getAccessTokenFromHeader,
    validateAccessToken,
} = require("./utils/auth.js");

exports.handler = async (event) => {
    const token = getAccessTokenFromHeader(event.headers);
    const user = await validateAccessToken(token);

    if (!user) {
        return {
            statusCode: 401,
            body: JSON.stringify({ err: "User is not authorized" }),
        };
    }

    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ err: "That method is not allowed" }),
        };
    }

    const { score } = JSON.parse(event.body);
    const name = user["https://typinggame/username"];

    if (!score || !name) {
        return {
            statusCode: 400,
            body: JSON.stringify({ err: "Bad Request" }),
        };
    }

    try {
        const records = await getHighScores(false);
        const lastRecord = records.slice(-1)[0];

        if (
            typeof lastRecord.fields.Score === "undefined" ||
            score > lastRecord.fields.Score
        ) {
            const newRecord = {
                id: lastRecord.id,
                fields: { Name: name, Score: score },
            };

            await table.update([newRecord]);

            return {
                statusCode: 200,
                body: JSON.stringify(newRecord),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({}),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                err: "Failed to save score in airtable",
            }),
        };
    }
};
