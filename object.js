//  Here we are creating an object

const allusers =[ {
    firstname: "Kartik",
    gender: "male"
},

{
    firstname: "Shrish",
    gender: "male"
},
{
    firstname: "Riya",
    gender: "female"
},
{
    firstname: "Shubham",
    gender: "male"
}
]

// how to access the value via key

for(let i =0; i<allusers.length; i++){
    if(allusers[i]["gender"]=="male"){
        console.log(allusers[i].firstname)
    }
}

