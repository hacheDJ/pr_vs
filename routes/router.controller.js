const welcome = (req, res) => {
    return new Promise((resolve, reject) => {
        res.json({
            msg: "Welcome to my API Shop!!"
        })
        resolve()
    })
}

module.exports = welcome