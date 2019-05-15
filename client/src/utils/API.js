import axios from "axios";
import Axios from "axios";

 export default {
    getGame: function(search){
        console.log("goodbye")
        console.log(search)
        // var m = require("mithril")
         //return axios.get("/api/games",  {params:search})

        //  return axios({
        //     type: 'GET',
        //     dataType: 'jsonp',
        //     crossDomain: true,
        //     jsonp: 'json_callback',
        //     url: 'https://www.giantbomb.com/api/search/?api_key=f25f7333b1e04db495a7f65290f6db3db10539d1&format=json&query=' + search.gameTitle + '&resources=game',
        //     // headers: {autorizacion: localStorage.token},
        //     complete: function() {
        //         console.log('done');
        //     },
        //     success: function(data) {
        //         console.log(data);
        //     }
        // });

        //  return axios.get({
        //     url: "https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/search/?api_key=f25f7333b1e04db495a7f65290f6db3db10539d1&format=json&query=" + search.gameTitle + "&resources=game",
        //     dataType: "jsonp",
        //   });
          
          
        

          return axios.get("https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/search/?api_key=f25f7333b1e04db495a7f65290f6db3db10539d1&format=json&query=" + search.gameTitle + "&resources=game");
    },

    getNews: function(){
        return axios.get("https://cors-anywhere.herokuapp.com/https://newsapi.org/v1/articles?source=ign&sortBy=top&pageSize=5&apiKey=63e4877bdc6a4e6aa814e270f021ce1f&dataType=json&crossDomain=true")
        
        .then(function(response){
            let articles = [];
                for(var i =0 ; i < 5; i++){
                    articles.push(response.data.articles[i])
                    console.log(articles)
                }
            console.log(articles)
            return articles
             
        })
    },

    saveGame: function(save){
            return axios.post("/api/games", save);
        },
        
    getSaved: function(){
        return axios.get("/api/games/saved");

    },
    
    searchTrailer: function(title, res){ 
    
            return axios.get("https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/search?key=AIzaSyDDj_AcWjGNwn1eXlP4bavbvWzlgj6G5Q8&part=snippet&q=" + title + " gameplay trailer&maxResults=1")
            .then(function(response){
                
                console.log(response)
                return response.data.items[0].id.videoId
            }).catch(function(err){
                console.log(err);
            }) 
    
            // for (var i = 0; i < titles.titleArray.length; i++){
    
            //     return axios.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyDDj_AcWjGNwn1eXlP4bavbvWzlgj6G5Q8&part=snippet&q=" + titles.titleArray[i] + "&maxResults=10")
            //     .then(function(response){
            //         console.log(response.data.items[0].id.videoId)
            //         video_ids.push(response.data.items[0].id.videoId)
            //         console.log(video_ids)
            //     }).catch(function(err){
            //         console.log(err);
            //     }) 
    
    
            // }
        },
        
        delete: function(id){
            return axios.delete("/api/games/delete" + id)
        }
     };
