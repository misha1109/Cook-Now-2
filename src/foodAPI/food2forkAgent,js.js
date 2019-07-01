const api_key = '2b0e3b22fc5f2b7bdbfbad274a281fb0'
const axios = require('axios')
const getRecipes =async (options) =>{
    let reply
    let ingredients = options.q.join(',')
    await axios.get('https://www.food2fork.com/api/search\n', {
        // mode: 'cors',
        params: {
            key: api_key,
            q:ingredients,
            page : options.page
        },
        timeout: 6000
    })
        .then(function (response) {
            reply = response.data;
        })
        .catch(function () {
            reply = 'food2fork api request timed-out';
        })
    return reply
}
export default getRecipes

// getRecipes(['tomato','onion','pork','carrot','salt']).then(res => console.log(res))

