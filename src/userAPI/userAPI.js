import axios from 'axios'
// const urlPath = 'http://localhost:4000/'
const urlPath = 'https://cook-now-2.herokuapp.com/'

// axios.interceptors.response.use(response => {
//     return response;
// }, error => {
//     if (error.response.status === 401) {
//         return {
//             message: '401 error'
//         }
//     }
//     return error;
// });


export async function login( name, pass){
    try{
        let res = await axios({
            method: 'post',
            url: urlPath + 'user/login',
            headers:{
                'Content-type':'application/json',
            },
            data: {
                email: name,
                password: pass
            }
        })
        return res.data
    }

    catch ( err) {
        if(err.message == 'Request failed with status code 401'){
            return {
                message : 'Wrong password'
            }
        }
        else return {
            message : err.message
        }
    }

}

export async function addToFav(data) {
    try{
        let res = await axios({
            method: 'post',
            url: urlPath + 'user/addToFav',
            headers:{
                'Content-type':'application/json',
            },
            data: {
                email : data.email,
                favorite : data.favorite
            }
        })
        return res.data
    }

    catch ( err) {
        return {
            message : err.message
        }
    }
}

export async function signUp( email, pass){
    try{
        let res = await axios({
            method: 'post',
            url: urlPath + 'user/signup',
            headers:{
                'Content-type':'application/json',
            },
            data: {
                email: email,
                password: pass
            }
        })
        return res.data
    }

    catch( err){
        return {
            message : 'Sign up error'
        }
    }
}

export  async function verifyToken( token) {
    try{
        let res = await axios({
            method: 'post',
            url: urlPath + 'user/verifyToken',
            headers:{
                'Content-type':'application/json',
            },
            data: {
                token : token
            }
        })
        return res.data
    }

    catch( err){
        return {
            message : 'Token not valid'
        }
    }

}

export async function getFavorites( email){
    try{
        let res = await axios({
            method: 'post',
            url: urlPath + 'user/getFav',
            headers:{
                'Content-type':'application/json',
            },
            data: {
                email : email
            }
        })
        return res.data
    }

    catch( err){
        return {
            message : 'No favorites'
        }
    }
}

export async function removeFavorite(email,id){
    try{
        let res = await axios({
            method: 'post',
            url: urlPath + 'user/deleteFav',
            headers:{
                'Content-type':'application/json',
            },
            data: {
                email : email,
                recipe_id : id
            }
        })

        return res.data
    }

    catch( err){
        return {
            message : err.message
        }
    }
}

export async function addToAdded(data) {
    try{
        let res = await axios({
            method: 'post',
            url: urlPath + 'user/addToAdded',
            headers:{
                'Content-type':'application/json',
            },
            data: {
                email : data.email,
                data : data.data
            }
        })
        return res.data
    }

    catch ( err) {
        return {
            message : 'Server error'
        }
    }
}

export async function getAdded( email){
    try{
        let res = await axios({
            method: 'post',
            url: urlPath + 'user/getAdded',
            headers:{
                'Content-type':'application/json',
            },
            data: {
                email : email
            }
        })
        return res.data
    }

    catch( err){
        return {
            message : 'No added'
        }
    }
}

export async function removeAdded(email,title){
    try{
        let res = await axios({
            method: 'post',
            url: urlPath + 'user/deleteAdded',
            headers:{
                'Content-type':'application/json',
            },
            data: {
                email : email,
                title : title
            }
        })

        return res.data
    }

    catch( err){
        return {
            message : err.message
        }
    }
}


