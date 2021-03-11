async function requestNewOTP(){
    const response = await fetch("/opts",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: ''
    })
    return response.json()
}
export{requestNewOTP}