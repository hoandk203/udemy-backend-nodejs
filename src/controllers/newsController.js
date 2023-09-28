
class newsController{

    getNewspage(req, res){
        res.render('news');
    }

    getShinki(req, res){
        res.send('Shinki')
    }
}

module.exports = new newsController()