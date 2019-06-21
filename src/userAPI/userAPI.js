import axios from 'axios'

const urlPath = 'http://localhost:3000/'

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        return {
            message: '401 error'
        }
    }
    return error;
});


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
        return err
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
        return res.message
    }

    catch( err){
        console.log('sign up err')
        return err
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
        return err
    }

}

// export async function login( email, pass){
//     // fetch('https://jsonplaceholder.typicode.com/posts',{
//     //     method:'POST'
//     // })
//     //     .then(response => response.json())
//     //     .then(json => console.log(json))
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method:'POST',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         mode:'no-cors',
//         body: {
//             "email": email,
//             "password": pass
//         }
//         }).then( res => JSON.stringify(res)).then(res => console.log(res))
// }