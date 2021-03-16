async function requestToken(username,password){
    const data = {username:username, password:password} 
    const response = await fetch("api/tokens", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
}
export {requestToken}