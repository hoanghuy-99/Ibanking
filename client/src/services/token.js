async function requestToken(username,password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }

    let data = await fetch('http://localhost:8080/api/tokens', requestOptions)
    data = await data.json()
    return data
}

export {requestToken}