const getUsers = (req, res) => {
    res.json({ msg: "Fetching users successful" });
};

const getBeneficiaries = (req, res) => {
    res.json({ msg: "Fetching beneficiaries successful" });
};

module.exports = { getUsers, getBeneficiaries };
