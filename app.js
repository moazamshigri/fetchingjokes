// What is API?
//Api stands for Application Programming interface
// Syntax: 
// let promise = fetch(url,[option]);
let data;
let response;
let refresh = document.querySelector(".refresh");
let joke = document.querySelector(".joke");
let generate = document.querySelector (".generate");
generate.addEventListener('click',() => {
  refresh.style = "display:inline-block;";
  generate.style = "display:none;";
  getjokes();
}
)
refresh.addEventListener('click',() => {
    joke.innerHTML = ``;
    getjokes();
}
)

const url = "https://v2.jokeapi.dev/joke/Any";


const getjokes = async () => {
    console.log("Getting Data...");
    
    
    response = await fetch(url); //what is Response : it is a Promise
    // while()
    console.log(response); // JSON Format

    data = await response.json(); // convert Json format to readable
    //  console.log(data[0].text);
    if(data.type == "twopart"){
        console.log(data.setup);
        
        joke.innerHTML = `<h2 class = "setup"> ${data.setup} </h2> <br> <h2 class = "delivery"> ${data.delivery} </h2>`;
        console.log("\n",data.delivery);}
    // console.log(data)
    else if(data.type == "single"){
        console.log(data.joke);
        joke.innerHTML = `<h2 class = "setup"> ${data.joke} </h2>`;
    }
  
}



// Understanding Some New Terms 
// AJAX Asynchronus Javascript & XML
// JSON Javascript Object Notation


// when we fetch data from get request the Data is in the form of json form
// which is not readable 
// it has to be converted into readable form that's why we use .json to convert data
