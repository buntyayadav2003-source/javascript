console.log("1")

setTimeout(()=>{
    console.log("2")
    
},0);

console.log("3")



function progOne(){
    console.log("111 first");
    
}

function progTwo(){
    console.log("222 Second");
    
}

function ProgThree(){
    console.log("333 Third");
    
}

progOne()
setTimeout(progTwo, 300)
ProgThree()


function fetchData(callback){
    setTimeout(()=>{
      const data = {name: "sourabh Yadav", age: 21};
      callback(data);
    },2000);
}


function displayData(data){
    console.log("Data:",data);
    
}

fetchData(displayData);