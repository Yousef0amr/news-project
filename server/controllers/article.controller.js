const wrap = require('express-async-wrapper')



const addArticle = wrap(
    async (req, res) => {
        const article = await Article.create(req.body);
        res.json(article);
    }
)


const getArticles = wrap(
    async (req, res) => {
        const articles = await Article.find();
        res.json(articles);
    }
)

const getArticle = wrap(
    async (req, res) => {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json(article);
    }
)

const updateArticle = wrap(
    async (req, res) => {
        const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json(article);
    }
)

const deleteArticle = wrap(
    async (req, res) => {
        const article = await Article.findByIdAndDelete(req.params.id);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json({ message: 'Article deleted successfully' });
    }
)


module.exports = {
    addArticle,
    getArticle,
    getArticles,
    deleteArticle,
    updateArticle
}