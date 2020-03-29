
export const Authentication = {
    login,
};

function login(username, password) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ strategy:"local", username: username,  password:password })
    };

    const APP_URL = "https://uroflow.unionoftra.sh"
    // const url = process.env.API_URL + "/api/authentication"
    const url = APP_URL + "/api/authentication"

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

