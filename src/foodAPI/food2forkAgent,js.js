let api_key = '2b0e3b22fc5f2b7bdbfbad274a281fb0'
const axios = require('axios')
axios.get('https://www.food2fork.com/api/search\n', {
    params: {
        key: api_key,
        q:'onion,potato,pork,pepper'
    }
    })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
