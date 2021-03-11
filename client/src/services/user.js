async function requestUserById(id){
    const response = await fetch("api/user/"+id,{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    get_user = await response.json()
    return get_user
}
export{requestUserById} 
