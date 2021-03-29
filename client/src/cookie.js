import Cookie from 'js-cookie'
import jwtDecode from 'jwt-decode'
function setToken(token){
    let {exp} = jwtDecode(token)
    const expires = exp*1000
    console.log(new Date(expires))
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