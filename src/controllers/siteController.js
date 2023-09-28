const connection = require('../config/connectFB')

class siteController{

    getHomepage(req, res){
        let data = []
        connection.query(
            'SELECT * FROM `users`',
            function(err, results, fields) {
                results.map((row) => {
                    data.push({
                        id: row.id,
                        firstname: row.Firstname,
                        lastname: row.Lastname,
                        email: row.email,
                        address: row.address
                    })
                    console.log(JSON.stringify(data))
                    res.render("sample.ejs", { dataUser: JSON.stringify(data)});
                })
            }
        );
        
    }

    getSearchpage(req, res){
        res.render("search.ejs");
    }

}

module.exports = new siteController()