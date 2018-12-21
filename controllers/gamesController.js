const path = require("path");
const router = require("express").Router();
const db = require("../models");
const axios = require("axios");

// const gamesFunction ={
//     getGame: function (req, res){
//         console.log("hello")
//         axios.get("https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/search/?api_key=687d257ace2a1dad49e71172b53403375c11d333&format=json&query=" + req.query.gameTitle + "&resources=game")
//         .then(function(data){
//             console.log("hello")
//           res.json(data)
//         }).catch(function(err){
//             console.log(err);
//             console.log("hello")

//         })
//         console.log(req.query.gameTitle)
//     }

    
// }

const gameFunction ={
    create: function (req, res){
        db.game
            .create(req.body)
            .then(dbModel=> res.json(dbModel))
            .catch(err => console.log(err));
    },

    getSaved: function (req, res) {
        console.log("hello")
        db.game
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    remove: function(req,res){
        db.game
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}

router.post("/api/games", gameFunction.create)
router.get("/api/games/saved", gameFunction.getSaved)
router.delete("/api/games/delete:id", gameFunction.remove)

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  module.exports = router;
  