const database = require("./database")

const getUsers = (req, res) => {
    database
    .query("select * from users")
    .then(([users]) => res.json(users))
    .catch((err) => {
        console.error(err);
        res.status(500).send("Error while retrieving users");
    })
}
const getUserById = (req, res) => {
    const id = parseInt(req.params.id, 10)
    database
    .query("select * from users where id = ?", [id])
    .then(([user]) => res.json(user))
    .catch((err) => {
        console.error(err);
        res.status(500).send("Error while retrieving user ?", [id] )
    })
}

module.exports={
    getUsers,
    getUserById
}