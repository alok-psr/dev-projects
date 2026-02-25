import fs from fs;


const filePath = import.meta.env.FILE_PATH;

function inputFormat(key,value){
    const body = {
        key,
        value
    }
    return body;
}

async function read(){
    const res = await fs.readFileSync(filePath);
    const data = JSON.parse(res);
    console.log("reading data .. ",data)
    return data;

}

async function writeNew(key,value){
    const data = await read();
    data[key] = inputFormat(key,value)
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log('data written')
}

function remove(key) {
    const data = read();
    delete data[key];
    console.log("deleted log");
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export {read,writeNew,remove}