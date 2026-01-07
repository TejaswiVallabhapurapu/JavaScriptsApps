//API calling with async await
const getDetails = async() => {
//request data gathering logic
let userID = document.getElementById("userID").value;
let para = document.getElementById("simple");
let result = document.getElementById("sample");
//validation logic
if(userID == ""){
    alert("Please enter userid...");
}
para.style.display = "block";
//business logic
try{
    const [userresult,postresult] = await Promise.all([fetch(`https://jsonplaceholder.typicode.com/users/${userID}`),
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
    ]);
    const userdata = await userresult.json();
    const postdata = await postresult.json();
    console.log(postdata);
    result.innerHTML = 
    `<h2>${userdata.name}</h2>
    <p>${userdata.email}</p>
    <h2>posts:</h2>
    <ul>${postdata.map((item) => `<li>${item.title}</li>`
    )}</ul>
    `;
    }
    catch(err){
        result.innerHTML = "<h3>Something went wrong...</h3>";
}
};

//?userId=${userId}