require("dotenv").config();
const Airtable = require("airtable");

Airtable.configure({
    apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_BASE);
const table = base(process.env.AIRTABLE_TABLE);

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
        const records = await table
            .select({
                sort: [{ field: "Score", direction: "desc" }],
            })
            .firstPage();
        const formattedRecords = records.map((record) => ({
            id: record.id,
            fields: record.fields,
        }));

        const recordToUpdate = formattedRecords.find(({ id, fields }) => {
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
