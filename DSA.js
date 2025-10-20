// DSA


// let numbers = [3,1,4,1,5]

// console.log(numbers[2]) // index of number 2 

// numbers.push(6);

// console.log(numbers)

// numbers.pop()

// console.log(numbers)

// numbers.forEach(num => console.log(num * 2));


// find max

// let arr = [3,1,4,1,5];

// let max = arr[0]

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
// }

// console.log(max)



async function fetchPosts() {
    try {
        // https://jsonplaceholder.typicode.com/posts 
        const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
        console.log(posts);
         // validation
        if (!posts.ok)  throw new Error("failed to fetch posts");
        // transform to json(object)
        const response = await posts.json();
        console.log("Here are sme posts");

        // use of the api where we are going to have five posts 

        response.slice(0, 5).forEach((post, index) => {
            console.log(`\nPost #${index +1}`);
            console.log(`Title :${post.title}`);
            console.log(`Body :${post.body}`);
        })

    } catch (error) {
        console.error("Error:", error.message);
    }
 
}

fetchPosts()