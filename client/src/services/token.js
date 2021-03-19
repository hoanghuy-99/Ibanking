function requestToken(username,password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }
    return fetch('api/tokens', requestOptions)
        //.then()
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

export {requestToken}