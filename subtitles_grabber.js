const axios = require('axios');

module.exports = (videoId) =>
  axios.get('https://www.googleapis.com/youtube/v3/captions', {params:{videoId, part: 'snippet', key: 'AIzaSyBhhj4X9PsCNaICWNDDDi-NmouHtu9EC3g'}})
    .then(function (response) {
       const id = response.data.items.find(e => e.snippet.language === "en").id;

        return axios.get(`https://www.googleapis.com/youtube/v3/captions/${id}`, {params:{key: 'AIzaSyBhhj4X9PsCNaICWNDDDi-NmouHtu9EC3g'}}).then(function (response) {
          return response.data
        })
    })
