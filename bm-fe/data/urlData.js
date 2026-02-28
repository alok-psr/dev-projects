const STORAGE_KEY = 'bookmarks'

function read(){
    const saved = localStorage.getItem('bookmarks');
    const data = saved ? JSON.parse(saved) : {}; // data is stored in obj of obj :: {key:{key,value}...}
    console.log("reading data .. ")
    return data;
}

function writeNew(key, value) {
    const data = read();
    data[key] = {key, value};
    console.log('data written ...')
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function remove(key=0) {
    const data = read();
    delete data[key];
    console.log(key)
    console.log("deleted log ...");
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export {read,writeNew,remove}