// function login(token, username, email) {
function login(username, email, password) {
    const user = {
        // token: token,
        username: username,
        email: email,
        password: password
        // console.log(user)
    }
    localStorage.setItem('user', JSON.stringify(user))
    return user
}

function logout(){
    localStorage.removeItem('user')
}


function isLoggedIn(){
    const user = localStorage.getItem('user')
    return user !== null
}


function getUser(){
    return JSON.parse(localStorage.getItem('user'))
}


export const authService = {
    login,
    logout,
    isLoggedIn,
    getUser
}