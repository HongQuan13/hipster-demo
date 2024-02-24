const express = require("express");
const router = express.Router();
const {
  initDatabase,
  fetchAllUsers,
  addRandomUser,
} = require("../databases/init.mysql");

router.get("/api/checkstatus", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "api ok",
  });
});

router.get("/api/initDB", async (req, res, next) => {
  try {
    await initDatabase();
    res.status(200).json({
      status: "Success",
      message: "Init datatable successfully",
    });
  } catch (error) {
    console.log("Internal Error", error);
    next(error);
  }
});

router.get("/api/users", async (req, res, next) => {
  try {
    const userData = await fetchAllUsers();

    res.status(200).json({
      status: "Success",
      message: "Api ok",
      metadata: userData,
    });
  } catch (error) {
    console.log("Internal Error", error);
    next(error);
  }
});

router.get("/api/addRandomUser", async (req, res, next) => {
  try {
    const newUser = await addRandomUser();

    res.status(200).json({
      status: "Success",
      message: "Create a new user successfully",
      metadata: newUser,
    });
  } catch (error) {
    console.log("Internal Error", error);
    next(error);
  }
});

module.exports = router;
