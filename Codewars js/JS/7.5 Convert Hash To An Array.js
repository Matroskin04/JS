function convertHashToArray(hash) {
  
    let object = [];
    
    for (key in hash) {
      object.push( [key, hash[key]] )
    }
    
    object.sort();
    
    return object
  }

// Another variant from Codewars
const convertHashToArray = o => Object.entries(o).sort();



  /*
  Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically by key name.
*/