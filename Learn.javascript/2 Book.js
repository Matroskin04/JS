let user = {
    name: "Ivan",
    data: {
        name: {
            age: 22,
        }
    }
};
    
let admin = {};
    
function getObj(admin,user) {
    for(key in user) {
        if ( typeof user[key] !== "object" ) {
            admin[key] = user[key]; 
        } else {
            admin[key] = {}; 
            return getObj(admin[key],user[key]);
        }
    }
}
    
getObj(admin,user)