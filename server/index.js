const express = require('express');
const morgan = require('morgan');
const Review = require('../database/index.js');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

const port = 4123;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at port ${port}`);
});

// retrieving all reviews for the specific product
app.get('/bechampions/products/:productId/reviews/', (req, res) => {
  Review.find({ productId: req.params.productId })
    .then((reviews) => {
      res.status(200).send(reviews);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

// voting yes for a review being helpful
app.put('/bechampions/products/:productId/reviews/:_id/yes', (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  Review.update({ _id: req.params._id }, { $inc: { yes: 1 } })
    .then(() => {
      res.status(200).send('Updated selected review');
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

// voting no for a review not being helpful
app.put('/bechampions/products/:productId/reviews/:_id/no', (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  Review.update({ _id: req.params._id }, { $inc: { no: 1 } })
    .then(() => {
      res.status(200).send('Updated selected review');
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

// reporting a review
app.put('/bechampions/products/:productId/reviews/:_id/reported', (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  Review.update({ _id: req.params._id }, { report: 'Reported' })
    .then(() => {
      res.status(200).send('Updated selected review');
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

// writing a review
app.post('/bechampions/products/:productId/reviews/writeReview', (req, res) => {
  const {
    title, description, stars, comfortLevel, fit, user, email,
  } = req.body;
  const review = {
    productId: req.params.productId, title, description, stars, comfortLevel, fit, user, email,
  };
  Review.create(review)
    .then(() => {
      res.status(200).send('Added review!');
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});