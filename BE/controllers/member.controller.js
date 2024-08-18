const memberService = require("../services/member.service");

const memberController = {
    getAllMembers: (req, res) => {
        const users = memberService.getAllMembers();
        res.json(users);
    },
};

module.exports = memberController;
