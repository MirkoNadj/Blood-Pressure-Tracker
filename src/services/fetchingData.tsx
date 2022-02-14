

export const postNewUser  = async (newUserData:any) => {
    await fetch(`http://localhost:4000/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserData)
    })
    // .then((response) => {
    //     if (!response.ok) {
    //         let err = new Error("HTTP status code" + response.status);
    //         err.status = response.status;
    //         throw err;
    //     }
    //     return console.log(response);
    // })

}

export const postUserBP = (bPList: any, userID: any):void => {
    fetch(`http://localhost:4000/users/${userID}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({"bPList": bPList})
    })
}

// export const getUserData = () => {
//     fetch(`http://localhost:3300/users/2`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     })
//     .then(response => response.json())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
    // .then((response) => {
    //     console.log( '1r '+ response)
    //     return response;
    // }).then((response) => {
    //     console.log( '2r '+ response)
    //     return console.log('3r ' + response.json());
    // }).then((nesto) => {return nesto})
//}

export const fetchUser = async (userID:any) => {
    const res = await fetch(`http://localhost:4000/users/${userID}`);
    return res.json(); 
}
