const URL = process.env.REACT_APP_API_URL;

export const Authentication = { login, logout };

function login(username, password) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ strategy:"local", username: username,  password:password })
    };
    
    const url = URL + "authentication"

    return fetch(url, requestOptions)
    .then(res => {
        if (res.status === 201){
            return res.json()
        }else{
            return Promise.reject("fail in authentication")
        }
    })
    .then(data => {
        window.localStorage.setItem("user", data.user.username)
        window.localStorage.setItem("token", data.accessToken)
        return data;
    }).catch(e => Promise.reject(e))

}


function logout(){
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("user")
}
