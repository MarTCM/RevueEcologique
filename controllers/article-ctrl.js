const Article = require("../models/article-model");

createArticle = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide an article",
    });
  }

  const article = new Article(body);

  if (!article) {
    return res.status(400).json({ success: false, error: err });
  }

  article
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: article._id,
        message: "Article created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Article not created!",
      });
    });
};

updateArticle = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Article.findOne({ _id: req.params.id }, (err, article) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Article not found!",
      });
    }
    article.titre = body.titre;
    article.paragraphe = body.paragraphe;
    article.imgLink = body.imgLink;
    article.auteur = body.auteur;
    article
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: article._id,
          message: "Article updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Article not updated!",
        });
      });
  });
};

deleteArticle = async (req, res) => {
  await Article.findOneAndDelete({ _id: req.params.id }, (err, article) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!article) {
      return res
        .status(404)
        .json({ success: false, error: `Article not found` });
    }

    return res.status(200).json({ success: true, data: article });
  }).catch((err) => console.log(err));
};

getArticleById = async (req, res) => {
  await Article.findOne({ _id: req.params.id }, (err, article) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!article) {
      return res
        .status(404)
        .json({ success: false, error: `Article not found` });
    }
    return res.status(200).json({ success: true, data: article });
  }).catch((err) => console.log(err));
};

getArticles = async (req, res) => {
  await Article.find({}, (err, articles) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!articles.length) {
      return res
        .status(404)
        .json({ success: false, error: `Article not found` });
    }
    return res.status(200).json({ success: true, data: articles });
  }).catch((err) => console.log(err));
};

module.exports = {
  createArticle,
  updateArticle,
  deleteArticle,
  getArticles,
  getArticleById,
};
