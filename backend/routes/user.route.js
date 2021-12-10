const { fetchUser, fetchUsers } = require("../controllers/user.controller");
const router = require("express").Router();

router.get("/", fetchUsers);
router.get("/:userId", fetchUser);

module.exports = router;
