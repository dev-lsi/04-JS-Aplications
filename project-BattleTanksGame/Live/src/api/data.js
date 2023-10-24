import { getUserData } from "../util.js";


export function createPointer(className, objectId) {
    return {
        _type: 'Pointer',
        className,
        objectId
    };
}

export function addOwner(item){
    const userData = getUserData();
    item.owner=createPointer('_User',userData.id);
    
}