import Cookie from 'js-cookie'

function setToken(token){
    const expires = Date.now() + 5*60*1000
    Cookie.set('token', token, {expires: new Date(expires)})
}

function getToken(){
    return Cookie.get('token')
}

function removeToken(){
    Cookie.remove('token')
}

export {
    setToken,
    getToken,
    removeToken
}