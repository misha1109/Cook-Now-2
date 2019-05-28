const api_key = '2b0e3b22fc5f2b7bdbfbad274a281fb0'
const axios = require('axios')
const getRecipes =async (i) =>{
    let reply
    let ingredients = i.join(',')
    await axios.get('https://www.food2fork.com/api/search\n', {
        params: {
            key: api_key,
            q:ingredients
        }
    })
        .then(function (response) {
            reply = response.data;
        })
        .catch(function (error) {
            reply = error;
        })
    return reply
}
export default getRecipes

// getRecipes(['tomato','onion','pork','carrot','salt']).then(res => console.log(res))

