
const sessionIdToUserMap = new Map();

function setUser(id , user){
    sessionIdToUserMap.set(id , user) // value : user , key : id 
}

function getUser(id) {
    return sessionIdToUserMap.get(id);
}

export { setUser , getUser }; 