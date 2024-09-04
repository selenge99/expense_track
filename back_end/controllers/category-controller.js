const sql = require("../config/db");

const getAllCategory = async (req, res) => {
  const result = await sql`SELECT * FROM categories`;
  console.log("USER", req.user);
  res.status(200).json({ users: result });
};

const createCategory = async (req, res) => {
  //   console.log("DD", req.body);
  const { name, description } = req.body;

  await sql`INSERT INTO users(name, description, ) 
          VALUES (${name}, ${description},);
`;
  res.status(201).json({ message: "амжилттай үүслээ." });
};

const updateCategory = async (req, res) => {
  await sql`UPDATE users SET name = 'Boloroo' WHERE id = '881a0d11-a80f-4cc5-9bca-b1c68175558f'`;
  res.status(201).json({ message: "Update hiile" });
};

const deleteCategory = async (req, res) => {
  await sql`DELETE FROM users WHERE id = '881a0d11-a80f-4cc5-9bca-b1c68175558f'`;
  res.status(201).json({ message: "Amjilttai ustgalaa" });
};

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
