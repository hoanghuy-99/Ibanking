async function requestUserById(id){
    const response = await fetch("http://localhost:8080/api/users/"+id,{
        method: "GET",
    })
    const get_user = await response.json()
    
    return get_user
}
export{requestUserById}
