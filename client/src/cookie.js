import Cookie from 'js-cookie'

function setToken(token){
    const expires = Date.now() + 5*60*1000
    Cookie.set('token', token, {path:'', expires})
}

function getToken(){
    Cookie.get('token')
}

export {
    setToken,
    getToken
}