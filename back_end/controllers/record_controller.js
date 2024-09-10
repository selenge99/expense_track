const { sql } = require("../config/db");

const getAllRecord = async (req, res) => {
  try {
    const records = await sql`SELECT * FROM records`;
    console.log(records);
    res.status(200).json({ records });
  } catch (error) {
    res.status(400).json({ message: "failed" });
  }
};

module.exports = {
  getAllRecord,
};
