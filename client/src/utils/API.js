

import axios from "axios";
 export default {
     getGame: function(search){
        console.log("goodbye")
        console.log(search)

         //return axios.get("/api/games",  {params:search})
         return axios.get("https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/search/?api_key=687d257ace2a1dad49e71172b53403375c11d333&format=json&query=" + search.gameTitle + "&resources=game")
    
 }
};