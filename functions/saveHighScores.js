const { table, getHighScores } = require("./utils/airtable.js");
exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ err: "That method is not allowed" }),
        };
    }

    const { name, score } = JSON.parse(event.body);
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
