const fs = require('fs')

const getImgCity = (req, res) => {
    fs.readFile("./images/" + req.params.cityId, (err, data) => {
        if (err) return res.send().status(404)
        res.write(data)
        return res.end();
    })
}
module.exports = {
    getImgCity
}