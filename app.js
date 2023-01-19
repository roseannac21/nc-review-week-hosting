const db = require("./db/connection");
const express = require("express");
const app = express();
const { getCategories, getReviews, getReview, getCommentsForReview } = require('./controller')

app.use(express.json());

app.get("/api/", (request, response) => {
    response.status(200).send({ msg: "all ok" });
});

app.get("/api/categories/", getCategories);

app.get("/api/reviews/", getReviews);

app.get("/api/reviews/:review_id/", getReview);

app.get("/api/reviews/:review_id/comments/", getCommentsForReview);

app.use((req, res, next) => {
  res.status(404).send({msg: "path not found"})
})

app.use((err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send({msg: err.msg});
  }
})

  // app.use((err, req, res, next) => {
  //   if (err) {
  //     console.log(err);
  //   }
 // })

module.exports = app;