const { Router } = require("express");
const {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  getCurrentUser,
} = require("../controllers/user_controller");
const { auth } = require("../middlewares/auth");

const router = Router();

router.route("/profile").get(auth, getCurrentUser);
router.route("/").get(getAllUser).post(createUser);
router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;
