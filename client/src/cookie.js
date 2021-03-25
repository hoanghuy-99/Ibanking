import Cookie from 'js-cookie'
import jwtDecode from 'jwt-decode'
function setToken(token){
    let {exp} = jwtDecode(token)
    console.log(exp)
    const expires = exp
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