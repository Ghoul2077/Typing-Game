require("dotenv").config();
const Airtable = require("airtable");

Airtable.configure({
    apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_BASE);
const table = base(process.env.AIRTABLE_TABLE);

async function getHighScores(filterEmptyRecords) {
    const queryOptions = { sort: [{ field: "Score", direction: "desc" }] };
    if (filterEmptyRecords)
        queryOptions.filterByFormula = `AND(name != "", Score > 0)`;
    const records = await table.select(queryOptions).firstPage();
    const formattedRecords = records.map((record) => ({
        id: record.id,
        fields: record.fields,
    }));
    return formattedRecords;
}

module.exports = { table, getHighScores };
