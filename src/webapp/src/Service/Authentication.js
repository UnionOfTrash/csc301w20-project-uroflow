
export const Authentication = {
    login,
    logout,
};

function login(username, password) {

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (username==="even" && password==="123"){
                resolve(1)
            }else{
                reject(-1)
            }
        }, 1000)
    })

    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ strategy:"local", username: username,  password:password })
    // };

    // fetch(`/api/authentication`, requestOptions)
    // .then(res => {
    //     if (res.status === 200){
    //         return res.json() 
    //     }else{
    //         return Promise.reject("fail in authentication")
    //     }
    // })
    // .then(user => {
    //     // store user details and jwt token in local storage to keep user logged in between page refreshes
    //     window.localStorage.setItem('currentUser', JSON.stringify(user));
    //     return Promise.resolve(1);
    // }).catch(e => {console.log(e); Promise.reject(-1)})
}

function logout() {
    // remove user from local storage to log user out
    // localStorage.removeItem('currentUser');
    // currentUserSubject.next(null);
    return
}

function getCurrentUser(){
    return {user:"sqs"}
}


