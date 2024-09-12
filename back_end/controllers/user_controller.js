const sql = require("../config/db");

const getCurrentUser = async (req, res) => {
  try {
    const [result] = await sql`SELECT * FROM users WHERE id=${req.user.id};`;
    console.log(result);
    res.status(200).json({ user: result, message: "Success" });
  } catch (error) {
    console.error("failed");
  }
};

const getAllUser = async (req, res) => {
  const result = await sql`SELECT * FROM users`;
  console.log(result);
  res.status(200).json({ users: result });
};

const createUser = async (req, res) => {
  console.log("DD", req.body);
  const { email, name, password, profile_img } = req.body;

  await sql`INSERT INTO users(email, name, password, profile_img ) 
          VALUES (${email}, ${name}, ${password}, ${profile_img});
`;

  res.status(201).json({ message: "Шинэ хэрэглэгч амжилттай үүслээ." });
};

const updateUser = async (req, res) => {
  await sql`UPDATE users SET name = 'Boloroo' WHERE id = '881a0d11-a80f-4cc5-9bca-b1c68175558f'`;
  res.status(201).json({ message: "Update hiile" });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  await sql`DELETE FROM users WHERE id=${id}`;
  res.status(201).json({ message: "Amjilttai ustgalaa" });
};

module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  getCurrentUser,
};
