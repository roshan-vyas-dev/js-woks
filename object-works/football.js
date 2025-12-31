
var football={
    brazil:5,
    portugal:0,
    england:1,
    germany:4,
    argentina:3,
    urugay:2,
    espain:1,
    italy:4,
    france:2
}

// for(let k in football){  // used for print all keys
//     console.log(k);
    
// }


//  obect methods
// --------------

// Object.keys

// for(let k of Object.keys(football)){    // used for print all keys
//     console.log(k);
// }


// Object.values

// for(let v of Object.values(football)){
//     console.log(v);
    
// }


// object.entries()

for(let item of Object.entries(football)){  // used for values and keys
    console.log(item[0]);
    console.log(item[1]);
}