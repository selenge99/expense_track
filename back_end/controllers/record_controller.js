const sql = require("../config/db");

const getAllRecord = async (req, res) => {
  try {
    const records = await sql`SELECT * FROM records`;
    console.log(records);
    res.status(200).json({ records });
  } catch (error) {
    res.status(400).json({ message: "failed" });
  }
};

const getInfo = async (req, res) => {
  try {
    console.log("income");
    const [income, expense] =
      await sql`SELECT transaction_type, SUM (amount) FROM records GROUP BY transaction_type`;
    res.status(200).json({ income, expense });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "failed" });
  }
};
const getChartInfo = async (req, res) => {
  try {
    const donutChartData = await sql`SELECT 
SUM(r.amount), c.name cat_name 
FROM records r 
INNER JOIN categories c 
ON r.cid = c.id 
WHERE r.transaction_type= 'EXP'
GROUP BY cat_name;`;
    const barChartData =
      await sql`SELECT TO_CHAR(DATE_TRUNC('month', r.created_at), 'Mon') as sar,
SUM(CASE WHEN r.transaction_type='EXP' THEN r.amount ELSE 0 END) as total_exp,
SUM(CASE WHEN r.transaction_type='INC' THEN r.amount ELSE 0 END) as total_inc
FROM records r
GROUP BY DATE_TRUNC('month', r.created_at)
ORDER BY DATE_TRUNC('month', r.created_at);`;
    res
      .status(200)
      .json({ message: "success", donut: donutChartData, bar: barChartData });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "failed" });
  }
};

module.exports = {
  getAllRecord,
  getInfo,
  getChartInfo,
};
