const fs = require('fs');
class Store {
    static _readFile() {
         const promise = new Promise((resolve,reject) =>{
            fs.readFile('sheet.json', (err, data) => err ? reject(err) : resolve(JSON.parse(data)));
         })
        return promise;
    }

    static _writeFile(data) {
        const promise = new Promise((resolve,reject) =>{
            fs.writeFile('sheet.json', JSON.stringify(data), (err) => err ? reject(err) : resolve('Saved!'));
        })
       return promise;
   }

    static getSheet() { return this._readFile();}

    static saveSheet(data) { return this._writeFile(data);}

}

module.exports = Store;