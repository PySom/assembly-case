
const itemIsValid = (item) => {
    if (Array.isArray(item)) return !!item.length
    return !!item
}

//use a unique name and expiry date to save an item in local storage
const persistItemInLS = (name, item, expireAfter) => {
    if (name && itemIsValid(item)) {
        const date = new Date();
        date.setDate(date.getDate() + expireAfter);
        const data = {
            item,
            expiry: date
        }
        if (localStorage) {
            localStorage.setItem(name, JSON.stringify(data))
        }
    }
    
}

const removeItemFromLS = (name) => {
    if (localStorage) {
        localStorage.removeItem(name)
    }
}


const getItemInLs = (name) => {
    if (localStorage) {
        const localItem = localStorage.getItem(name);
        if (localItem) {
            const { item, expiry } = JSON.parse(localItem);
            //check if item has expired
            const checkExpiry = new Date(expiry) - new Date();
            if (checkExpiry > 0) {
                //console.log(item)
                return item
            }
        }
    }
    return null;
}

const getTokenInLS = () => {
    if (localStorage) {
        return localStorage.getItem('token');
    }
    return null;
}




const checkItemInLs = (name) => {
    //get intended item from local storage
    const item = getItemInLs(name);
    return new Promise((resolve, reject) => {
        item ? resolve(item.item) : reject(item)
    })
}

const ls = {
    persistItemInLS,
    removeItemFromLS,
    getItemInLs,
    checkItemInLs,
    getTokenInLS,
}
export default ls;