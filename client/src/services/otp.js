async function requestNewOTP(){
    const response = await fetch("/opts",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: ''
    })
    return await response.json()
}
export{requestNewOTP}