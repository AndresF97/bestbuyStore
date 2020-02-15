const db = require("../models");
const axios = require("axios");
// Defining methods for the productsController
module.exports = {
  findAll: function(req, res) {
    if (req.query.q === "") {
      req.query.q = "iphone";
    }
    axios
      .get(
        `https://api.bestbuy.com/v1/products(longDescription=${
          req.query.q
        }*)?format=json&apiKey=${process.env.BEST_BUY_API_KEY}`
      )
      .then(results => {
        console.log("RESULTS: ", results.data);
        res.json([...results.data.products]);
      })
      .catch(err => console.log(err));
  },
  findCart: function (req, res){
    console.log("cart")
    db.Product
    .find(req.query)
    .then(dbProduct=> res.json(dbProduct))
    .catch(err => res.status(422).json(err))
  },
  create: function(req, res) {
    db.Product.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Product.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Product.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
