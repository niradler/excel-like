const Store = require('../../store');

class SheetController {
    static getSheet(req, res) {

        return Store
            .getSheet().then(_res => res.json(_res));
    }

    static async addRows(req, res) {
        try {
            const sheet = await Store.getSheet();

                sheet["Cells"][sheet.rows+1] = {"a":"","b":"","c":""};

            sheet.rows += 1;
            const _res = await Store.saveSheet(sheet);

            return res.json(_res);
        } catch (error) {

            return res.json(error.message);
        }
    }

    static async saveSheet(req, res) {
        const data = req.body;
        let rows_to_add = 0 ;
        try {
            const sheet = await Store.getSheet();
            if(sheet["Cells"].hasOwnProperty(data.row)){
                sheet["Cells"][data.row][data.col] = data.text;
            }else{
                sheet["Cells"][data.row] = {"a":"","b":"","c":""};
                sheet["Cells"][data.row] = {[data.col]: data.text};
                rows_to_add++;
            }
           
            sheet.rows += rows_to_add;
            const _res = await Store.saveSheet(sheet);

            return res.json(_res);
        } catch (error) {

            return res.json(error.message);
        }
    }
}

module.exports = SheetController;