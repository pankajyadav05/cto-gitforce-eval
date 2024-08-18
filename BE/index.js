const express = require("express");
const userController = require("./controllers/member.controller");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/members", userController.getAllMembers);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
