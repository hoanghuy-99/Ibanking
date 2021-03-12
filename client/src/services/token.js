async function requestToken(username,password){
    const data = {username:username, password:password} 
    const response = await fetch("api/tokens", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return await response.json()
}
export{requestToken}