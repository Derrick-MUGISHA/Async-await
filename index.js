// // the api to day is these https://jsonplaceholder.typicode.com/users
// // async/await 


// // Promise : 

// async function fetchData(userId){
//     try {
//  console.log("fetching data:", userId);
//         // 1. make an Api request 
//        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`); 
//     //    console.log(response)
//      // 2. check if the request is successful
//      if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//      }
// //      // parse the Json response 
//       const data = await response.json(); 
// // // // return
//  return data;
//    } catch (error) {
    
//        console.error("Error fetching user data:", error)
//        return null;
//     }
// }
//  async function displayUser() {
//     const user = await fetchData(1);
//     if (user) {
//         console.log("User Name", user.name);
//         console.log("User Email", user.email)
//     } else {
//         console.log("User not found");
//     }
//  }

//  displayUser();



//async/await
//promise:expectation of pending,fulfilled,rejected
async function fetchData(userId){
    try {
        console.log("fetching data:",userId);
        //1.make an api request
        const response=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
         //console.log(response)
        //2.check if the request is successful
     if(!response.ok){
        throw new Error(`HTTP error! status:${response.status}`);
        //  new Error(`HTTP error! status:${response.status}`);
     }
    //parse the Json response
    const data=await response.json();
//return
return data;
    } catch (error) {
       console.log("Error fetching user data:",error)
 return null;
    }

}
    async function displayUser(){
        const user=await fetchData(1);
        if(user){
            console.log("userName",user.name);
            console.log("userEmail",user.email);
        }else{
            console.log("user not found");
        }
    }
displayUser();