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

        const recordToUpdate = records.find(({ id, fields }) => {
            return typeof fields.Score === "undefined" || score > fields.Score;
        });

        if (recordToUpdate) {
            const newRecord = {
                id: recordToUpdate.id,
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
